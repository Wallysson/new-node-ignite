import {
  Controller,
  Post,
  Body,
  UsePipes,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipes';
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student';
import { WrongCredentialsError } from '@/domain/forum/application/use-cases/errors/wrong-credentials-error';
import { Public } from '@/infra/auth/public';

const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>;

@Controller('/sessions')
@Public()
@UsePipes(new ZodValidationPipe(authenticateBodySchema))
export class AuthenticateController {
  constructor(private authenticateStudent: AuthenticateStudentUseCase) {}

  @Post()
  async handle(@Body() body: AuthenticateBodySchema) {
    const { email, password } = body;

    const result = await this.authenticateStudent.execute({
      email,
      password,
    });

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case WrongCredentialsError:
          throw new UnauthorizedException(error.message);
        default:
          throw new BadRequestException(error.message);
      }
    }

    const { accessToken } = result.value;

    return {
      access_token: accessToken,
    };
  }
}
