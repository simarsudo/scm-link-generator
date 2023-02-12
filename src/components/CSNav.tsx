import React, { MouseEvent } from "react";
import { RootState } from "../store/store";
import { changeTab } from "../store/cs";
import { useDispatch, useSelector } from "react-redux";

const CSNav: React.FC<{}> = () => {
	const csTab = useSelector((state: RootState) => state.cs.tab);
	const changeTabFunction = (value: string) => {
		dispatch(changeTab(value));
	};

	const dispatch = useDispatch();

	return (
		<nav className="z-10 border-b border-neutral-600">
			<ul className="relative flex h-full w-full items-center justify-center">
				<li
					onClick={() => changeTabFunction("g")}
					className={`w-full ${
						csTab === "g" ? "bg-neutral-600" : "bg-neutral-700"
					} p-2 text-center text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:bg-neutral-600`}
				>
					Guns
				</li>
				<li
					onClick={() => changeTabFunction("s")}
					className={`w-full ${
						csTab === "s" ? "bg-neutral-600" : "bg-neutral-700"
					} p-2 text-center text-lg font-semibold text-white transition-colors hover:cursor-pointer hover:bg-neutral-600`}
				>
					Stickers
				</li>
				<div
					className={`absolute bg-cyan-500 ${
						csTab === "g" ? "left-0" : "left-1/2"
					} bottom-0 h-2 w-1/2 transition-all`}
				></div>
			</ul>
		</nav>
	);
};

export default CSNav;
