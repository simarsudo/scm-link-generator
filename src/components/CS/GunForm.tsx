import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import FormWrapper from "../FormWrapper";
import GunType from "../input-component/GunType";

const checkBoxWrapper = "flex gap-2 items-center justify-center";

const GunForm = () => {
	const [gunType, setGunType] = useState<string | undefined>("AK-47");
	const gunNameRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(gunType, gunNameRef.current?.value);
	};

	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="h-full bg-white"
		>
			<FormWrapper
				className=""
				submit={(e: React.FormEvent) => submitHandler(e)}
			>
				<GunType setGunType={setGunType} />
				<div>
					<span>Name</span>
					<input
						required
						type="text"
						ref={gunNameRef}
						placeholder="Names are Case Sensitive"
					/>
				</div>
				<div className="flex">
					<span>Condition/s</span>
					<div className="flex gap-2">
						<div className={checkBoxWrapper}>
							<input type="checkbox" id="FN" name="FN" value="true" />
							<span>FN</span>
						</div>
						<div className={checkBoxWrapper}>
							<input type="checkbox" id="MW" name="MW" value="true" />
							<span>MW</span>
						</div>
						<div className={checkBoxWrapper}>
							<input type="checkbox" id="FT" name="FT" value="true" />
							<span>FT</span>
						</div>
						<div className={checkBoxWrapper}>
							<input type="checkbox" id="WW" name="WW" value="true" />
							<span>WW</span>
						</div>
						<div className={checkBoxWrapper}>
							<input type="checkbox" id="BS" name="BS" value="true" />
							<span>BS</span>
						</div>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<span>StatTrak™</span>
					<input type="checkbox" id="isSt" name="isSt" value="true" />
				</div>
				<button>Add</button>
			</FormWrapper>
		</motion.div>
	);
};

export default GunForm;
