import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  userInfo:{
        "name": "",
        "email": "",
        "phone": "",
        "address": "",
        "city": "",
        "country": "",
        "zipCode": "",
        "payingWithCash": false,
        "itemsOrdered": {}
    }
  
}

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            switch (action.payload.key) {
                case 'name':
                  state.userInfo.name = action.payload.value
                  break;
                  case 'email':
                  state.userInfo.email = action.payload.value
                  break;
                case 'phone':
                    state.userInfo.phone = action.payload.value
                  break;
                  case 'address':
                  state.userInfo.address = action.payload.value
                  break;
                  case 'city':
                    state.userInfo.city = action.payload.value
                  break;
                  case 'country':
                  state.userInfo.country = action.payload.value
                  break;
                case 'zipCode':
                    state.userInfo.zipCode = action.payload.value
                  break;
                  case 'payingWithCash':
                    state.userInfo.payingWithCash= action.payload.value
                  break;
                  case 'itemsOrdered':
                    state.userInfo.itemsOrdered= action.payload.value
                  break;
              }
        },
        resetUserInfo: (state) =>{
            state.userInfo = {
                "name": "",
                "email": "",
                "phone": "",
                "address": "",
                "city": "",
                "country": "",
                "zipCode": "",
                "payingWithCash": false,
                "itemsOrdered": {}
                }
        }

    }
});

export const { setUserInfo, resetUserInfo} = userInfoSlice.actions;

export const selectUserInfo= (state: any) => state.userInfo.userInfo;

export default userInfoSlice.reducer;