import React, { PureComponent } from "react";
import { connect } from "react-redux";

class BurgerOrder extends PureComponent {
  render() {
    const arrBurger = [...Object.keys(this.props.burger)];
    const arrMenu = [...Object.values(this.props.menu)];
    const total = arrBurger.reduce((acc,item)=> {
      acc+= this.props.burger[item]*this.props.menu[item]
     return acc
    },0)
    return (
      <div>
        <table>
          <thead>
            <tr className="text-center">
              <th className="">Thức ăn</th>
              <th className="ps-4 ">Số lượng</th>
              <th className="ps-4">Giá</th>
            </tr>
          </thead>
          <tbody>
            {arrBurger.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <td className="">
                    <p>{item}</p>
                  </td>
                  <td className="">
                    <button className="btn btn-primary mx-1" onClick={()=>this.props.handleBurgerCount(item,1)}>+</button>
                    <input type="number" className="col-2" value={this.props.burger[item]} min={0} onChange={(e)=>this.props.handleBurgerChange(item,Number(e.target.value))}/>
                    <button className="btn btn-primary mx-1" onClick={()=>this.props.handleBurgerCount(item,-1)}>-</button>
                  </td>
                  <td className="">
                    <p>{arrMenu[index]}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="fs-2">
            <span>Tổng tiền:{total}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { burger: state.BurgerReducer.burger, menu: state.BurgerReducer.menu };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleBurgerCount:(type,count) => {
        let burger = {type,count}
        dispatch({
          type:"SO_LUONG_SAN_PHAM",
          burger
        })
    },
    handleBurgerChange:(type,value) => {
        let burger = {type,value}
        dispatch({
          type:"SO_LUONG_SAN_PHAM_INPUT",
          burger
        })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerOrder);
