import { Repository, EntityRepository } from 'typeorm';
import { SuerveyUser } from '../models/SurveysUser';

@EntityRepository(SuerveyUser)
class SurveysUsersRepository extends Repository<SuerveyUser> {}

export { SurveysUsersRepository };
