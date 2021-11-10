import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MoongodbDataSource} from '../datasources';
import {Producto, ProductoRelations} from '../models';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {
  constructor(
    @inject('datasources.moongodb') dataSource: MoongodbDataSource,
  ) {
    super(Producto, dataSource);
  }
}
