import express from "express";
import {
  loginController,
  signupController
} from "../controllers/employee.controller.js";
import { addStudentController, getAllStudents } from "../controllers/student.controller.js";
import { addInterviewController, getInterviewListController, interviewerListForCompanyController, markStatusInterviewController } from "../controllers/interviewController.js";
import { createCompanyController, getAllCompaniesController } from "../controllers/company.controller.js";
import { authenticate } from "../middlewares/authenticateEmployee.js";
import { downloadCSVController,  } from "../controllers/csv.controller.js";
const employeeRouter = express();


employeeRouter.post("/signup", signupController);
employeeRouter.post("/login", loginController);
employeeRouter.post("/add-student",authenticate, addStudentController);
employeeRouter.post("/add-interview",authenticate,addInterviewController);
employeeRouter.post("/add-company",authenticate,createCompanyController);
employeeRouter.patch('/mark-interview',authenticate,markStatusInterviewController);
employeeRouter.get("/student-list/:companyID",authenticate,interviewerListForCompanyController);
employeeRouter.get("/students",authenticate,getAllStudents);
employeeRouter.get("/companies",authenticate,getAllCompaniesController);
employeeRouter.get("/interviews",authenticate,getInterviewListController);
employeeRouter.get("/csv",authenticate,downloadCSVController);

export default employeeRouter;
