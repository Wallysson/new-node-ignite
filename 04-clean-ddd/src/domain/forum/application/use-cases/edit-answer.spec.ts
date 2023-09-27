import { makeAnswer } from 'test/factories/make-answer';
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository';
import { EditAnswerUseCase } from './edit-answer';
import { UniqueEntityId } from '@/core/entities/unique-entity-id';

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: EditAnswerUseCase;

describe('Get Answer By Slug', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new EditAnswerUseCase(inMemoryAnswersRepository);
  });

  test('it shoult be able to edit a answer', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1')
    );

    await inMemoryAnswersRepository.create(newAnswer);

    await sut.execute({
      answerId: newAnswer.id.toValue(),
      authorId: 'author-1',
      content: 'Test content',
    });

    expect(inMemoryAnswersRepository.items[0]).toMatchObject({
      content: 'Test content',
    });
  });

  test('it should not be able to edit a answer from another user', async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId('author-1'),
      },
      new UniqueEntityId('answer-1')
    );

    await inMemoryAnswersRepository.create(newAnswer);

    expect(() => {
      return sut.execute({
        answerId: newAnswer.id.toValue(),
        authorId: 'author-2',
        content: 'Test content',
      });
    }).rejects.toBeInstanceOf(Error);
  });
});