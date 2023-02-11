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
		<nav className="border-b">
			<ul className="relative flex h-full w-full items-center justify-center">
				<li
					onClick={() => changeTabFunction("g")}
					className={`w-full ${
						csTab === "g" ? "bg-gray-100" : "bg-white"
					} p-2 text-center text-black font-semibold transition-colors hover:cursor-pointer hover:bg-gray-200`}
				>
					Guns
				</li>
				<li
					onClick={() => changeTabFunction("s")}
					className={`w-full ${
						csTab === "s" ? "bg-gray-100" : "bg-white"
					} p-2 text-center text-black font-semibold transition-colors hover:cursor-pointer hover:bg-gray-200`}
				>
					Stickers
				</li>
				<div
					className={`absolute bg-violet-500 left-${
						csTab === "g" ? 0 : "1/2"
					} bottom-0 w-1/2 h-1 transition-all`}
				></div>
			</ul>
		</nav>
	);
};

export default CSNav;
