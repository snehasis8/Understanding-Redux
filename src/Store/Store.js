import { createStore } from 'redux'

const initialState = {
    count: 0,
    isToggled: false,
}

export const myStoreReducer = (state = { ...initialState }, action) => {
    console.log(action?.type)
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'DECREMEMT':
            return {
                ...state,
                count: state.count - action.payload
            }
        case 'TOGGLE':
            return {
                ...state,
                isToggled: !state.isToggled
            }

        default:
            return state;
    }
}

export const store = createStore(myStoreReducer, initialState)
