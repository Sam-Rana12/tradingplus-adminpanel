import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Tag } from "antd";
import React from "react";
const data = {
    name: "Sender_One Kumar",
    contact: "Cant disclose",
    email: "dont have an email",
    subject: "Don't Knows",
    message: "First let me understand trading.",
    status: "RESOLVED",
    createdAt: "2023-03-03T04:54:37.356Z",
    updatedAt: "2023-03-07T04:53:28.977Z"
  }
const SingleQuery = () => {
  return (
    <div className="bg-gray-200 h-screen w-full m-0 flex justify-center items-center">
      <div className="menu flex  space-x-5 h-auto w-[80%]">
        <div className="leftBar w-2/3 h-2/4 bg-white rounded-md">
          <div className="top flex p-4">
            <div className="flex">
              <Avatar
                shape="square"
                className="flex justify-center items-center"
                size={90}
                icon={<UserOutlined />}
              />
              <div className="UserCred ml-4 text-black">
                <p className="text-lg font-extrabold mb-3">Chaman Singh</p>
                <p className="text-lg text-slate-800 ">Email</p>
                <p className="text-lg font-semibold">Chamansingh@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="UserDetails mx-auto w-[85%] mt-12 ">
            <h1 className="text-lg font-bold text-black mb-5">Query Details</h1>
            {/* <hr class="h-1 ml-0 mt-0 bg-slate-800 text-white border-0 rounded md:my-6 "></hr> */}
            <div className="flex flex-col   mb-10 rounded-md space-y-2">
              <div className="flex justify-between w-full p-2 mb-1 rounded-lg">
                <p className="text-md">Name</p>
                <p className="text-md">{data.name}</p>
              </div>
              <div className="flex justify-between w-full p-2  bg-slate-400 rounded-lg">
                <p className="text-md">Email</p>
                <p className="text-md">{data.email}</p>
              </div>
              <div className="flex justify-between w-full p-2 rounded-lg">
                <p className="text-md">Contact</p>
                <p className="text-md">{data.email}</p>
              </div>
              <div className="flex justify-between w-full p-2 bg-slate-400 rounded-lg">
                <p className="text-md">Status</p>
                <p className="text-md">{data.status}</p>
              </div>
              <div className="flex justify-between w-full p-2 rounded-lg">
                <p className="text-md">Subject</p>
                <p className="text-md">{data.subject}</p>
              </div>
              <div className="flex justify-between w-full p-2 flex-col  bg-slate-400 rounded-lg">
                <p className="text-md">Message</p>
              </div>
              <div className="flex justify-between w-full p-2 flex-col rounded-lg">
                <p className="text-md">{data.message}</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="RightBar w-1/4 h-[250px] bg-white rounded-md p-3">
          <h1 className="text-xl font-bold mb-3">Current Status</h1>
          <Tag className="text-md p-1 mb-5" color="orange">
            Pending
          </Tag>
          <h2 className="text-lg font-semibold mb-4">Update Status</h2>
          <div className="flex flex-col">
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 outline-none"
            >
              Resolve
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 outline-none"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuery;
