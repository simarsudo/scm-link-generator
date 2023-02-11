import React, { useState } from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import CSNav from "./CSNav";
import GunForm from "./CS/GunForm";
import StickerForm from "./CS/StickerForm";

export default function CSForm() {
	const category = useSelector((state: RootState) => state.cs.tab);
	return (
		<div className="h-full w-full rounded border flex flex-col bg-white overflow-hidden">
			<CSNav />
			<AnimatePresence mode="wait">
				{category === "g" ? <GunForm key={"g"} /> : <StickerForm key={"s"} />}
			</AnimatePresence>
		</div>
	);
}
