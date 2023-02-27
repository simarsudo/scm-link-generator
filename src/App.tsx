import { useState } from "react";
import CS from "./components/CS/CS";
import TF2 from "./components/TF2";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="flex h-full min-h-screen w-screen flex-col lg:h-screen">
			<Navbar />
			<CS />
		</div>
	);
}

export default App;
