import React from "react";
import { motion } from "framer-motion";
import FormWrapper from "../FormWrapper";

type Props = {};

const StickerForm = (props: Props) => {
	const submitHandler = () => {};

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="flex h-full w-full flex-col overflow-hidden rounded bg-neutral-700 text-white shadow-md shadow-teal-600"
		>
			<FormWrapper className="w-full" submit={submitHandler}>
				<div>
					<span>Sticker Type</span>
					<input type="text" />
				</div>
			</FormWrapper>
		</motion.div>
	);
};

export default StickerForm;
