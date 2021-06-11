
exports.seed = function(knex) {
      return knex('project').insert([
        {project_id: 1, project_name: 'destroy the world',
          project_description: 'DESTROY EARTH AND REBUILD', project_completed:1},

        {project_id: 2, project_name: 'get snurch to talk in english', 
        project_description: 'Teach the snurch english', project_completed:1},
        
      ]);
    
};
