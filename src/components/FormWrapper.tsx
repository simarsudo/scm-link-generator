import React from "react";

type Props = {
	children: JSX.Element[] | JSX.Element;
	className: string;
	submit: (e: React.FormEvent) => void;
};

const FormWrapper = ({ children, className, submit }: Props) => {
	return (
		<form
			className={"flex gap-4 flex-col w-full p-4" + " " + className}
			onSubmit={submit}
		>
			{children}
		</form>
	);
};

export default FormWrapper;
