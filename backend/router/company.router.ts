import express from "express";

import { createCompany, getCompanyById } from "../controller/company";

export const companyRouter = express.Router();
companyRouter.post("/", createCompany);
companyRouter.get("/", getCompanyById);