import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const application = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
    options: {
      url: process.env.NATS_URL,
    },
  });
  return application.listenAsync();
}
bootstrap();
