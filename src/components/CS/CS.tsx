import React from "react";
import CSForm from "./CSForm";
import SummaryTable from "../SummaryTable";

export default function CS() {
	return (
		<div className="flex w-full flex-1 flex-col items-center gap-8 bg-neutral-900 p-8 md:p-28 md:pb-2 lg:h-[94vh] lg:flex-row lg:justify-center lg:gap-16 lg:p-20">
			<CSForm />
			<SummaryTable />
		</div>
	);
}
