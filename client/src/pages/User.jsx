import React from "react";
import { CiImport } from "react-icons/ci";

function User() {
  return (
    <div className="min-h-full min-w-full bg-gray-50 px-6 py-8 mx-auto md:h-screen lg:py-2 text-gray-900">
      <div className="flex flex-col items-start justify-center ">
        <h2>Account</h2>
        <h4>Manage your account settings</h4>

        <div className="flex flex-col justify-center items-center pb-10 px-4 w-full gap-4">
          <h3 className="text-lg text-center w-full border-b-2">Avatar</h3>

          <div className="flex flex-col items-center gap-1">
            <img
              className="w-28 h-28 object-cover rounded-md"
              src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295395_960_720.png"
            />
            <button className="flex items-center gap-1 bg-primary-950 text-white text-xs py-1 px-2 rounded-lg">
              Upload image{" "}
              <span className="border rounded-full py-0.5 px-0.5">
                <CiImport />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col pb-10 px-4 w-full gap-4">
          <h3 className="text-lg w-full border-b-2 text-center">Profile</h3>

          <div className="flex w-96 flex-col items-center gap-1">
            <form className="w-full">
              <div>
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-2    focus:outline-none block w-full p-2.5"
                  placeholder="sugarCube"
                  required
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 mt-6 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 focus:border-2    focus:outline-none block w-full p-2.5"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
