const db = require("../../data/dbConfig");

async function getAll() {
  const project = await db("projects");
  return project.map((bigArr) => {
    return {
      ...bigArr,
      project_completed: bigArr.project_completed ? true : false,
    };
  });
}

async function getById(project_id) {
  const project = await db("projects").where({project_id}).first();
  return {
    ...project,
    project_completed: project.project_completed ? true : false,
  };
}

async function createProject(project) {    

  const [project_id] = await db("projects").insert(project);
  return getById(project_id);
}

module.exports = {
  getAll,
  getById,
  createProject,
};
