import React from "react";

export default function SummaryTable() {
	return (
		<div className="flex h-full w-full flex-col overflow-hidden rounded bg-neutral-700 text-white shadow-md shadow-cyan-800">
			<table className="table-auto pl-4">
				<thead className="sticky border-b-2 border-gray-300">
					<tr>
						<th className="p-4 text-left text-lg">Name</th>
						<th className="p-4 text-left text-lg">Type</th>
						<th className="p-4 text-left text-lg">Condition/Grade</th>
					</tr>
				</thead>
				<tbody className="divide-y-2 divide-gray-600">
					<tr>
						<td className="p-4 pl-4 text-left">Yo</td>
						<td className="p-4 pl-4 text-left">Yo1</td>
						<td className="p-4 pl-4 text-left">Yo2</td>
					</tr>
					<tr>
						<td className="p-4 pl-4 text-left">Yo</td>
						<td className="p-4 pl-4 text-left">Yo1</td>
						<td className="p-4 pl-4 text-left">Yo2</td>
					</tr>
					<tr>
						<td className="p-4 pl-4 text-left">Yo</td>
						<td className="p-4 pl-4 text-left">Yo1</td>
						<td className="p-4 pl-4 text-left">Yo2</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
