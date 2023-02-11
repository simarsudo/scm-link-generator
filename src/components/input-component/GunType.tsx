import React from "react";

type Props = {};

const GunType = (props: Props) => {
	return (
		<div>
			<span>Type</span>
			<select name="type" id="gunType" required>
				<option value="" disabled selected>
					Select Gun
				</option>
				<option value="AK-47">AK-47</option>
				<option value="AUG">AUG</option>
				<option value="AWP">AWP</option>
				<option value="CZ75-Auto">CZ75-Auto</option>
				<option value="Desert Eagle">Desert Eagle</option>
				<option value="Dual Berettas">Dual Berettas</option>
				<option value="FAMAS">FAMAS</option>
				<option value="Five-SeveN">Five-SeveN</option>
				<option value="G3G1">G3G1</option>
				<option value="Galil AR">Galil AR</option>
				<option value="Glock-18">Glock-18</option>
				<option value="M249">M249</option>
				<option value="M4A1-S">M4A1-S</option>
				<option value="M4A4">M4A4</option>
				<option value="MAC-10">MAC-10</option>
				<option value="MAG-7">MAG-7</option>
				<option value="MP7">MP7</option>
				<option value="MP9">MP9</option>
				<option value="Negav">Negav</option>
				<option value="Nova">Nova</option>
				<option value="P2000">P2000</option>
				<option value="P90">P90</option>
				<option value="PP-Bizon">PP-Bizon</option>
				<option value="Sawed-Off">Sawed-Off</option>
				<option value="SCAR-20">SCAR-20</option>
				<option value="SG 553">SG 553</option>
				<option value="SSG 08">SSG 08</option>
				<option value="Tec-9">Tec-9</option>
				<option value="UMP-45">UMP-45</option>
				<option value="USP-S">USP-S</option>
				<option value="XM1014">XM1014</option>
			</select>
			<br />
		</div>
	);
};

export default GunType;
