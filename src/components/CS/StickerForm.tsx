import React from "react";
import { motion } from "framer-motion";
import FormWrapper from "../FormWrapper";

type Props = {};
const checkBoxWrapper = "flex gap-2 items-center justify-center text-gray-200";
const spanText = "font-semibold text-white";

const StickerForm = (props: Props) => {
	const submitHandler = () => {};

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="flex h-full w-full flex-col overflow-hidden rounded bg-neutral-700 text-white shadow-md shadow-cyan-600"
		>
			<FormWrapper
				className="flex w-full flex-col gap-8"
				submit={submitHandler}
			>
				<div className="flex flex-col gap-4">
					<span className={spanText}>Sticker Name</span>
					<input type="text" className="justify-end" />
				</div>
				<div className="flex items-center justify-center gap-4">
					<span className={spanText}>Tournament Sticker</span>
					<input type="checkbox" />
					<input type="text" />
				</div>
				<div className="flex flex-col gap-4">
					<span className={spanText}>Grade</span>
					<div className="ml-4 flex gap-4">
						<div className={checkBoxWrapper}>
							<input type="checkbox" />
							<span>Paper</span>
						</div>
						<div className={checkBoxWrapper}>
							<input type="checkbox" />
							<span>Foil</span>
						</div>
						<div className={checkBoxWrapper}>
							<input type="checkbox" />
							<span>Glitter</span>
						</div>
						<div className={checkBoxWrapper}>
							<input type="checkbox" />
							<span>Holo</span>
						</div>
						<div className={checkBoxWrapper}>
							<input type="checkbox" />
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
		</motion.div>
	);
};

export default StickerForm;
