import React from "react";
const SingleQuery = () => {
  return (
    <div className="bg-gray-200 h-screen w-full m-0 flex justify-center items-center">
    <div className="menu flex  space-x-5 h-auto w-[60%]">
      <div className="leftBar w-2/3 h-2/4 bg-white rounded-md">
        <div className="top flex p-4">
          <div className="flex">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              class="w-20 rounded-full"
              alt="Avatar"
            />
            <div className="UserCred ml-4 text-black">
              <p className="text-lg font-extrabold">Chaman Singh</p>
              <p className="text-lg text-slate-800">Email</p>
              <p className="text-lg font-semibold">Chamansingh@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="UserDetails mx-auto w-[85%] mt-12 ">
          <h1 className="text-lg font-semibold text-black mb-5">User Details</h1>
          {/* <hr class="h-1 ml-0 mt-0 bg-slate-800 text-white border-0 rounded md:my-6 "></hr> */}
          <div className="flex flex-col   mb-10 rounded-md space-y-2">
            <div className="flex justify-between w-full p-2 mb-1 bg-slate-400">
              <p className="text-xl">D.O.B</p>
              <p className="text-xl">12/12/2000</p>
            </div>
            <div className="flex justify-between w-full p-2">
              <p className="text-xl">Gender</p>
              <p className="text-xl">Male</p>
            </div>
            <div className="flex justify-between w-full p-2  bg-slate-400">
              <p className="text-xl">ID</p>
              <p className="text-xl">01596202819</p>
            </div>
            <div className="flex justify-between w-full p-2">
              <p className="text-xl">Nationality</p>
              <p className="text-xl">Indian</p>
            </div>
            <div className="flex justify-between w-full p-2  bg-slate-400">
              <p className="text-xl">Bank Name</p>
              <p className="text-xl">SBI</p>
            </div>
          </div>
        </div>
      </div>
      <div className="RightBar w-1/4 h-1/4 bg-indigo-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, et!
      </div>
    </div>
    </div>
  );
};

export default SingleQuery;
