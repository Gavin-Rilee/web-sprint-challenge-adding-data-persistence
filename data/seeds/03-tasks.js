
exports.seed = function(knex) {
      return knex('task').insert([
        {task_id: '1', task_description: 'Grab the big boom and the anihalaition ray' , task_notes: '', task_completed: false, project_id:1},
        {task_id: '2', task_description: 'Nuke the world' , task_notes: '',  task_completed: false, project_id:1},
        {task_id: '3', task_description: 'grab a english book and start teaching' , task_notes: '',  task_completed: false, project_id:2}
      ]);
};
