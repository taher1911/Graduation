import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import axios from "axios";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");


  const router = useRouter()
  const onSubmitHandler =async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstName:fname,
        lastName:lname,
        email,
        password,
        confirmPassword:confPass
      }
      console.log(data)
      // const creat = await fetch('http://localhost:3000/signup',{
      //   method:'POST',
      //   body:data

      // })
      const creat = await axios.post('http://localhost:3000/signup',data);
      if(creat){
        router.push('/login')
      }
    } catch (error) {
      console.log(error)
    }
  
   
     
  };
  return (
    <>
      <Head>
        <title>Register</title>
        <meta
          name="description"
          content="Detectiva website uses latest deep learning algorithms and AI techniques to make deepfake video identification easier."
        />
      </Head>
      <Navbar />
      <main className={`text-center px-[3%] max-w-[600px] mx-auto`}>
        <h1 className="text-gray-300 text-2xl mt-[10vh] lg:mt-[17vh] font-bold mb-8">
          Create your free account
        </h1>

        <button
          type="button"
          className="bg-gray-300  hover:opacity-[.9] transition-all duration-200 text-black tracking-wide font-bold flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none w-full"
          onClick={() => {}}
        >
          {" "}
          <FcGoogle className="mr-2 text-xl" /> Log in with google
        </button>

        <div className="flex items-center">
          <span className="flex-1 h-[1px] bg-gray-500"></span>
          <span className="p-4 text-gray-300 text-2xl">or</span>
          <span className="flex-1 h-[1px] bg-gray-500"></span>
        </div>
        <form onSubmit={onSubmitHandler} className="text-gray-500 text-left">
         
          <div className="w-full flex flex-col ">
            <label htmlFor="email">Full Name *</label>
            <div className="flex justify-between ">
            <input
              type="text"
              value={fname}
              onChange={(e) =>setFname(e.target.value)}
              className="p-2 h-[60px] w-[48%] lg:h-[50px] bg-transparent border-2 border-gray-600 rounded-lg mt-3 outline-none text-gray-500 text-[1rem]"
              placeholder="First Name"
            />
             <input
              type="text"
              value={lname}
              onChange={(e) =>setLname(e.target.value)}
              className="p-2 h-[60px] w-[48%] lg:h-[50px] bg-transparent border-2 border-gray-600 rounded-lg mt-3 outline-none text-gray-500 text-[1rem]"
              placeholder="Last Name"
            /></div>
          </div>
        
       
          <div className="w-full flex flex-col ">
            <label htmlFor="email">E-mail Address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 h-[60px] lg:h-[50px] bg-transparent border-2 border-gray-600 rounded-lg mt-3 outline-none text-gray-500 text-[1rem]"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex flex-col my-6">
            <label htmlFor="email">Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 h-[60px]  lg:h-[50px] bg-transparent border-2 border-gray-600 rounded-lg mt-3 outline-none text-gray-500 text-[1rem]"
              placeholder="Password"
            />
          </div>
          <div className="w-full flex flex-col my-6">
            <label htmlFor="email">Confirm Password *</label>
            <input
              type="password"
              value={confPass}
              onChange={(e) => setConfPass(e.target.value)}
              className="p-2 h-[60px]  lg:h-[50px] bg-transparent border-2 border-gray-600 rounded-lg mt-3 outline-none text-gray-500 text-[1rem]"
              placeholder="Confirm Password"
            />
          </div>
          <button
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-[.9] transition-all duration-100 outline-none cursor-pointer w-full rounded-lg text-gray-200 font-semibold tracking-wide h-[60px]  lg:h-[50px]"
            type="submit"
          >
            Create account
          </button>
          <Link href="/login" className=" block mt-3 text-[1.1rem] text-center">
            Log in existing account
          </Link>
        </form>
      </main>
      <Footer />
    </>
  );
}
