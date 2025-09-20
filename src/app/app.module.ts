import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { CidadeModule } from 'src/cidade/cidade.module';

const oracledb = require('oracledb');

oracledb.initOracleClient({
  libDir: '/home/lucas/faculdade/oracle/instantclient',
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_TYPE: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().default(1521),
        DB_USERNAME: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_AUTOLOADENTITIES: Joi.boolean().default(true),
        DB_SYNCHRONIZE: Joi.boolean().default(false),
        DB_LOGGING: Joi.boolean().default(true),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'oracle',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        sid: configService.get('DB_DATABASE'),
        password: configService.get('DB_PASSWORD'),
        autoLoadEntities: configService.get('DB_AUTOLOADENTITIES'),
        synchronize: configService.get('DB_SYNCHRONIZE'),
        logging: ['query', 'error'],
      }),
    }),
    CidadeModule,
  ],
})
export class AppModule {}
