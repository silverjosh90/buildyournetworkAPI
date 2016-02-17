exports.up = function(knex, Promise) {
    return knex.schema.createTable('freelancers', function(table) {
        table.increments();
        table.string('first_name');
        table.string('last_name');
        table.string('type'); //designer or developer--use forms to ensure consistency at this point
        table.string('city');
        table.string('state');
        table.string('linkedin_url');
        table.string('github_profile');
        table.string('availability');
        table.string('email_address');
        table.string('stack'); //front, back, or full-stack
        table.text('specialties'); //send this field an array, and we can look based upon .WhereIn or .orWhereIn
        table.text('technologies'); // ditto
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('freelancers');
};
