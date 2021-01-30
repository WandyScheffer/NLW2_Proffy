import { Router } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';
import auth from './middleware/auth';

const routes = Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

// routes.post('/users', usersController.create);
routes.post('/user', usersController.create);
//I will finish yet
// routes.get('/users', usersController.auth);
routes.post('/authuser', usersController.auth);

//routes that need a authentication by a middleware
routes.use(auth);
routes.get('/classes', classesController.index);
routes.get('/connections', connectionsController.index);

routes.post('/classes', classesController.create);
routes.post('/connections', connectionsController.create);


export default routes;