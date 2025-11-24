import { Router } from 'express';
import { registerUser, loginUser } from "@/modules/security/api/auth/controller";

const router: Router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;