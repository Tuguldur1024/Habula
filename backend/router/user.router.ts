import express from "express";
import { createUser } from "../controller/user";
import { signinUser } from "../controller/user";
import { updateUser } from "../controller/user";

const userRouter = express.Router();
userRouter.post("/", createUser);
userRouter.post("/signin", signinUser);
userRouter.put("/update", updateUser);