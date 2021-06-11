// build your `Task` model here
const db = require('../../data/dbConfig')


function getAll() {
    return db('task as t')
}

function getById(id) {
    return db('task')
      .where('task_id', id)
      .first();
  }

function addTask(tasks) {
    return db('task')
    .insert(tasks)
    .then(id => {
        return getById(id[0])
    })
}

module.exports = {
    getAll,
    getById,
    addTask
} 