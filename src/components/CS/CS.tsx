import React from "react";
import CSForm from "./CSForm";
import SummaryTable from "../SummaryTable";

export default function CS() {
	return (
		<div className="flex h-full w-full items-center justify-center gap-16 bg-neutral-900 p-20">
			<CSForm />
			<SummaryTable />
		</div>
	);
}
