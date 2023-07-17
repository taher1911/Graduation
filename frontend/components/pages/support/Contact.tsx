import Image from "next/image";
import Link from "next/link";
import React from "react";

import {FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa';

type Props = {};

const links=[
  {
    url:'',
    img:<FaFacebook className="text-[#3b84de]" />
  },
  {
    url:'',
    img:<FaInstagram className="text-[#d73feb]"/>
  },
  {
    url:'',
    img:<FaTwitter className="text-[#007bff]" />
  }
]
const Contact = (props: Props) => {
  return (
    <section className="mt-[10vh] max-w-[800px] mx-auto md:mt-[20vh] px-[3%] text-gray-200">
      <div>
        {" "}
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-300 leading-7">
          If you have any question regarding the detection of a Deepfake video,
          you can contact us via social media or with the following formular. We
          usually have a response time of 24 hours maximum:{" "}
        </p>
      </div>
     
<ul className="flex justify-between w-[80%] max-w-[700px] mx-auto mt-[3rem]">
  {links.map((link,i)=><li key={i}>
    <Link href={link.url} className="text-5xl">
    {link.img}
    </Link>
  </li>)}
</ul>
      
    </section>
  );
};

export default Contact;
