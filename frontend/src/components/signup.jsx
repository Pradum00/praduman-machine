import {useFormik} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { axiosSignup } from '../utills/axiosManager';

export default function Signup (){
    const navigate = useNavigate();
    const formik = useFormik ({
        initialValues: {firstname:'' , lastname:'', email: '', password: ''},
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async function (value) {
          const res = await axiosSignup(value);
          console.log(res);
          const data = res.data;
          if(data?.status==="ok"){
            navigate("/login")
          }
        },
      });
  return (
    <div className="border border-blue-900 w-80  rounded-xl px-8 py-5 m-auto mt-20 ">
      <div className="text-center text-2xl font-semibold">Signup</div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col ">
          <label htmlFor="firstname" className=" ">First Name</label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="first name"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            className="border-2 w-full h-8 rounded-lg px-4 "
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className=" ">Last Name</label>
          <input
            id="lastname"
            name="lastname"
            type="lastname"
            placeholder="last name"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            className="border-2 w-full h-8 rounded-lg px-4 "
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className=" ">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="border-2 w-full h-8 rounded-lg px-4 "
          />
        </div>

        <div className=" flex flex-col ">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="border-2 w-full h-8 rounded-lg px-4"
          />
        </div>
        <div className='mt-2'> 
          <button className="border-2 w-full h-8 rounded-lg text-white text-lg font-semibold bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-900">Signup</button>
        </div>
      </form>
      <div className='flex gap-2 justify-center mt-2'>
        <div>Already have account ? </div>
        <button className='text-blue-700'><Link to="/login">Login</Link></button>
      </div>
    </div>
  );
}
