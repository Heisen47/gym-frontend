import React from "react";

export default function UserProfile({ customer }) {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white rounded-lg shadow p-5 text-center mb-6">
              <img
                src={`${customer.image}`}
                alt="avatar"
                className="rounded-full w-36 h-36 mx-auto mb-3"
              />
              <div className="flex justify-center gap-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Update Profile
                </button>
                <button className="border border-gray-300 py-2 px-4 rounded hover:bg-gray-100">
                  Delete Profile
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <ul className="divide-y">
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fas fa-globe text-yellow-500"></i>
                  <a
                    href="https://mdbootstrap.com"
                    className="text-blue-500 hover:underline"
                  >
                    https://mdbootstrap.com
                  </a>
                </li>
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fab fa-github text-gray-800"></i>
                  <span>mdbootstrap</span>
                </li>
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fab fa-twitter text-blue-400"></i>
                  <span>@mdbootstrap</span>
                </li>
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fab fa-instagram text-pink-500"></i>
                  <span>mdbootstrap</span>
                </li>
                <li className="flex justify-between items-center px-5 py-3">
                  <i className="fab fa-facebook text-blue-700"></i>
                  <span>mdbootstrap</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-lg shadow p-5 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4">
                <p className="font-semibold">Full Name</p>
                <p className="col-span-2 text-gray-600">{customer.name}</p>
                <p className="font-semibold">Email</p>
                <p className="col-span-2 text-gray-600">{customer.email}</p>
                <p className="font-semibold">Phone</p>
                <p className="col-span-2 text-gray-600">
                  {customer.phoneNumber}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-5">
                <p className="mb-4 text-lg font-medium text-primary">
                  Payment History
                </p>
                {[
                  { title: "Web Design", progress: 80 },
                  { title: "Website Markup", progress: 72 },
                  { title: "One Page", progress: 89 },
                  { title: "Mobile Template", progress: 55 },
                  { title: "Backend API", progress: 66 },
                ].map((task, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-sm">{task.title}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Attendance */}
              <div className="bg-white rounded-lg shadow p-5">
                <p className="mb-4 text-lg font-medium text-primary">
                  Attendance
                </p>
                {[
                  { title: "Web Design", progress: 80 },
                  { title: "Website Markup", progress: 72 },
                  { title: "One Page", progress: 89 },
                  { title: "Mobile Template", progress: 55 },
                  { title: "Backend API", progress: 66 },
                ].map((task, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-sm">{task.title}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
