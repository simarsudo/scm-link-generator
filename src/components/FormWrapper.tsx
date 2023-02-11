import React from "react";

type Props = {
	children: JSX.Element;
	className: string;
	submit: () => void;
};

const FormWrapper = ({ children, className, submit }: Props) => {
	return (
		<form className={"w-full p-2" + " " + className} onSubmit={submit}>
			{children}
		</form>
	);
};

export default FormWrapper;
