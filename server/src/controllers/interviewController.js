import { checkCompanyExist } from "../services/company.service.js";
import {
  checkInterviewExist,
  getInterviewList,
  getInterviewersForCompany,
  insertInterview,
  markInterviewStatus
} from "../services/interview.service.js";
import { checkStudentExist } from "../services/student.service.js";
import { error, success } from "../utills/responseWrapper.js";

export async function addInterviewController(req, res) {
  try {
    const { student, company, status } = req.body;
    if (!student || !company || !status) {
      return res.send(error(400, "all fields are required!"));
    }
    const isStudentExist = await checkStudentExist(student);
    if (!isStudentExist) {
      return res.send(error(404, "student does'nt exist"));
    }
    const isComapnyExist = await checkCompanyExist(company);
    if (!isComapnyExist) {
      return res.send(error(404, "comapany does'nt exist"));
    }

    const date = new Date();
    const interview = await insertInterview(student, company, date);
    return res.send(success(201, "interview created successfully"));
  } catch (err) {
    return res.send(error(500, err.message));
  }
}

export async function markStatusInterviewController(req, res) {
  try {
    const { interviewId, status } = req.body;
    if (!interviewId || !status) {
      return res.send(error(400, "all fields required!"));
    }
    const interview = await checkInterviewExist(interviewId);
    if (!interview) {
      return res.send(error(400, "interview does'nt exist"));
    }
    const markedInterview = await markInterviewStatus(interviewId, status);
    return res.send(
      success(200, `interview status marked as ${markedInterview["status"]}`)
    );
  } catch (err) {
    return res.send(error(500, err.message));
  }
}

export async function interviewerListForCompanyController(req, res) {
  try {
    const companyID = req.params.companyID;
    if (!companyID) {
      return res.send(error(400, "all fields are required"));
    }
    const interviewersForCompany = await getInterviewersForCompany(companyID);
    return res.send(success(200, { interviewersForCompany }));
  } catch (err) {
    return res.send(error(500, err.message));
  }
}

export async function getInterviewListController(req, res) {
  try {
    const list = await getInterviewList();
    return res.send(success(200, { list }));
  } catch (err) {
    return res.send(error(500, err.message));
  }
}
