/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { createUser, setLoading } from "../../redux/feature/user/userSlice";
import { useAppDispatch, useAppSelector  } from "../../redux/hooks/hooks";
import { useEffect } from "react";
 

const SignupForms = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();


  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user)

  // navigate to homepage
  const navigate = useNavigate();
  useEffect(() => {
    if(user?.user?.email){
      setLoading(true)
      navigate("/")
      setLoading(false)
    }
  }, [user])
  
  
  
  const onSubmit = async (data: any) => {
    const { email,password } = data;
   const toastId = toast.loading("Loading...");
    try { 
        setLoading(true);
        dispatch( createUser({email: email, password: password}));
       
        
        setTimeout(() => {
            setLoading(false);
        }, 3000);
      toast.dismiss(toastId); 
      toast.success("User signed up successfully")
    //   replace(from)
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("User not signed in");
    }
  }; 
   

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 px-8">
      <div className="form-control">
        <p className="text-bold text-xl">
          Name:
        </p>
        <input
          type="text"
          placeholder="Type Your Name"
          id="name"
          className="rounded mt-1 w-full p-2 text-blue-800"
          autoComplete="name"
          {...register("name", {
            required: true, 
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter Your Name
          </span>
        )}
      </div>
      <div className="form-control">
        <p className="text-bold text-xl">
          Email:
        </p>
        <input
          type="email"
          placeholder="email"
          id="email"
          className="rounded mt-1 w-full p-2 text-blue-800"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
      </div>
      <div className="form-control">
        <p className="text-bold text-xl">
        Password:
        </p>
        <input
          type="password"
          placeholder="password"
          id="password"
          className="rounded mt-1 w-full p-2 text-red-800"
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
      </div>
      <div className="form-control">
        <p className="text-bold text-xl">
        Confirm Password:
        </p>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          className="rounded mt-1 w-full p-2 text-red-800"
          autoComplete="new-password"
          {...register("confirmPassword", {
            required: true,
            minLength: 6,
            validate: (value) =>
              value === getValues("password") || "The passwords do not match.",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-base mt-1">
            {"Please confirm your password."}
          </span>
        )}
      </div>
      <div className="form-control mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Sign Up
        </button>
      </div>
      <p className="mt-3">
        Already have an account?{" "}
        <Link className="text-blue-500 underline ml-1" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForms;
