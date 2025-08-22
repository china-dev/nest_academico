import { Module } from '@nestjs/common';
import { CidadeControllerCreate } from './contollers/cidade.controller.create';
import { CidadeControllerFindall } from './contollers/cidade.controller.findall';
import { CidadeControllerFindone } from './contollers/cidade.controller.findone';
import { CidadeControllerUpdate } from './contollers/cidade.controller.update';

const cidadeControllers = [
  CidadeControllerFindall,
  CidadeControllerFindone,
  CidadeControllerCreate,
  CidadeControllerUpdate,
];
@Module({
  imports: [],
  controllers: [...cidadeControllers],
  providers: [],
})
export class CidadeModule {}
