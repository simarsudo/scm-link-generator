import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { gun, sticker } from "../typeModels/models";

<tr>
	<td className="p-4 pl-4 text-left">Yo</td>
	<td className="p-4 pl-4 text-left">Yo1</td>
	<td className="p-4 pl-4 text-left">Yo2</td>
</tr>;

export default function SummaryTable() {
	const summaryData = useSelector((state: RootState) => state.csSummary);
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
					{Object.values(summaryData).map((x: gun | sticker) => {
						if ("isStatTrak" in x) {
							return (
								// Gun
								<tr key={x.name}>
									<td className="p-4 pl-4 text-left">{x.name}</td>
									<td className="p-4 pl-4 text-left">{x.type}</td>
								</tr>
							);
						} else {
							//  Sticker
							return (
								<tr key={x.name}>
									<td className="p-4 pl-4 text-left">{x.name}</td>
									<td className="p-4 pl-4 text-left">{x.type}</td>
								</tr>
							);
						}
					})}
				</tbody>
			</table>
		</div>
	);
}
