// build your `Project` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('project')
}

function getById(id) {
    return db('project')
    .where('project_id', id)
    .first()
}

function addProject(projects) {
    return db('project')
    .insert(projects)
    .then(id => {
        return getById(id[0])
    })
}

module.exports = {
    getAll,
    getById,
    addProject
}