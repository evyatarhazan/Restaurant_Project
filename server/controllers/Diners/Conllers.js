import TypeDiners from './Type.js';

export const findAll = (props) => {
    return TypeDiners.findAll(props);
}

export const findById = (id) => {
    return TypeDiners.findByPk(id);
}

export const deleteById = (id) => {
    return TypeDiners.destroy({ where: { id: id } });
}

export const create = (gig) => {
    let newGig = new TypeDiners(gig);
    return newGig.save();
}

export const updateGig = (gig, id) => {
    let updateGig = {
        name: gig.name,
        size: gig.size,
        queue: gig.queue,
        reservations: gig.reservations,
        nameTable: gig.nameTable,
        sum: gig.sum
    };
    return TypeDiners.update(updateGig, { where: { id: id } });
}