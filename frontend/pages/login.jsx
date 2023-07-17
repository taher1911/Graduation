import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const inter = Inter({ subsets: ["latin"] });

//google auth
import { useGoogleLogin } from "@react-oauth/google";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  //login with gmail
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        localStorage.setItem("detectivaUser", JSON.stringify(res.data));
        const { name, picture, sub } = res.data;
        const doc = {
          _id: sub,
          _type: "user",
          userName: name,
          image: picture,
        };
        // const user = await client.createIfNotExists(doc);
        const user = true;
        if (user) {
          router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
    onFailure: (response) => console.log(response),
  });

  const onSubmitHandler =async (e) => {
    e.preventDefault();
    
    try {
      const data = await axios.post('http://localhost:3000/login',{email,password});
      if(data){
        localStorage.setItem('detectivaUser',JSON.stringify(data.data.data.token));
        router.push('/');
      }
      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("detectivaUser");
    if (user) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Detectiva website uses latest deep learning algorithms and AI techniques to make deepfake video identification easier."
        />
      </Head>
      <Navbar />
      <main className={`text-center px-[3%] max-w-[600px] mx-auto`}>
        <h1 className="text-gray-300 text-2xl mt-[10vh] lg:mt-[17vh] font-bold mb-8">
          Log in your account
        </h1>

        <button
          type="button"
          className="bg-gray-300 hover:opacity-[.9] transition-all duration-200 text-black tracking-wide font-bold flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none w-full"
          onClick={() => login()}
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
              className="p-2 h-[60px] lg:h-[50px]  bg-transparent border-2 border-gray-600 rounded-lg mt-3 outline-none text-gray-500 text-[1rem]"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-[.9] transition-all duration-100 outline-none cursor-pointer w-full rounded-lg text-gray-200 font-semibold tracking-wide h-[60px] lg:h-[50px]  "
            type="submit"
          >
            Login
          </button>
          <Link
            href="/register"
            className=" block mt-3 text-[1.1rem] text-center"
          >
            Create an accoumt
          </Link>
        </form>
      </main>
      <Footer />
    </>
  );
}
