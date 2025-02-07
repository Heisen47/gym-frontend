import React from "react";

const CustomerTable = ({ rows }) => {
  const handleRowClick = (id) => {
    window.open(`/user/${id}`, "_blank");
  };

  return (
    <div className="w-full rounded-lg flex text-center scrollbar-hide">
      <div className="w-full md:min-w-[700px] absolute">
        <div className="max-h-96 overflow-auto ">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-gray-800 sticky top-0">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  User Id
                </th>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  Email
                </th>
                <th className="p-4 text-right text-sm font-semibold text-white">
                  Membership
                </th>
                <th className="p-4 text-right text-sm font-semibold text-white">
                  Name
                </th>
                <th className="p-4 text-right text-sm font-semibold text-white">
                  Phone Number
                </th>
              </tr>
            </thead>
            <tbody>
              {rows
                .filter((row) => row.active === true)
                .map((row, index) => (
                  <tr
                    key={index}
                    className={`
                  border-b border-gray-200
                  ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  last:border-0
                `}
                  >
                    <td
                      className="p-4 text-sm text-gray-900 cursor-pointer "
                      target="_blank"
                      onClick={() => handleRowClick(row.id)}
                    >
                      {row.id}
                    </td>
                    <td
                      className="p-4 text-sm text-gray-900 cursor-pointer hover:underline"
                      onClick={() => handleRowClick(row.id)}
                    >
                      {row.email}
                    </td>
                    <td className="p-4 text-sm text-gray-900 text-right cursor-pointer ">
                      {row.membership ? "Active" : "Inactive"}
                    </td>
                    <td className="p-4 text-sm text-gray-900 text-right cursor-pointer ">
                      {row.name}
                    </td>
                    <td className="p-4 text-sm text-gray-900 text-right cursor-pointer ">
                      {row.phoneNumber}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
