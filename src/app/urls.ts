import { Router } from 'express';
import securityRouter from '@modules/security/urls';
import taskRouter from '@modules/tasks/urls';
import { auth } from '@app/middleware/authMiddleware';

const router: Router = Router();

router.use('/security', securityRouter);
router.use('/task', auth, taskRouter);

export default router;