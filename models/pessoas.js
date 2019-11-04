
const findAll = (connection) =>{
    return new Promise((resolve, reject) =>{
        connection.query('select * from pessoas ORDER BY nome ', (err, results) => {
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}
//models codigo do banco
const deleteOne = (connection, id) =>{
    return new Promise((resolve, reject) => {
        connection.query('DELETE from pessoas WHERE id = '+ id + ' limit 1',(err) => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

const create = (connection, data) =>{
    return new Promise((resolve,reject) =>{
        connection.query(`Insert into pessoas(nome,cargo,nascimento) values('${data.nome}','${data.cargo}','${data.nascimento}')`, (err) =>{
            if(err){
                console.log(err)
                reject(err)

            }else{
                resolve()
            }
        })
    })
}


module.exports = {
    findAll,
    deleteOne,
    create
}