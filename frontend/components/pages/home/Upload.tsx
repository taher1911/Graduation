import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

import Loading from "../../ui/Loading";
import axios from "axios";

type Props = {};

const Upload = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [reUpload, setReupload] = useState(false);
  const [vid, setVid] = useState<any>();

  const uploadVideo =async (e: any) => {
    try {
      setLoading(true);
      setVid(e.target.files[0]);
   
      const formData = new FormData();
      formData.append('video',e.target.files[0]);

       fetch('http://localhost:3000/addBlog',{
        method:'POST',
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGExOTU5ZTQwZjEzYzFlMjJlNGM2NjYiLCJmaXJzdE5hbWUiOiJzYXllZCIsImxhc3ROYW1lIjoiN2FmaXoiLCJlbWFpbCI6InNheWVkSEFmaXoxNTZAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkUjRpN0ZWSEtIYVppUjZ3eE95SEZ3T044NFZIWElXa2VRZ1NVVXEwVW9FbzZEMUdxMFNBVEMiLCJpc0RlbGV0ZWQiOmZhbHNlLCJfX3YiOjAsImNyZWF0ZWRBdCI6IjIwMjMtMDctMDJUMTU6MTk6NTguMDU2WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDctMDJUMTU6MTk6NTguMDU2WiIsImlhdCI6MTY4ODQxMzk3OX0.hV-v1OJYhWCPR7UEEVJ7CJ4vP0lm_u4o7NMWacZScEk`,
        },
        body:formData
      }).then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {

        setMessage(data.Message);
        setLoading(false);
        setReupload(true)
        
       } ).catch(err=>{
console.log(err)
      })

    } catch (error) {
      console.log(error)
    }
   
  };
  return (
    <section className="mt-[20vh] rounded-lg border-2 border-gray-700 w-[90%] max-w-[1200px] min-h-[500px] flex justify-center items-center text-gray-200">
      <div className="flex justify-center items-center flex-col">
        {!loading && (
          <label className="text-white">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">
                  <AiOutlineCloudUpload />
                </p>
                {reUpload && <p>video uploaded click to upload another video</p>}
                {!vid && <p className="text-lg">click to upload</p>}
              </div>
              <p className="text-gray-400 mt-2 text-xs">
                {" "}
                use high-quality JPG, SVG, PNG, GIF less than 20 MB
              </p>
            </div>
            <input
              type="file"
              name="upload-image"
              onChange={uploadVideo}
              className="w-0 h-0"
            />
          </label>
        )}
        <div className="text-xl text-gray-50 text-center">
          {loading && <Loading />}
          {loading && <p>uploading...</p>}
          {message &&!loading && <p className="block text-3xl">{message}</p> }
         
        </div>
      </div>
    </section>
  );
};

export default Upload;
