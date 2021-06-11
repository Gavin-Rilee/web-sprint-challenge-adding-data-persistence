
exports.seed = function(knex) {
      return knex('resource').insert([
        {resource_id:1, resource_name:'big boom cannon', resource_description:''},
        {resource_id:2, resource_name:'the anihalaition ray ', resource_description:''},
        {resource_id:3, resource_name:'nuke', resource_description:''},
        {resource_id:4, resource_name:'english book', resource_description:''}
      ]);
};
