const initailState = {
    loading: false,
    cartItems: []
}

export const rootReducer = (state=initailState, action: { type: string }) => {
    switch (action.type) {
        
        default:
            return state;
    }
}