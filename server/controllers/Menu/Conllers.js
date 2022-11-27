import TypeMenu from './Type.js';

export const findAll = (props) => {
    return TypeMenu.findAll(props);
}

export const findById = (id) => {
    return TypeMenu.findByPk(id);
}

export const deleteById = (id) => {
    return TypeMenu.destroy({ where: { id: id } });
}

export const create = (gig) => {
    let newGig = new TypeMenu(gig);
    return newGig.save();
}

export const updateGig = (gig, id) => {
    let updateGig = {
        category: gig.category,
        name: gig.name,
        price: gig.price
    };
    return TypeMenu.update(updateGig, { where: { id: id } });
}