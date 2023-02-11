import React, { useRef } from "react";

type Props = {
	setGunType: (value: string | undefined) => void;
};

const GUNTYPES: string[] = [
	"AK-47",
	"AUG",
	"AWP",
	"CZ75-Auto",
	"Desert Eagle",
	"Dual Berettas",
	"FAMAS",
	"Five-SeveN",
	"G3G1",
	"Galil AR",
	"Glock-18",
	"M249",
	"M4A1-S",
	"M4A4",
	"MAC-10",
	"MAG-7",
	"MP7",
	"MP9",
	"Negav",
	"Nova",
	"P2000",
	"P90",
	"PP-Bizon",
	"Sawed-Off",
	"SCAR-20",
	"SG 553",
	"SSG 08",
	"Tec-9",
	"UMP-45",
	"USP-S",
	"XM1014",
];

const GunType = (props: Props) => {
	const valueRef = useRef<HTMLSelectElement>(null);

	return (
		<div>
			<span>Type</span>
			<select
				name="type"
				id="gunType"
				required
				ref={valueRef}
				onChange={() => {
					props.setGunType(valueRef.current?.value);
				}}
			>
				{GUNTYPES.map((item) => {
					return (
						<option key={item} value={item}>
							{item}
						</option>
					);
				})}
			</select>
			<br />
		</div>
	);
};

export default GunType;
