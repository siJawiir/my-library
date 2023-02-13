import React from "react";

function AccountForm() {
  return (
    <div>
      <div className="flex flex-row items-center h-12 mb-4">
        <p className="text-base font-semibold text-gray-700 mr-4">
          Account Information
        </p>
        <a
          className="w-24 h-8 text-sm bg-secondary2 text-center pt-1 text-white rounded-full"
          href="#"
        >
          Change
        </a>
      </div>
      <form className="w-80">
        <div className="mb-2">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Username
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="@raihanmarwanda"
            required
          />
        </div>
        <div className="mb-2">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            placeholder="raihan@mail.com"
          />
        </div>
        <div className="mb-2">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            placeholder="************"
          />
        </div>
      </form>
    </div>
  );
}

export default AccountForm;
