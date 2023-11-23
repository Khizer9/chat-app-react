import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: 'CONTACT', // can be CONTACT, STARRED, SHARED
    }
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // Toggle Sidebar
        toggleSiderbar(state, action) {
            state.sidebar.open = !state.sidebar.open
        },
        updateSiderbarType(state, action) {
            state.sidebar.type = action.payload.type
        },
    }
})

export default slice.reducer;


export function ToggleSidebar (){
    return async () => {
        dispatch(slice.actions.toggleSiderbar())
    }
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSiderbarType({
            type,
        }))
    }
}