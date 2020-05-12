// import React, { createContext } from "react";

// const TotoContext = createContext("");

// export const withToto = (Component) => (props) => (
// 	<TotoContext.Consumer>
// 		{(value) => <Component {...props} toto={value} />}
// 	</TotoContext.Consumer>
// );

// export default TotoContext;

import React, { createContext } from "react";

const TotoContext = createContext("");

export const withToto = (Component) => (props) => (
	<TotoContext.Consumer>
		{(value) => <Component {...props} toto={value} />}
	</TotoContext.Consumer>
);

export default TotoContext;
