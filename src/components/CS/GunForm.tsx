import React from "react";
import { motion } from "framer-motion";
import FormWrapper from "../FormWrapper";
import GunType from "../input-component/GunType";

type Props = {};

const GunForm = (props: Props) => {
	const submitHandler = () => {};

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="h-full bg-white"
		>
			<FormWrapper className="" submit={submitHandler}>
				<GunType />
			</FormWrapper>
		</motion.div>
	);
};

export default GunForm;
