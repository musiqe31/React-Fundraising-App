const initialState = {
    amount:0,
    donors:0
}

const allow = (state = initialState, action) => {
    switch (action.type) {
        case "DONATE":
            return {
                ...state,
                amount: state.amount += action.payload,
                donors: state.donors+= 1
            }
        default:
            return state;
    }
}

export default allow;