import {inject} from '@loopback/core';
import {DefaultKeyValueRepository} from '@loopback/repository';

import {DbDataSource} from '../datasources';
import {RevokedToken} from '../models';

export class RevokedTokenRepository extends DefaultKeyValueRepository<RevokedToken> {
  constructor(@inject('datasources.redis') dataSource: DbDataSource) {
    super(RevokedToken, dataSource);
  }
}
