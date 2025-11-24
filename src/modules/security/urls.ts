import { Router } from 'express';
import authRouter from '@modules/security/api/auth/urls';
import userRouter from '@modules/security/api/user/urls';
import googleOAuthRouter from '@modules/security/api/oauth/google/urls';

const router: Router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/auth/google', googleOAuthRouter);

export default router;