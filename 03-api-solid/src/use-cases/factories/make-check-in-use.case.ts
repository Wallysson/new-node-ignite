import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { CheckInUseCase } from '../check-in';
import { PrismaCheckInsReposistory } from '@/repositories/prisma/prisma-check-ins-repository';

export function makeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsReposistory();
  const gymsRepository = new PrismaGymsRepository();

  const useCase = new CheckInUseCase(checkInsRepository, gymsRepository);

  return useCase;
}
