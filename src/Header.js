import React from "react";
import Title from "./Header/Title"

export default class Layout extends React.Component {
    
    render(){
        console.log(this.props);
        return(
         <header>   <Title n={this.props.n} /> </header>
        )
    }
}