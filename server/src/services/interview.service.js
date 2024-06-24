import interviewModel from "../models/interview.model.js";
import studentModel from "../models/student.model.js";

export async function checkInterviewExist(_id) {
  try {
    const interview = await interviewModel.findById(_id);
    return interview;
  } catch (error) {
    return error;
  }
}

export async function markInterviewStatus(_id, status) {
  try {
    const interview = await interviewModel.findById(_id);
    interview["status"] = status;
    await interview.save();
    return interview;
  } catch (error) {
    return error;
  }
}
export async function insertInterview(student, company, date) {
  try {
    const interview = await interviewModel.create({ student, company, date });
    return interview;
  } catch (error) {
    return error;
  }
}

export async function getInterviewersForCompany(companyId) {
  try {
    const interviewersForCompany = await interviewModel.find({
      company: companyId
    }).populate('student').populate("company");
    console.log(interviewersForCompany);
    return interviewersForCompany;
  } catch (error) {
    return error;
  }
}

export async function getInterviewList() {
  try {
    const interviewList = await interviewModel.find({}).populate('student').populate('company');
    return interviewList;
  } catch (error) {
    return error;
  }
}
