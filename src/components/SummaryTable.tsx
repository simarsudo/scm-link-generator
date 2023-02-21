import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { gun, sticker } from "../typeModels/models";
import { AnimatePresence, motion, spring } from "framer-motion";
import { gConditions } from "../typeModels/models";

const variants = {
	active: {
		y: 0,
		transition: { duration: 0.5, type: "spring" },
	},
	inactive: {
		y: "200%",
	},
};

const baseLink = "https://steamcommunity.com/market/listings/730/";

const conditions: gConditions = {
	FN: "Factory New",
	MW: "Minimal Wear",
	FT: "Field-Tested",
	WW: "Well-Worn",
	BS: "Battle-Scarred",
};

const baseStickerLink =
	"https://steamcommunity.com/market/listings/730/Sticker | ";

function generateGunLink(gun: gun, condition: string): string {
	return `${baseLink}${gun.isStatTrak ? "StatTrak™ " : ""}${gun.type} | ${
		gun.name
	} (${conditions[condition]})`;
}

function generateStickerLink(sticker: sticker, grade: string): string {
	let gradeLink = `${grade === "Paper" ? "" : ` (${grade})`}`;
	let tLink = gradeLink;
	if (sticker.isTS) {
		tLink = `${
			sticker.isTS ? `${gradeLink} | ${sticker.tournamentName}` : `${gradeLink}`
		}`;
	}
	`${baseStickerLink}`;
	const link = `${baseStickerLink}${sticker.name}${tLink}`;
	return link;
}

export default function SummaryTable() {
	const summaryData = useSelector((state: RootState) => state.csSummary);
	return (
		<div className="flex h-full w-full flex-col overflow-hidden overflow-y-auto rounded bg-neutral-700 text-white shadow-md shadow-cyan-800">
			<table className="table-fixed pl-4">
				<thead className="sticky top-0 z-10 bg-neutral-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-gray-300">
					<tr className="">
						<th className="p-4 py-3 text-left text-lg">Name</th>
						<th className="p-4 py-3 text-left text-lg">Type</th>
						<th className="p-4 py-3 text-left text-lg">Condition/Grade</th>
					</tr>
				</thead>
				<tbody className="relative divide-y-2 divide-gray-600">
					<AnimatePresence>
						{Object.values(summaryData).map((x: gun | sticker) => {
							if ("isStatTrak" in x) {
								return (
									// Gun
									<motion.tr
										key={x.name}
										variants={variants}
										initial="inactive"
										animate="active"
									>
										<td className="p-4 pl-6 text-left">{`${x.name}${
											x.isStatTrak ? " StatTrak™" : ""
										}`}</td>
										<td className="p-4 pl-6 text-left">{x.type}</td>
										<td className="flex gap-1 p-4 pl-6 text-left">
											{x.conditions.map((condition: string) => {
												return (
													<a
														key={condition}
														rel="noopener noreferrer"
														href={generateGunLink(x, condition)}
														target="_blank"
													>
														{condition}
													</a>
												);
											})}
										</td>
									</motion.tr>
								);
							} else {
								//  Sticker
								return (
									<motion.tr
										key={x.name}
										variants={variants}
										initial="inactive"
										animate="active"
									>
										<td className="p-4 pl-4 text-left">{x.name}</td>
										<td className="p-4 pl-4 text-left">{x.type}</td>
										<td className="flex gap-1 p-4 pl-6 text-left">
											{x.grade.map((grade: string) => {
												return (
													<a
														key={grade}
														rel="noopener noreferrer"
														href={generateStickerLink(x, grade)}
														target="_blank"
													>
														{grade}
													</a>
												);
											})}
										</td>
									</motion.tr>
								);
							}
						})}
					</AnimatePresence>
				</tbody>
			</table>
		</div>
	);
}
