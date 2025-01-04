import React from 'react';

const CustomerTable = () => {
  // Sample data creation function
  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };

  // Data rows
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <div className="w-full max-h-96 overflow-auto rounded-lg shadow-md">
      <div className="min-w-[700px]">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-gray-800 sticky top-0">
            <tr >
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
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  last:border-0
                `}
              >
                <td className="p-4 text-sm text-gray-900">
                  {row.name}
                </td>
                <td className="p-4 text-sm text-gray-900 text-right">
                  {row.calories}
                </td>
                <td className="p-4 text-sm text-gray-900 text-right">
                  {row.fat}
                </td>
                <td className="p-4 text-sm text-gray-900 text-right">
                  {row.carbs}
                </td>
                <td className="p-4 text-sm text-gray-900 text-right">
                  {row.protein}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;