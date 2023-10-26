import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma/prisma.service';
import { CreateAccountController } from './http/controllers/create-account.controller';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env/env';
import { AuthModule } from './auth/auth.module';
import { AuthenticateController } from './http/controllers/authenticate.controller';
import { CreateQuestionController } from './http/controllers/create-question.controller';
import { FetchRecentQuestionsController } from './http/controllers/fetch-recent-questions.controller';
import { HttpModule } from './http/http.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
    EnvModule,
  ],
})
export class AppModule {}
