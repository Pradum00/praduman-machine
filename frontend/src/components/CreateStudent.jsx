import {useFormik} from 'formik';
import toast, {Toaster} from 'react-hot-toast';
import { axiosCreateStudent } from '../utills/axiosManager';

export default function CreateStudent () {
  const formik = useFormik ({
    initialValues: {
      name: '',
      batch: '',
      college: '',
      placementStatus: '',
      dsaScore: 0,
      webScore: 0,
      reactScore: 0,
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (value) {
      console.log(value);
      const res = axiosCreateStudent(value);
      toast.promise (res, {
        loading: 'creating student..',
        success: <b>student Created</b>,
        error: <b>can not Create student</b>,
      });
    },
  });
  return (
    <div className="flex ">
      <div className="border border-blue-900 w-80  rounded-xl px-8 py-4 m-auto mt-20">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="text-center text-2xl font-semibold">Create Student</div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl ">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="border-2 w-full h-10 rounded-lg px-4 "
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="batch">Batch</label>
            <input
              id="batch"
              name="batch"
              type="text"
              placeholder="Batch"
              onChange={formik.handleChange}
              value={formik.values.batch}
              className="border-2 w-full h-10 rounded-lg px-4"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="college">College</label>
            <input
              id="college"
              name="college"
              type="text"
              placeholder="college"
              onChange={formik.handleChange}
              value={formik.values.college}
              className="border-2 w-full h-10 rounded-lg px-4"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="dsaScore">DSA score</label>
            <input
              id="dsaScore"
              name="dsaScore"
              type="number"
              placeholder="dsa Score"
              onChange={formik.handleChange}
              value={formik.values.dsaScore}
              className="border-2 w-full h-10 rounded-lg px-4"
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="webScore">Web score</label>
            <input
              id="webScore"
              name="webScore"
              type="number"
              placeholder="web Score"
              onChange={formik.handleChange}
              value={formik.values.webScore}
              className="border-2 w-full h-10 rounded-lg px-4"
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label htmlFor="reactScore">React score</label>
            <input
              id="reactScore"
              name="reactScore"
              type="number"
              placeholder="React Score"
              onChange={formik.handleChange}
              value={formik.values.reactScore}
              className="border-2 w-full h-10 rounded-lg px-4"
            />
          </div>
          <div className="flex  justify-between align-middle mt-4">
            <label htmlFor="placementStatus">Is Placed </label>
            <input
              id="placementStatus"
              name="placementStatus"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.placementStatus}
              checked={formik.values.placementStatus}
              className="border-2  rounded-lg  w-10"
            />
          </div>

          <div className="mt-6 ">
            <button className="border-2 w-full h-10 rounded-lg text-white text-lg font-semibold bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-900">
              Add Task
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
