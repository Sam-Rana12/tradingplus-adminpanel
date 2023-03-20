import React from 'react'
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Tag } from "antd";
import moment from "moment/moment";

const data = {
    name: "Six month Plan",
      price: 650,
      validity: "180",
      status: true,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
      purchaseDate: "2023-01-03T18:30:00.000Z",
      expiry: "2023-07-02T18:30:00.000Z",
      createdAt: "2023-02-28T12:03:36.432Z"
    }
const SubDetails = () => {
  return (
    <>
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
            <h1 className="text-lg font-bold text-black mb-5">Subscription Details</h1>
            {/* <hr class="h-1 ml-0 mt-0 bg-slate-800 text-white border-0 rounded md:my-6 "></hr> */}
            <div className="flex flex-col   mb-10 rounded-md space-y-2">
              <div className="flex justify-between w-full p-2 mb-1 rounded-lg bg-slate-800 text-white">
                <p className="text-md">Subscription Name</p>
                <p className="text-md">{data.name}</p>
              </div>
              <div className="flex justify-between w-full p-2 rounded-lg">
                <p className="text-md">Price</p>
                <p className="text-md">{data.price}</p>
              </div>
              <div className="flex justify-between w-full p-2 rounded-lg bg-slate-800 text-white">
                <p className="text-md">Validity (in days)</p>
                <p className="text-md">{data.validity}</p>
              </div>
              <div className="flex justify-between w-full p-2  rounded-lg">
                <p className="text-md">User Status</p>
                <p className="text-md">Valid</p>
              </div>
              {/* <div className="flex justify-between w-full p-2 rounded-lg">
                <p className="text-md">Subject</p>
                <p className="text-md">{data.subject}</p>
              </div> */}
              <div className="flex justify-between w-full p-2 flex-col bg-slate-800 text-white rounded-lg">
                <p className="text-md">Description</p>
              </div>
              <div className="flex justify-between w-full p-2 flex-col rounded-lg ">
                <p className="text-md">{data.description}</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-1/4 h-[250px]">
        <div className="RightBar  bg-white rounded-md p-3">
          <h1 className="text-xl font-bold mb-3">Current Plan Status</h1>
          <Tag className="text-md p-1 mb-5" color="orange">
            Active
          </Tag>
          <div className="flex flex-col mb-5">
          <h2 className="text-lg font-semibold mb-0">Purchase Date </h2>
          <p className=""> {moment(data.purchaseDate).utc().format('DD-MM-YYYY')}</p>
          </div>
          <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-0">Expiry Date </h2>
          <p className=""> {moment(data.expiry).utc().format('DD-MM-YYYY')}</p>
          </div>
        </div>
        <div className="flex justify-start items-center space-x-2 text-sm p-1 font-thin">
              <h3 className="text-lg ">created at:</h3>
              <p className="">{moment(data.createdAt).utc().format('DD-MM-YYYY')}</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SubDetails
