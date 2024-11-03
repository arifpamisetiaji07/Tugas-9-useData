import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/iuser";

export interface IuSlice {
    users: Array<IUser>
};
interface O {
    payload: IUser  // property must be named payload
};
interface O2 {
    payload: Array<IUser>
}

const initialState = {
    users: []
};

const usersSlice = createSlice({
    name: "uSlice",
    initialState,
    reducers: {
        newUser: (state: IuSlice, input: O) => {
            state.users.push(input.payload);
        },
        initialize: (state: IuSlice, input: O2) => {
            state.users = input.payload;
        }
    },
});

export const { newUser, initialize } = usersSlice.actions;
export default usersSlice.reducer;