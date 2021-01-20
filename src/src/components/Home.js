import React from "react";

import { Companies } from "./Companies";
import { Employees } from "./Employees";

export const Home = () => {
	return (
		<div className="home">
			<Companies />
			<Employees />
		</div>
	)
}