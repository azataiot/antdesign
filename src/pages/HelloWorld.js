import React from 'react';
import ShoppingList from "./shoppinglist";
import Square from "./buttontest";

const Picture = (props) =>{
    return (
        <div>
            <img src="{ props.src }"/>
            {props.children}
        </div>
    )
};

const picture = {
    src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg'};



export default () => {
    return(
        <Square>
        </Square>
    );
}