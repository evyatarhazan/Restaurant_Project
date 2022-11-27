import { findAll, findById, updateGig, deleteById, create } from './Conllers.js';
import { sitByPeriority_, updateStatus } from '../TablesFood/Model.js';

export const postDataMenu = (req, res) => {
    req.body.lastUpdated = new Date();

    create(req.body).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getAllMenu = (req, res) => {
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getByIdMenu = (req, res) => {
    const { id } = req.params;
    let category = "id"
    const num = Number(id)

    if (String(num) == String(NaN)) {
        findAll({
            where: {
                category: id
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

export const updateMenu = (req, res) => {
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

export const deleteByIdMenu = (req, res) => {
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