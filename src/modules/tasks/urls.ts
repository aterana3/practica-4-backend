import { Router } from 'express';
import taskRouter from '@modules/tasks/api/tasks/urls';

const router: Router = Router();

router.use('/tasks', taskRouter);

export default router;
