
import React from "react";
import logo from "../assets/logo.svg"
function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const amountOfCoffees=Math.round(minutes / 5);
    let coffees=[];
    for (let i =0; i<amountOfCoffees; i++){
        coffees.push(<img src={logo} alt="time"></img>);
    }    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}{coffees}{minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
}
export default Article;
