// build your `Resource` model here
const db = require('../../data/dbConfig')


function getAll() {
    return db('resource')
}

function getById(id) {
    return db('resource')
      .where('resource_id', id)
      .first();
  }

function addResource(resources) {
    return db('resource')
    .insert(resources)
    .then(id => {
        return getById(id[0])
    })
}

module.exports = {
    getAll,
    getById,
    addResource
} 