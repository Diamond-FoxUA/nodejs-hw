import { Router } from "express";
import { registerUser } from "../controllers/authController.js";
import { registerUserSchema } from "../validations/authValidation.js";

const router = Router();

router.post('/auth/register', registerUserSchema, registerUser);

export default router;
