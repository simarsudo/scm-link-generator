export type sticker = {
	name: string;
	type: string;
	isTS: boolean;
	tournamentName: string;
	grade: string[];
};

export type gun = {
	name: string;
	type: string;
	isStatTrak: Boolean;
	conditions: string[];
};

export type gc = {
	FN: Boolean;
	MW: Boolean;
	FT: Boolean;
	WW: Boolean;
	BS: Boolean;
};

export type gConditions = {
	[FN: string]: string;
	MW: string;
	FT: string;
	WW: string;
	BS: string;
};

export type sGrade = {
	[Paper: string]: string;
	Foil: string;
	Glitter: string;
	Holo: string;
	Gold: string;
	Lenticular: string;
};
