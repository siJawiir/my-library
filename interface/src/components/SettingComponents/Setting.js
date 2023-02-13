import React from "react";
import Avatar from "../../images/avatar.png";
import AccountForm from "./AccountForm";
import PersonalForm from "./PersonalForm";

function Setting() {
  return (
    <main className="flex flex-1 flex-col px-8 mt-28 items-center justify-center">
      <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
        <div className="flex flex-col">
          <p className="text-lg font-bold text-primary1 mb-8">
            Profile <span className="text-primary2">Information</span>
          </p>
          <p className="text-base font-semibold mb-2">Your Avatar</p>
          <div className="flex flex-row items-center">
            <img src={Avatar} className="w-16 h-16 object-center mr-4" />
            <div className="flex flex-col mr-8">
              <p className="text-sm">Raihan Marwanda</p>
              <p className="text-sm text-primary1">@raihanmarwanda</p>
            </div>
            <a
              className="w-48 h-8 text-base bg-secondary2 items-center text-center pt-1 text-white rounded-full"
              href="#"
            >
              Change Avatar
            </a>
          </div>
          <div className="flex flex-row w-full mt-4">
            <div className="flex flex-col w-1/2 mr-32">
              <PersonalForm />
            </div>
            <div className="flex flex-col w-1/2">
              <AccountForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Setting;
