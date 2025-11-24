import { Router } from 'express';
import { updateUser } from '@/modules/security/api/user/controller';

const router: Router = Router();

router.post('/update', updateUser);

export default router;