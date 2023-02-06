import React, { useState } from "react";
import CSNav from "./CSNav";

export default function CSForm() {
	const [category, setCategory] = useState("G");

	return (
		<div className="h-full w-full rounded border p-4">
			<CSNav category={category} setCategory={setCategory} />
		</div>
	);
}
