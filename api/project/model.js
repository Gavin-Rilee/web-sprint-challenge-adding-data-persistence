const db = require("../../data/dbConfig");

async function getAll() {
  const project = await db("project as p");
  return project.map((bigArr) => {
    return {
      ...bigArr,
      project_completed: bigArr.project_completed ? true : false,
    };
  });
}

async function getById(id) {
  const newProject = await db("project as p").where("p.project_id", id).first();
  return {
    ...newProject,
    project_completed: newProject.project_completed ? true : false,
  };
}

async function createProject(project) {    
    
  const [project_id] = await db("project").insert(project);
  return getById(project_id);
}

module.exports = {
  getAll,
  getById,
  createProject,
};
