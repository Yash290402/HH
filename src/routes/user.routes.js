import { Router } from "express";

import { loginUser, registerUser } from "../controllers/user.controller.js";

import { registerService } from "../controllers/service.controller.js";

import {submitFeedback } from "../controllers/feedback.controller.js"

const router = Router();


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/serviceprovider").post(registerService)

router.route("/feedbacks").post(submitFeedback)

export default router;