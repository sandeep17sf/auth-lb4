import {inject} from '@loopback/core';
import {DefaultKeyValueRepository} from '@loopback/repository';

import {DbDataSource} from '../datasources';
import {RefreshToken} from '../models';

export class RefreshTokenRepository extends DefaultKeyValueRepository<RefreshToken> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(RefreshToken, dataSource);
  }
}
