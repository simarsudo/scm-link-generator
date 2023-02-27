import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { gun, sticker } from "../typeModels/models";
import { AnimatePresence, motion } from "framer-motion";
import Tr from "./Tr";

export default function SummaryTable() {
	const summaryData = useSelector((state: RootState) => state.csSummary);
	return (
		<div className="flex h-full w-full flex-col overflow-hidden overflow-y-auto rounded bg-neutral-800 text-white shadow-lg shadow-cyan-800">
			<table className="table-fixed pl-4">
				<thead className="sticky top-0 z-10 bg-neutral-800 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-cyan-500">
					<tr className="">
						<th className="w-1/3 p-4 py-3 text-left text-lg">Name</th>
						<th className="w-1/3 p-4 py-3 text-left text-lg">Type</th>
						<th className="w-1/3 p-4 py-3 text-left text-lg">
							Condition/Grade
						</th>
					</tr>
				</thead>
				<tbody className="relative divide-y-2 divide-gray-700">
					<AnimatePresence mode="sync" initial={false}>
						{Object.values(summaryData).map((x: gun | sticker, index) => {
							if ("isStatTrak" in x) {
								return (
									// Gun
									<Tr data={x} itemIndex={index} key={index} />
								);
							} else {
								//  Sticker
								return <Tr data={x} itemIndex={index} key={index} />;
							}
						})}
					</AnimatePresence>
				</tbody>
			</table>
		</div>
	);
}
