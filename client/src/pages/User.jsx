import React from "react";
import { CiImport } from "react-icons/ci";

function User() {
  return (
    <div className="min-h-full min-w-full bg-gray-50 px-6 py-8 mx-auto md:h-screen lg:py-2">
      <section>
        <div className="flex flex-col items-start justify-center ">
          <h2>Account</h2>
          <h4>Manage your account settings</h4>

          <div className="flex justify-center items-center text-center flex-col pb-10 px-4 w-full gap-4">
            <h3 className="text-lg w-full border-b-2 text-primary-600">
              Avatar
            </h3>

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

          <div className="flex justify-center items-center text-center flex-col pb-10 px-4 w-full gap-4">
            <h3 className="text-lg w-full border-b-2 text-primary-600">
              Profile
            </h3>

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
        </div>
      </section>
    </div>
  );
}

export default User;
