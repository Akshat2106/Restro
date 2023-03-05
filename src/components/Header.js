import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import headerImage from '../assets/React_Header.png';
import classes from './Header.module.css';
const Header=(props)=>{
return (
<React.Fragment>
<header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton toggleCartFunction={props.toggleCartFunction}/>
</header>
<div className={classes['main-image']}>
    <img src={headerImage} alt='A table full of delicious food!'></img>
</div>
</React.Fragment>
);
};

export default Header;

