import React from "react";

const Test = ({test, children}) => {
return <div className={test}>{children}</div>;
};

export default Test;
