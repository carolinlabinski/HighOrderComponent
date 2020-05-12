// import TotoContext from "components/Toto";
// import React from "react";
// import Child from "components/Child";

// const App = () => {
// 	//const TotoContext = createContext({ name1: "Matthieu", name2: "Mathis" });

// 	return (
// 		<div>
// 			<TotoContext.Provider value={{ name1: "Matthieu", name2: "Mathis" }}>
// 				{" "}
// 				<Child />
// 			</TotoContext.Provider>
// 		</div>
// 	);
// };

// export default App;

import React from "react";
import TotoContext from "./Toto";
import Child from "components/Child/Child.jsx";
//import Child from "components/Child; avec un dossier Child

const App = () => {
	return (
		<TotoContext.Provider value={{ name1: "Matthieu", name2: "Mathis" }}>
			<Child />
			content
		</TotoContext.Provider>
	);
};

export default App;
