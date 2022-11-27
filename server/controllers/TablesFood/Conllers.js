import TypeTablesFood from "./Type.js";


export const findAll = (props) => {
    return TypeTablesFood.findAll(props);
}

export const findById = (id) => {
    return TypeTablesFood.findByPk(id);
}

export const deleteById = (id) => {
    return TypeTablesFood.destroy({ where: { id: id } });
}

export const create = (gig) => {
    let newGig = new TypeTablesFood(gig);
    return newGig.save();
}

export const updateGig = (gig, id) => {
    let updateGig = {
        capacity: gig.capacity,
        status: gig.status
    };
    return TypeTablesFood.update(updateGig, { where: { id: id } });
}