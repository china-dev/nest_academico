import { Module } from '@nestjs/common';
import { CidadeControllerCreate } from './contollers/cidade.controller.create';
import { CidadeControllerFindall } from './contollers/cidade.controller.findall';
import { CidadeControllerFindone } from './contollers/cidade.controller.findone';
import { CidadeControllerRemove } from './contollers/cidade.controller.remove';
import { CidadeControllerUpdate } from './contollers/cidade.controller.update';
import { CidadeServiceCreate } from './service/cidade.service.create';
import { CidadeServiceFindall } from './service/cidade.service.findall';
import { CidadeServiceFindOne } from './service/cidade.service.findone';
import { CidadeServiceRemove } from './service/cidade.service.remove';
import { CidadeServiceUpdate } from './service/cidade.service.update';

const cidadeControllers = [
  CidadeControllerFindall,
  CidadeControllerFindone,
  CidadeControllerCreate,
  CidadeControllerUpdate,
  CidadeControllerRemove,
];

const cidadeServices = [
  CidadeServiceCreate,
  CidadeServiceUpdate,
  CidadeServiceFindall,
  CidadeServiceFindOne,
  CidadeServiceRemove,
];
@Module({
  imports: [],
  controllers: [...cidadeControllers],
  providers: [...cidadeServices],
  exports: [...cidadeServices],
})
export class CidadeModule {}
