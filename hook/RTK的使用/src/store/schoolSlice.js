// 使用RTK构造store
import {createSlice} from "@reduxjs/toolkit";

// 创建学校的slice
const schoolSlice = createSlice({
  name: 'school',
  
  initialState:{
    name:'花果山',
    address: '河南'
  },
  reducers:{
    setName(state, action){
      state.name = action.payload;
    },
    setAddress(state, action){
      state.address = action.payload;
    }
  }
  
})

// 导出action的创建器
export const {setName, setAddress} = schoolSlice.actions;
export const {reducer: schoolReducer} = schoolSlice;