import React, { useState } from "react";
import { FaPhone, FaQuestionCircle,FaDharmachakra ,FaVolleyballBall,FaPagelines,FaTimes} from "react-icons/fa";

const Call = () => {
  const [count, setCount] = useState(true);
  const [form,setForm]=useState(false)

  const handleForm = (e) => {
    // e.event
  };
  //   console.log(count);
  return (
    <>
      <div className=" relative h-screen ">
        {/* for button */}
      <div className="mt-20 fixed right-4 bottom-9">
          {/* for three button  */}
        { !count && <div>
        <div
          onClick={() => setForm(!form)}
          className=" w-14 h-14 text-center pt-5 mt-3 rounded-full sh bg-red-500  "
        >
          <div className="flex justify-center items-center">
            <FaPagelines className="text-lg text-white" />
          </div>
        </div>
        <div
          onClick={() => setForm(!form)}
          className=" w-14 h-14 text-center pt-5 mt-3  rounded-full sh bg-blue-500   "
        >
          <div className="flex justify-center items-center">
            <FaVolleyballBall className="text-lg text-white" />
          </div>
        </div>
        <div
          onClick={() => setForm(!form)}
          className=" w-14 h-14 text-center pt-5 mt-3  rounded-full sh bg-zinc-500  "
        >
          <div className="flex justify-center items-center">
            <FaDharmachakra className="text-lg text-white" />
          </div>
        </div>
        </div>}

       
        <div
          onClick={() => setCount(!count)}
          className=" w-14 h-14 text-center pt-5 mt-3 rounded-full sh bg-green-500  "
        >
          <div className="flex justify-center items-center">
            {count ? <FaPhone className="text-lg text-white" />
            :
            <FaTimes className="text-xl text-white" />}
          </div>
        </div>
        </div>

{/* for input form */}

       {form && <div className="w-64 h-80 bg-zinc-300 fixed  bottom-8 right-3 z-10 ">
          <h1
            onClick={() => setForm(!form)}
            className="bg-red-800 py-3 text-white text-right cursor-pointer px-5"
          >
            X
          </h1>

          <div>
            <div className="flex justify-start items-center m-2">
              <FaQuestionCircle className="text-4xl text-amber-600" />
              <h1 className="text-sm ml-2">Have an question ? Ask us !</h1>
            </div>
            <hr className="bg-black  py-[.2px]" />
          </div>

          <form onSubmit={handleForm}>
            <h1 className="ml-3 mt-2">Name *</h1>
            <input
              type="text"
              className="border-red-500 border-[.5px]  rounded-sm py-1 px-2 m-3"
              placeholder="Enter your Name"
              required
            />
            <textarea
              className="border-red-500 border-[.5px] w-11/12  rounded-sm py-1 px-2 m-3"
              required
            >
              Enter Your message
            </textarea>
            <input
              type="submit"
              name=""
              value="Start Chat"
              className="text-sm px-4 py-1 bg-amber-700 rounded-md ml-3"
              id=""
            />
          </form>
        </div>}

     
      </div>
    </>
  );
};

export default Call;
