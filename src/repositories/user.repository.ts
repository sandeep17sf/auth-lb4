import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasOneRepositoryFactory,
  repository,
} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Role, User, UserRelations} from '../models';
import {RoleRepository} from './role.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  public readonly role: HasOneRepositoryFactory<Role, typeof User.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('RoleRepository')
    protected roleRepositoryGetter: Getter<RoleRepository>,
  ) {
    super(User, dataSource);
    this.role = this.createHasOneRepositoryFactoryFor(
      'role',
      roleRepositoryGetter,
    );
  }
}
