import { findAll, findById, updateGig, deleteById, create } from './Conllers.js';

export const postDataTablesFood = (req, res) => {
    req.body.lastUpdated = new Date();

    create(req.body).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getAllTablesFood = (req, res) => {
    console.log(req)
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getByIdTablesFood = (req, res) => {
    const { id } = req.params;

    findById(id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const updateTablesFood = (req, res) => {
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

export const deleteByIdTablesFood = (req, res) => {
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

export const sitByPeriority_ = async () => {
    return await findAll({
        where: {
            status: null
        },
        order: [
            ['capacity', 'ASC'],
        ],
    })
        .catch((error) => {
            console.log(error);
        });
}

export const updateStatus = async (dinersID, tableID) => {
    let body = {status: dinersID}
    return await updateGig(body, tableID)
        .catch((error) => {
            console.log(error);
        });
}