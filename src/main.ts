import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './commons/exceptions/filter/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5000);

  app.useGlobalFilters(new HttpExceptionFilter)
}
void bootstrap();
