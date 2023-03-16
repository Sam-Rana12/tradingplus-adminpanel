import React from "react";
const SingleQuery = () => {
  return (
    <div className="menu flex mt-20 ml-20 mr-20 space-x-5">
      <div className="leftBar w-2/3 h-2/4 bg-slate-600">
        <div className="top flex p-4">
          <div className="flex">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              class="w-20 rounded-full"
              alt="Avatar"
            />
            <div className="UserCred ml-4 text-white">
              <p className="text-lg font-extrabold">Chaman Singh</p>
              <p className="text-lg ">Email</p>
              <p className="text-lg font-semibold">Chamansingh@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="UserDetails mt-10 ml-10">
          <h1 className="text-lg font-semibold text-white">User Details</h1>
          <hr className="" />
          <div className="">
            <table class="table">
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="RightBar w-1/4 h-1/4 bg-indigo-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, et!
      </div>
    </div>
  );
};

export default SingleQuery;
