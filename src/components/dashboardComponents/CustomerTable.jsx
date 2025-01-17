import React from "react";
// import { useNavigate } from 'react-router';


const CustomerTable = () => {
  // Sample data creation function
  const createData = (id, name, calories, fat, carbs, protein) => {
    return { id, name, calories, fat, carbs, protein };
  };

  // const navigate = useNavigate();

  const handleRowClick = (id) => {
    window.open(`/user/${id}`, '_blank');
  };

  // Data rows
  const rows = [
    createData("1","Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("2","Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("3","Eclair", 262, 16.0, 24, 6.0),
    createData("4","Cupcake", 305, 3.7, 67, 4.3),
    createData("5","Gingerbread", 356, 16.0, 49, 3.9),
    createData("6","Gingerbread", 356, 16.0, 49, 3.9),
    createData("7","Gingerbread", 356, 16.0, 49, 3.9),
    createData("8","Gingerbread", 356, 16.0, 49, 3.9),
    createData("9","Gingerbread", 356, 16.0, 49, 3.9),
    createData("10","Gingerbread", 356, 16.0, 49, 3.9),
    createData("11","Gingerbread", 356, 16.0, 49, 3.9),
    createData("12","Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="w-full rounded-lg flex text-center scrollbar-hide">
      <div className="w-full md:min-w-[700px] relative">
        <div className="max-h-96 overflow-auto ">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-gray-800 sticky top-0">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  User Id
                </th>
                <th className="p-4 text-left text-sm font-semibold text-white">
                  Dessert (100g serving)
                </th>
                <th className="p-4 text-right text-sm font-semibold text-white">
                  Calories
                </th>
                <th className="p-4 text-right text-sm font-semibold text-white">
                  Fat (g)
                </th>
                <th className="p-4 text-right text-sm font-semibold text-white">
                  Carbs (g)
                </th>
                <th className="p-4 text-right text-sm font-semibold text-white">
                  Protein (g)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`
                  border-b border-gray-200
                  ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  last:border-0
                `}
                >
                  <td className="p-4 text-sm text-gray-900 cursor-pointer " target = '_blank' onClick={() => handleRowClick(row.id)}>
                    {row.id}
                  </td>
                  <td className="p-4 text-sm text-gray-900 cursor-pointer " onClick={() => handleRowClick(row.id)}>
                    {row.name}
                  </td>
                  <td className="p-4 text-sm text-gray-900 text-right cursor-pointer ">
                    {row.calories}
                  </td>
                  <td className="p-4 text-sm text-gray-900 text-right cursor-pointer ">
                    {row.fat}
                  </td>
                  <td className="p-4 text-sm text-gray-900 text-right cursor-pointer ">
                    {row.carbs}
                  </td>
                  <td className="p-4 text-sm text-gray-900 text-right cursor-pointer ">
                    {row.protein}
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
