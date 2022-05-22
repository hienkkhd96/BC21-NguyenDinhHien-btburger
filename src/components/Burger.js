import React, { Component } from 'react';
import { connect } from 'react-redux';
import BurgerOrder from './BurgerOrder';
import './BurgerStyle.css';

class Burger extends Component {
    burgerContent = () => {
        const arrBurger = [...Object.keys(this.props.burger)];
        const arrBurgerValue = [...Object.values(this.props.burger)];

        let burger = [];
        for (let i=0;i<arrBurger.length;i++) {
            for (let j = 0; j < arrBurgerValue[i]; j++){
                burger.push(<div key={burger.length} className={`${arrBurger[i]}Side`}></div>);
            }
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger
    }

    render(){
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <BurgerOrder/>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {burger:state.BurgerReducer.burger}
}
export default connect(mapStateToProps)(Burger)