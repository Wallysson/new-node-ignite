import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaAnswerAttachmentsRepository } from './repositories/prisma-answer-attachments-repository';
import { PrismaAnswerCommentsRepository } from './repositories/prisma-answer-comments-repository';
import { PrismaAnswersRepository } from './repositories/prisma-answers-repository';
import { PrismaQuestionAttachmentsRepository } from './repositories/prisma-question-attachments-repository';
import { PrismaQuestionCommentsRepository } from './repositories/prisma-question-comments-repository';
import { PrismaQuestionsRepository } from './repositories/prisma-questions-repository';
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository';
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository';
import { PrismaStudentsRepository } from './repositories/prisma-students-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
  exports: [
    PrismaService,
    QuestionsRepository,
    StudentsRepository,
    PrismaQuestionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerCommentsRepository,
    PrismaAnswerAttachmentsRepository,
  ],
})
export class DatabaseModule {}
