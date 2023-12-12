import express from "express";
import * as userController from '../controllers/user.controller';

const router = express.Router();

router.post('/login', userController.authUser)
//router.post('/logout', userController.logoutUser)




export default router;