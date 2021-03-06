import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as helmet from 'helmet'

import { AppModule } from './app.module'
import { ValidationPipe } from './validation.pipe'

const PORT = process.env.PORT || 5000

async function bootstrap () {
  const app = await NestFactory.create(AppModule)

  const options = new DocumentBuilder()
    .setTitle('Luka API')
    .setDescription('API Description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api', app, document)

  app.use(helmet())
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT)
}

bootstrap()
  .then(() => {
    console.log('Server is up and running!')
  })
  .catch(error => {
    console.error({ error })
  })
