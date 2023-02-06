import React from "react";

export default function CSNav() {
	return (
		<nav>
			<ul className="flex h-full w-full items-center justify-center gap-2">
				<li className="w-full bg-amber-500 p-2 text-center font-semibold text-neutral-900 transition-colors hover:cursor-pointer hover:bg-amber-600">
					Guns
				</li>
				<li className="w-full bg-amber-500 p-2 text-center font-semibold text-neutral-900 transition-colors hover:cursor-pointer hover:bg-amber-600">
					Stickers
				</li>
			</ul>
		</nav>
	);
}
