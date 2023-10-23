import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { CurrentUser } from '@/auth/current-user-decorator';
import { UserPayload } from '@/auth/jwt.strategy';
import { z } from 'zod';
import { ZodValidationPipe } from '@/pipes/zod-validation-pipes';
import { PrismaService } from '@/prisma/prisma.service';

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(createQuestionBodySchema);

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>;

@Controller('/question')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}
  @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema
  ) {
    const { title, content } = body;
    const userId = user.sub;

    const slug = this.convertToSlug(title);

    await this.prisma.question.create({
      data: {
        authorId: userId,
        slug,
        title,
        content,
      },
    });
  }
  private convertToSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  }
}
