import React from "react";

function Menu(props){
    console.log(props);
    return(
        <ul>
            {props.menuContent.map( (oneMenu, idx) => <li key={oneMenu+idx}>{oneMenu}</li>)}
        </ul>
    )
}

export default Menu;