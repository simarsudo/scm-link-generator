import { sGrade } from "../typeModels/models";
import { gConditions } from "../typeModels/models";
import { gun, sticker } from "../typeModels/models";

const conditions: gConditions = {
	FN: "Factory New",
	MW: "Minimal Wear",
	FT: "Field-Tested",
	WW: "Well-Worn",
	BS: "Battle-Scarred",
};

export function generateGunLink(gun: gun, condition: string): string {
	const baseLink = "https://steamcommunity.com/market/listings/730/";
	return `${baseLink}${gun.isStatTrak ? "StatTrak™ " : ""}${gun.type} | ${
		gun.name
	} (${conditions[condition]})`;
}

export function generateStickerLink(sticker: sticker, grade: string): string {
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
