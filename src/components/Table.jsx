import React from "react";

const data = [
  {
    name: "Do you have security trainin...",
    description: "Do you have security trainin...",
    identifier: "AT.L2-3.2.1",
    lever: 2,
    status: "not started",
    controlFamilyId: "68a9d9e5a2ed067291f22109",
    assignments: "None",
    original: "No",
    createdAt: "09/07/2025",
  },
];

const Table = () => {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#E5EAF2] shadow-sm">
      <table className="min-w-full text-sm text-left text-[#1A202C]">
        {/* Table Head */}
        <thead className="bg-[#F9FAFB] text-xs font-medium text-[#4A5568] uppercase">
          <tr>
            <th className="px-4 py-3 w-4">
              <input type="checkbox" className="rounded border-gray-300" />
            </th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Identifier</th>
            <th className="px-4 py-3">Lever</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Control Family ID</th>
            <th className="px-4 py-3">Assignments</th>
            <th className="px-4 py-3">Original</th>
            <th className="px-4 py-3">Created At</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-[#F7FAFC]">
              <td className="px-4 py-3">
                <input type="checkbox" className="rounded border-gray-300" />
              </td>
              <td className="px-4 py-3">{row.name}</td>
              <td className="px-4 py-3">{row.description}</td>
              <td className="px-4 py-3">{row.identifier}</td>
              <td className="px-4 py-3">{row.lever}</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#FFECEB] text-[#E53E3E]">
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3">{row.controlFamilyId}</td>
              <td className="px-4 py-3">{row.assignments}</td>
              <td className="px-4 py-3">{row.original}</td>
              <td className="px-4 py-3">{row.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
