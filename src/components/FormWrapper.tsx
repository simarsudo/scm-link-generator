import React from "react";

type Props = {
	children: JSX.Element[] | JSX.Element;
	className: string;
	submit: (e: React.FormEvent) => void;
};

const FormWrapper = ({ children, className, submit }: Props) => {
	return (
		<form
			className={"flex flex-col w-full p-4 py-12" + " " + className}
			onSubmit={submit}
		>
			{children}
		</form>
	);
};

export default FormWrapper;
