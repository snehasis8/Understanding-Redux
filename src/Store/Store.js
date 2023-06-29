import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    isToggled: false,
}


const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state, action) {
            console.log(action)
            state.count = state.count + action.payload
        },
        decrement(state, action) {
            state.count = state.count - action.payload
        },
        toggle(state) {
            state.isToggled = !state.isToggled
        }
    },
    extraReducers: (builder) => {  // here basically I am listing to the other slilce of action and act on taht 
        builder.addCase(authSlice.actions.logOut, (state, __actions) => {
            state.count = 0;
            state.isToggled = true
        })
    }
})

const authInitialState = {
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'Auth',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logOut(state) {
            state.isLoggedIn = false
        }
    }
})



export const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

//---------when you have multiple reducers to combine ---------- instead of combine reducer this is the new aproach by the redux toolkit team

// export const store2 = configureStore({
//     reducer: {
//        counter: counterSlice.reducer,
//        abc : somethingSlice.reducer
//     }
// })