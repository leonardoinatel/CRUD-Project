const pessoas = require('../models/pessoas')

const index = async(db, req, res) => {
    const results = await pessoas.findAll(db)
    res.render('pessoas/index', {
        pessoas: results
    })
}

const deleteOne = async(db, req, res) =>{
    await pessoas.deleteOne(db, req.params.id)
    res.redirect('/pessoas')
}

const createForm = (req,res) => {
    res.render('pessoas/create')    
}

const createProcess = async(db, req, res) =>{
    await pessoas.create(db, req.body)
    res.redirect('/pessoas')
}


const updateForm = async(db, req, res) => {
    console.log(req.params.id)
    const pessoa = await pessoas.findById(db, req.params.id)
    res.render('pessoas/update', { pessoa })    
}

const updateProcess = async(db, req, res) =>{
    await pessoas.update(db, req.params.id, req.body)
    res.redirect('/pessoas')
}

module.exports = {
    index,
    deleteOne,
    createForm,
    createProcess,
    updateForm,
    updateProcess
}