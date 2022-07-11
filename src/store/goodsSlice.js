import { createSlice } from '@reduxjs/toolkit';
import goodsObj from '../data/goods.json';

export const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
      goods: goodsObj,
  },
  reducers: {

  },
});

export const {} = goodsSlice.actions;
export default goodsSlice.reducer;