import React, { Component } from 'react';
import { connect } from 'react-redux';
import BurgerOrder from './BurgerOrder';
import './BurgerStyle.css';

class Burger extends Component {
    burgerContent = () => {
        let {
            salad,
            cheese,
            beef,
        } = this.props.burger;
        let burger = [];
        for (let i = 0; i < salad; i++){
            burger.push(<div key={burger.length} className="saladSide"></div>);
        }
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        for (let i = 0; i < beef; i++){
            burger.push(<div key={burger.length} className="beefSide"></div>);
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