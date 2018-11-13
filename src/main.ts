import { NestFactory, FastifyAdapter } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { AppModule } from './app.module'

const PORT = process.env.PORT || 5000

async function bootstrap () {
  const app = await NestFactory.create(AppModule, new FastifyAdapter())

  const options = new DocumentBuilder()
    .setTitle('Luka API')
    .setDescription('API Description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(PORT)
}

bootstrap()
  .then(() => {
    console.log('Server is up and running!')
  })
  .catch((error) => {
    console.error({ error })
  })
