import {inject} from '@loopback/core';
import {SoftCrudRepository} from 'loopback4-soft-delete';
import {DbDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';
export class TodoRepository extends SoftCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Todo, dataSource);
  }
}
