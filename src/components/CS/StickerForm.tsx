import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import FormWrapper from "../FormWrapper";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/csSummary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type sc = {
	Paper: Boolean;
	Foil: Boolean;
	Glitter: Boolean;
	Holo: Boolean;
	Gold: Boolean;
};

type Props = {};
const checkBoxWrapper = "flex gap-2 items-center justify-center text-gray-200";
const spanText = "font-semibold text-white";

const StickerForm = (props: Props) => {
	const stickerName = useRef<HTMLInputElement>(null);
	const [isTS, setisTS] = useState(false);
	const tName = useRef<HTMLInputElement>(null);
	const [grade, setGrade] = useState<sc>({
		Paper: false,
		Foil: false,
		Glitter: false,
		Holo: false,
		Gold: false,
	});
	const dispatch = useDispatch();

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		const sGrade = [];
		let k: keyof sc;
		for (k in grade) {
			if (grade[k] === true) {
				sGrade.push(k);
			}
		}
		const keyValues = {
			name: stickerName.current?.value!,
			isTS: isTS,
			type: isTS ? "Tournament Sticker" : "Sticker",
			tournamentName: tName.current?.value!,
			grade: [...sGrade],
		};
		if (keyValues.isTS && keyValues.tournamentName === "") {
			toast.error("Please enter tournament name.");
			return;
		}
		if (keyValues.grade.length === 0) {
			toast.error("Please select 1 sticker grade.");
			return;
		}
		dispatch(addItem(keyValues));
		console.log(
			`${stickerName.current?.value}sticker`,
			isTS,
			tName.current?.value,
			grade
		);
	};

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="flex h-full w-full flex-col overflow-hidden rounded bg-neutral-800 text-white"
		>
			<FormWrapper
				className="flex w-full flex-col gap-8"
				submit={submitHandler}
			>
				<div className="flex flex-col gap-4">
					<span className={spanText}>Sticker Name</span>
					<input
						type="text"
						className="justify-end"
						ref={stickerName}
						required
					/>
				</div>
				<div className="flex items-center justify-center gap-4">
					<span className={spanText}>Tournament Sticker</span>
					<input
						type="checkbox"
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setisTS(e.target.checked);
						}}
					/>
					<input
						type="text"
						ref={tName}
						disabled={!isTS}
						className="disabled:cursor-not-allowed"
					/>
				</div>
				<div className="flex flex-col gap-4">
					<span className={spanText}>Grade</span>
					<div className="ml-4 flex gap-4">
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setGrade({ ...grade, Paper: e.target.checked });
								}}
							/>
							<span>Paper</span>
						</div>
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setGrade({ ...grade, Foil: e.target.checked });
								}}
							/>
							<span>Foil</span>
						</div>
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setGrade({ ...grade, Glitter: e.target.checked });
								}}
							/>
							<span>Glitter</span>
						</div>
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setGrade({ ...grade, Holo: e.target.checked });
								}}
							/>
							<span>Holo</span>
						</div>
						<div className={checkBoxWrapper}>
							<input
								type="checkbox"
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setGrade({ ...grade, Gold: e.target.checked });
								}}
							/>
							<span>Gold</span>
						</div>
					</div>
				</div>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="text-md hover:bg-border-500 h-11 w-28 self-end border-4 border-cyan-500 p-2 font-semibold  text-white transition-all hover:bg-cyan-500 hover:text-white"
				>
					Add
				</motion.button>
			</FormWrapper>
			<ToastContainer
				pauseOnHover={false}
				theme="dark"
				bodyClassName="bg-neutral-900"
				toastClassName="bg-neutral-900"
			/>
		</motion.div>
	);
};

export default StickerForm;
