import React from "react";
import { motion } from "framer-motion";

type Props = {};

const StickerForm = (props: Props) => {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="h-full bg-white"
		>
			<form className="w-full">
				<div>
					<span>Sticker Type</span>
					<input type="text" />
				</div>
			</form>
		</motion.div>
	);
};

export default StickerForm;
