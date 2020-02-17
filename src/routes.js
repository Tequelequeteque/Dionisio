import { Router } from 'express';
import drinkController from './app/controllers/Drink';

const routes = new Router();

routes.get('/drinks', drinkController.index);
routes.get('/drinks/:id', drinkController.show);
routes.post('/drinks', drinkController.store);
routes.put('/drinks', drinkController.update);
routes.delete('/drinks/:id', drinkController.delete);

export default routes;
