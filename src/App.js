import React from "react";
import TotoContext from "./Toto";
//import Child from "components/Child.jsx";
import Child from "components/Child";

const App = () => {
	return (
		<TotoContext.Provider value={{ name1: "Matthieu", name2: "Mathis" }}>
			<Child />
			content
		</TotoContext.Provider>
	);
};

export default App;
