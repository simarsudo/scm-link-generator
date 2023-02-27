import React from "react";
import { motion } from "framer-motion";
import { TrashIcon } from "@heroicons/react/24/outline";
import { gun, sticker, sGrade } from "../typeModels/models";
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

const conditions: gConditions = {
	FN: "Factory New",
	MW: "Minimal Wear",
	FT: "Field-Tested",
	WW: "Well-Worn",
	BS: "Battle-Scarred",
};

const stickerGrade: sGrade = {
	Paper: "PA",
	Foil: "FO",
	Glitter: "GL",
	Holo: "HO",
	Gold: "GO",
	Lenticular: "LE",
};

function generateGunLink(gun: gun, condition: string): string {
	const baseLink = "https://steamcommunity.com/market/listings/730/";
	return `${baseLink}${gun.isStatTrak ? "StatTrak™ " : ""}${gun.type} | ${
		gun.name
	} (${conditions[condition]})`;
}

function generateStickerLink(sticker: sticker, grade: string): string {
	const baseStickerLink =
		"https://steamcommunity.com/market/listings/730/Sticker | ";
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

const Tr: React.FC<{
	data: gun | sticker;
}> = ({ data }) => {
	if ("isStatTrak" in data) {
		return (
			// Gun
			<motion.tr
				key={data.name}
				variants={variants}
				initial="inactive"
				animate="active"
				className="relative"
			>
				<td className="p-4 pl-6 text-left">{`${data.name}${
					data.isStatTrak ? " StatTrak™" : ""
				}`}</td>
				<td className="p-4 pl-6 text-left">{data.type}</td>
				<td className="flex gap-1 p-4 pl-6 text-left">
					{data.conditions.map((condition: string) => {
						return (
							<a
								key={condition}
								rel="noopener noreferrer"
								href={generateGunLink(data, condition)}
								target="_blank"
								className="underline decoration-cyan-400 decoration-2 underline-offset-4 transition-colors hover:text-cyan-400"
							>
								{condition}
							</a>
						);
					})}
				</td>
				<div className="absolute -right-5 top-2 flex h-[70%] cursor-pointer items-center justify-center rounded-sm bg-rose-500 px-2 transition-all hover:-right-0">
					<TrashIcon className="h-5 w-5" />
				</div>
			</motion.tr>
		);
	} else {
		//  Sticker
		return (
			<motion.tr
				key={data.name}
				variants={variants}
				initial="inactive"
				animate="active"
				className="relative"
			>
				<td className="p-4 pl-4 text-left">{data.name}</td>
				<td className="p-4 pl-4 text-left">{data.type}</td>
				<td className="flex gap-1 p-4 pl-6 text-left">
					{data.grade.map((grade: string) => {
						return (
							<a
								key={grade}
								rel="noopener noreferrer"
								href={generateStickerLink(data, grade)}
								target="_blank"
								className="underline decoration-cyan-400 decoration-2 underline-offset-4 transition-colors hover:text-cyan-400"
							>
								{stickerGrade[grade]}
							</a>
						);
					})}
				</td>
				<div className="absolute -right-5 top-2 flex h-[70%] cursor-pointer items-center justify-center rounded-sm bg-rose-500 px-2 transition-all hover:-right-0">
					<TrashIcon className="h-5 w-5" />
				</div>
			</motion.tr>
		);
	}
};

export default Tr;
