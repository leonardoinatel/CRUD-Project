
const findAll = (connection) =>{
    return new Promise((resolve, reject) =>{
        connection.query('select * from pessoas', (err, results) => {
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

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

module.exports = {
    findAll,
    deleteOne
}