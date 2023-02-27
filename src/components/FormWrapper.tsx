import React from "react";

type Props = {
	children: JSX.Element[] | JSX.Element;
	className: string;
	submit: (e: React.FormEvent) => void;
};

const FormWrapper = ({ children, className, submit }: Props) => {
	return (
		<form
			className={
				"flex h-full min-h-min flex-col p-2 lg:p-4 lg:py-12" + " " + className
			}
			onSubmit={submit}
		>
			{children}
		</form>
	);
};

export default FormWrapper;
