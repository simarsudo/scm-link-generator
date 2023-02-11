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
		<nav>
			<ul className="relative flex h-full w-full items-center justify-center">
				<li
					onClick={() => changeTabFunction("g")}
					className="w-full bg-indigo-600 p-2 text-center font-semibold text-white transition-colors hover:cursor-pointer hover:bg-indigo-700"
				>
					Guns
				</li>
				<li
					onClick={() => changeTabFunction("s")}
					className="w-full bg-indigo-600 p-2 text-center font-semibold text-white transition-colors hover:cursor-pointer hover:bg-indigo-700"
				>
					Stickers
				</li>
				<div
					className={`absolute bg-white left-${
						csTab === "g" ? 0 : "1/2"
					} bottom-0 w-1/2 h-1 transition-all`}
				></div>
			</ul>
		</nav>
	);
};

export default CSNav;
