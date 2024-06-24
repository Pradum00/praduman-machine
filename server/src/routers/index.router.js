import express from 'express';
import employeeRouter from './employee.router.js';
const router = express();

router.use("/employee",employeeRouter);

export default router;
