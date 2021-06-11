exports.seed = function(knex) {
  return knex('projects_resources').insert([
    {projects_resources_id: 1, project_id: 1, resource_id:1},
    {projects_resources_id: 2, project_id: 1, resource_id:2},
    {projects_resources_id: 3, project_id: 1, resource_id:3},
    {projects_resources_id: 4, project_id: 2, resource_id:4}
  ]);
};

