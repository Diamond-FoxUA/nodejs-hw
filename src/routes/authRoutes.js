import { Router } from "express";
import { registerUser, logoutUser, loginUser } from "../controllers/authController.js";
import { registerUserSchema, loginUserSchema } from "../validations/authValidation.js";
import { celebrate } from "celebrate";

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/logout', logoutUser);

export default router;
