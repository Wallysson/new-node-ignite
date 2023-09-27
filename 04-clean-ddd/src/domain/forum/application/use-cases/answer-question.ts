import { UniqueEntityId } from '@/core/entities/unique-entity-id';
import { Answer } from '../../enterprise/entities/answer';
import { AnswersRepository } from '../repositories/answer-repository';

interface AnswerQuesitionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
  createdAt: Date;
}

interface AnswerQuesitionUseCaseResponse {
  answer: Answer;
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuesitionUseCaseRequest): Promise<AnswerQuesitionUseCaseResponse> {
    const answer = Answer.create({
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
      content,
    });

    await this.answerRepository.create(answer);

    return {
      answer,
    };
  }
}
