import React, { ChangeEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import FormWrapper from "../FormWrapper";
import GunType from "../input-component/GunType";

const checkBoxWrapper = "flex gap-2 items-center justify-center text-gray-200";
const spanText = "font-semibold text-white";

const GunForm = () => {
	const [gunType, setGunType] = useState<string | undefined>("AK-47");
	const [gunConditions, setGunConditions] = useState({
		FN: false,
		MW: false,
		FT: false,
		WW: false,
		BS: false,
	});
	const [isStatTrak, setIsStatTrak] = useState(false);
	const gunNameRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(gunType, gunNameRef.current?.value, gunConditions, isStatTrak);
	};

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="h-full bg-neutral-700"
		>
			<FormWrapper
				className="flex flex-col gap-4"
				submit={(e: React.FormEvent) => submitHandler(e)}
			>
				<GunType
					setGunType={setGunType}
					className="gap-2"
					spanText={spanText}
				/>
				<div className="flex flex-col gap-2">
					<span className={spanText}>Name</span>
					<input
						required
						type="text"
						ref={gunNameRef}
						placeholder="Names are Case Sensitive"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<span className={spanText}>Condition/s</span>
					<div className="flex gap-4 pl-4">
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								id="FN"
								name="FN"
								onChange={(e: ChangeEvent<HTMLInputElement>): void => {
									setGunConditions({ ...gunConditions, FN: e.target.checked });
								}}
							/>
							<span>FN</span>
						</div>
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								id="MW"
								name="MW"
								onChange={(e: ChangeEvent<HTMLInputElement>): void => {
									setGunConditions({ ...gunConditions, MW: e.target.checked });
								}}
							/>
							<span>MW</span>
						</div>
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								id="FT"
								name="FT"
								onChange={(e: ChangeEvent<HTMLInputElement>): void => {
									setGunConditions({ ...gunConditions, FT: e.target.checked });
								}}
							/>
							<span>FT</span>
						</div>
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								id="WW"
								name="WW"
								onChange={(e: ChangeEvent<HTMLInputElement>): void => {
									setGunConditions({ ...gunConditions, WW: e.target.checked });
								}}
							/>
							<span>WW</span>
						</div>
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								id="BS"
								name="BS"
								onChange={(e: ChangeEvent<HTMLInputElement>): void => {
									setGunConditions({ ...gunConditions, BS: e.target.checked });
								}}
							/>
							<span>BS</span>
						</div>
					</div>
				</div>
				<div>
					<span className={`mr-4 ${spanText}`}>StatTrak™</span>
					<input
						type="checkbox"
						id="isSt"
						name="isSt"
						onChange={(e: ChangeEvent<HTMLInputElement>): void => {
							setIsStatTrak(e.target.checked);
						}}
					/>
				</div>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="text-md hover:bg-border-500 h-11 w-28 self-end border-4 border-cyan-500 p-2 font-semibold  text-white transition-all hover:bg-cyan-500 hover:text-white"
				>
					Add
				</motion.button>
			</FormWrapper>
		</motion.div>
	);
};

export default GunForm;
