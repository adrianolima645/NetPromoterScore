import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SurveysUsersController } from './controllers/SurveysUsersController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const surveysUsersController = new SurveysUsersController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post('/users', userController.create);
router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);
router.post('/sendMail', surveysUsersController.sendMail);
router.get('/answers/:value', answerController.execute);
router.get('/nps/:survey_id', npsController.execute);
export { router };

/**
 * GET => busca
 * POST => salvar
 * PUT => alterar
 * DELETE => deletar
 * PATCH => alterar especifica
 *
 */
