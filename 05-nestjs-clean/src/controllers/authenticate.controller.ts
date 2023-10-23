import { JwtService } from '@nestjs/jwt';
import {
  Controller,
  Post,
  Body,
  UsePipes,
  UnauthorizedException,
} from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipes';
import { PrismaService } from 'src/prisma/prisma.service';
import { compare } from 'bcryptjs';

const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>;

@Controller('/sessions')
@UsePipes(new ZodValidationPipe(authenticateBodySchema))
export class AuthenticateController {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService
  ) {}
  @Post()
  async handle(@Body() body: AuthenticateBodySchema) {
    const { email, password } = body;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User credentials do not match.');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials do not match.');
    }

    const accessToken = this.jwt.sign({ sub: user.id });

    return {
      access_token: accessToken,
    };
  }
}
