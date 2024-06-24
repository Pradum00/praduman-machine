import {useFormik} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { axiosLogin } from '../utills/axiosManager';
import { setItem } from '../utills/localStorageManager';

export default function Login () {
  const navigate = useNavigate();
  const formik = useFormik ({
    initialValues: {email: '', password: ''},
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (value) {
     const res = await axiosLogin(value);
     console.log(res);
     const data = res?.data;
     if(data?.status==="ok"){

       setItem(data?.result?.accessToken);
       navigate("/");
      }
    },
  });
  return (
    <div className="border border-blue-900 flex flex-col w-72 rounded-xl px-8 py-4 m-auto mt-20">
      <div className="text-center text-2xl font-semibold">Login</div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xl ">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="border-2 w-full h-10 rounded-lg px-4 "
          />
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="border-2 w-full h-10 rounded-lg px-4"
          />
        </div>
        <div className='mt-6 '> 
          <button className="border-2 w-full h-10 rounded-lg text-white text-lg font-semibold bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-900">Login</button>
        </div>
      </form>
      <div className='flex gap-2 justify-center mt-5'>
        <div>Do not have account ? </div>
        <button className='text-blue-700'><Link to="/signup">Signup</Link></button>
      </div>
    </div>
  );
}
