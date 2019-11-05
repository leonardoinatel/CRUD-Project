const findAll = async(db) =>{
    return await db('pessoas').select('*')
}

//models codigo do banco
const deleteOne = async(db, id) =>{
    await db('pessoas').where({ id: id}).del().limit(1)
}

const findById = async (db, id) => {
    return new Promise((resolve, reject) => {
        db('pessoas').where({ id: id }).limit(1).then((results) => {
            if (results.length > 0) {
                resolve(results[0]);
            } else {
                resolve({});
            }
        }).catch((err) => {
            reject(err);
        })
    });
}

const update = async (db, id, data) => {
        await db('pessoas').where({ id: id}).update({
            nome: data.nome,
            cargo: data.cargo,
            nascimento: data.nascimento
        })
}

const create = async(db, data) =>{
    await db('pessoas').insert({
        nome: data.nome,
        cargo: data.cargo,
        nascimento: data.nascimento
    })
}

module.exports = {
    findAll,
    deleteOne,
    create,
    update,
    findById
}