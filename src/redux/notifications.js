import {createSlice} from '@reduxjs/toolkit';
export const notificationsSlice = createSlice({
    name: 'alert',
    initialState: {
        readNotifications : [],
        unreadNotifications : [],
        reloadNotifications : true,
    },
    reducers: {
        
        SetReadNotifications : (state, action) => {
            state.readNotifications = action.payload;
        },
        SetUnreadNotifications : (state, action) => {
            state.unreadNotifications = action.payload;
        },
        SetReloadNotifications : (state, action) => {
            state.reloadNotifications = action.payload;
        }
    }
})

export const {SetReadNotifications, SetUnreadNotifications , SetReloadNotifications} = notificationsSlice.actions;
export default notificationsSlice.reducer;