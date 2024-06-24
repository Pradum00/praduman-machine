import csv from 'csv-writer';
import { getInterviewList } from "./interview.service.js";

export async function generateCSV(){
    try {
       const interviews =await getInterviewList()  ; 
       const csvWriter = csv.createObjectCsvWriter({
        path: 'interviews.csv',
        header: [
          { id: 'studentId', title: 'Student id' },
          { id: 'studentName', title: 'Student name' },
          { id: 'studentCollege', title: 'Student college' },
          { id: 'studentStatus', title: 'Student status' },
          { id: 'dsaScore', title: 'DSA Final Score' },
          { id: 'webScore', title: 'WebD Final Score' },
          { id: 'reactScore', title: 'React Final Score' },
          { id: 'interviewDate', title: 'Interview date' },
          { id: 'interviewCompany', title: 'Interview company' },
          { id: 'interviewStatus', title: 'Interview status' }
        ]
      }); 
      const records = interviews.map(interview => ({
        studentId: interview.student._id,
        studentName: interview.student.name,
        studentCollege: interview.student.college,
        studentStatus: interview.student.placementStatus,
        dsaScore: interview.student.dsaScore,
        webScore: interview.student.webScore,
        reactScore: interview.student.reactScore,
        interviewDate: interview.date,
        interviewCompany: interview.company.name,
        interviewStatus: interview.status
      }));   
      
      await csvWriter.writeRecords(records);
      return "created";
    } catch (err) {
        return err;
    }
}