import { Router } from 'express';

import { 
   // forgotPasswordController, 
    loginController, 
    logoutController,
    registerUserController, 
   // refreshToken, 
   // resetpassword, 
   // updateUserDetails, 
   // uploadAvatar, 
   // userDetails, 
    //verifyForgotPasswordOtp 
} from '../controllers/user.controller.js';

import { 
    admindashboard
} from '../controllers/dataController.js';

import auth from '../middleware/auth.js';
import upload from '../middleware/multer.js';

const userRouter = Router();

// ================= AUTH ROUTES =================

userRouter.post('/api/register', registerUserController);
userRouter.post('/api/login', loginController);
userRouter.get('/api/logout', auth, logoutController);
// userRouter.get('/api/admindashboard', auth, admindashboard);


// ================= USER UTILITIES =================
// userRouter.put('/api/upload-avatar', auth, upload.single('avatar'), uploadAvatar);
// userRouter.put('/api/update-user', auth, updateUserDetails);
// userRouter.put('/api/forgot-password', forgotPasswordController);
// userRouter.put('/api/verify-forgot-password-otp', verifyForgotPasswordOtp);
// userRouter.put('/api/reset-password', resetpassword);
// userRouter.put('/api/refresh-token', refreshToken);
// userRouter.post('/api/user-details', auth, userDetails);

export default userRouter;
