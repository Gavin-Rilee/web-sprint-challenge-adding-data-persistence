// build your `Task` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.*",
      "p.project_name",
      "p.project_description"
    );
  return tasks.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed ? true : false,
    };
  });
}

async function getById(id) {
  const task = db("tasks").where(id).first();
  return { ...task, task_completed: task.task_completed ? true : false };
}

async function addTask(task) {
  const [id] = await db("tasks").insert(task);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  addTask,
};
