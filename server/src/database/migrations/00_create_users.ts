import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable().unique();
        table.string('pass').notNullable();
        table.string('avatar');//.notNullable();//não obrigatório
        table.string('whatsapp').unique();//.notNullable();//não obrigatório
        table.string('bio');//.notNullable();//não obrigatório

    })
}
export async function down(knex:Knex) {
   return knex.schema.dropTable('users');
}