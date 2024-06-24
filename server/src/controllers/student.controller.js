import { getStudentList, insertStudent } from "../services/student.service.js";
import { error, success } from "../utills/responseWrapper.js";

export async function addStudentController(req, res) {
  try {
    console.log(req.body);
    const {
      name,
      batch,
      college,
      placementStatus,
      dsaScore,
      webScore,
      reactScore
    } = req.body;
    if (
      !name ||
      !batch ||
      !college ||
      !placementStatus ||
      !dsaScore ||
      !webScore ||
      !reactScore
    ) {
      return res.send(error("400", "all fields are required!"));
    }
    const student = await insertStudent(
      name,
      batch,
      college,
      placementStatus,
      dsaScore,
      webScore,
      reactScore
    );
    res.send(success(201, "student created successfully"));
  } catch (err) {
    return res.send(error(500, err.message));
  }
}

export async function getAllStudents(req, res) {
  try {
    const studentList = await getStudentList();
    res.send(success(200, { studentList }));
  } catch (err) {
    res.send(error(400, err.message));
  }
}
