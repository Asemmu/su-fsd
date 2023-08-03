import React from "react";

const CardsContainer = (props) => {
    return <div className="pt-5 px-5 grid grid-cols-3 gap-4">{props.children}</div>
}

export default CardsContainer;