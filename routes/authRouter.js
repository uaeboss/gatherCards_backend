import { Router } from 'express';
import { signUp, signIn, getUser } from '../controllers/users.js';
import validateJOI from '../middlewares/validateJOI.js';
import { signupSchema, signinSchema } from '../joi/schemas.js';
import { protect } from '../middlewares/auth.js';

const authRouter = Router();

authRouter.post('/signup', validateJOI(signupSchema), signUp);
authRouter.post('/signin', validateJOI(signinSchema), signIn);
authRouter.get('/me', protect, getUser);
authRouter.get('/', (req, res) => {
    res.send('authRouter here')
});

export default authRouter;