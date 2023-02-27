import React from "react";
import { motion } from "framer-motion";
import { TrashIcon } from "@heroicons/react/24/outline";
import { gun, sticker, sGrade } from "../typeModels/models";
import { generateGunLink, generateStickerLink } from "../helper/linkFunctions";
import { removeItem } from "../store/csSummary";
import { useDispatch } from "react-redux";

const variants = {
	active: {
		y: 0,
		transition: { type: "spring" },
	},
	inactive: {
		y: "200%",
	},
	removed: {
		transform: "scale(0.8)",
		opacity: 0,
		transition: { type: "spring" },
	},
};

const stickerGrade: sGrade = {
	Paper: "PA",
	Foil: "FO",
	Glitter: "GL",
	Holo: "HO",
	Gold: "GO",
	Lenticular: "LE",
};

const Tr: React.FC<{
	data: gun | sticker;
	itemIndex: number;
}> = ({ data, itemIndex }) => {
	const dispatch = useDispatch();

	if ("isStatTrak" in data) {
		return (
			// Gun
			<motion.tr
				key={itemIndex}
				variants={variants}
				initial="inactive"
				animate="active"
				exit="removed"
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
				<td
					onClick={() => {
						dispatch(removeItem(itemIndex));
					}}
					className="absolute -right-5 top-2 flex h-[70%] cursor-pointer items-center justify-center rounded-sm bg-rose-500 px-2 transition-all hover:-right-0 hover:bg-rose-700"
				>
					<TrashIcon className="h-5 w-5" />
				</td>
			</motion.tr>
		);
	} else {
		//  Sticker
		return (
			<motion.tr
				key={itemIndex}
				variants={variants}
				initial="inactive"
				animate="active"
				exit="removed"
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
				<td
					onClick={() => {
						dispatch(removeItem(itemIndex));
					}}
					className="absolute -right-5 top-2 flex h-[70%] cursor-pointer items-center justify-center rounded-sm bg-rose-500 px-2 transition-all hover:-right-0 hover:bg-rose-700"
				>
					<TrashIcon className="h-5 w-5" />
				</td>
			</motion.tr>
		);
	}
};

export default Tr;
