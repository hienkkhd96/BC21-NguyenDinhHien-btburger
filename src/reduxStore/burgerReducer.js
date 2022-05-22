const burgerState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 10,
        beef: 10
    }
}
export const BurgerReducer = (state = burgerState,action) => {
    switch(action.type) {
        case "SO_LUONG_SAN_PHAM": {
           
            let cloneState = {...state.burger}
            let sanPham = {...action.burger}
            if(cloneState[sanPham.type]<=0 && sanPham.count ===-1){
                return {...state}
            }
            cloneState = {
                ...cloneState,
                [sanPham.type]: cloneState[sanPham.type]+=sanPham.count
            }
            state.burger ={...cloneState}
            return {...state}
        }
        case "SO_LUONG_SAN_PHAM_INPUT": {
           
            let cloneState = {...state.burger}
            let sanPham = {...action.burger}
            if (sanPham.value<0) {
                sanPham.value=0
            }
           
            cloneState = {
                ...cloneState,
                [sanPham.type]: sanPham.value
            }
            state.burger ={...cloneState}
            return {...state}
        }
        default: return {...state}
    }
}