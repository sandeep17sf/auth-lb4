import {Entity, model, property} from '@loopback/repository';
import {Permissions} from 'loopback4-authorization';

@model({
  name: 'roles',
})
export class Role extends Entity implements Permissions<string> {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  key: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  permissions: string[];
  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
