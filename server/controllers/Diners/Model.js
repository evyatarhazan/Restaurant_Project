import { findAll, findById, updateGig, deleteById, create } from './Conllers.js';
import { sitByPeriority_, updateStatus } from '../TablesFood/Model.js';

export const postDataDiners = (req, res) => {
    req.body.queue = "tobesited";
    req.body.reservations = "{}";
    req.body.sum = 0;
    req.body.lastUpdated = new Date();

    create(req.body).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getAllDiners = (req, res) => {
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getByIdDiners = (req, res) => {
    const { id } = req.params;
    let category = "id"
    const num = Number(id)

    if (String(num) == String(NaN)) {
        findAll({
            where: {
                queue: id
            }
        })
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else {
        findById(id).
            then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export const updateDiners = (req, res) => {
    updateGig(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig updated successfully",
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

export const deleteByIdDiners = (req, res) => {
    deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig deleted successfully",
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

export const sitByPeriority = async (req, res) => {
    let tadlesFoods = await sitByPeriority_()
    let diners = await
        findAll({
            where: {
                queue: 'tobesited'
            },
            order: [
                ['size', 'DESC'],
                ['lastUpdated', 'ASC'],
            ],
        })
            .catch((error) => {
                console.log(error);
            });
            
    for (let diner of diners) {
        for (let tablesFood of tadlesFoods) {
            if (diner.size <= tablesFood.capacity) {
                await updateStatus(diner.id, tablesFood.id)

                let body = {queue: 'sit', nameTable: tablesFood.id}

                await updateGig(body, diner.id)
                    .catch((error) => {
                        console.log(error);
                    });
                res.send(`${diner.id},${tablesFood.id}`);
                return
            }
        }
    }
    res.send("No place to sit for any group");

}

export const getReservation = (req, res) => {
    findById(req.params.id).
            then((data) => {
                res.send(data.reservations);
            })
            .catch((error) => {
                console.log(error);
            });
}

export const postReservation = (req, res) => {
    updateGig(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig updated successfully",
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}