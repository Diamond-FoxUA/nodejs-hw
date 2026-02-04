import { Router } from "express";
import { registerUser, logoutUser } from "../controllers/authController.js";
import { registerUserSchema } from "../validations/authValidation.js";
import { celebrate } from "celebrate";

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/logout', logoutUser);

export default router;
