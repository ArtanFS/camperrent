import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://65fac89d3909a9a65b1b85fa.mockapi.io/api/v1/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// api.interceptors.request.use(
//   config => {
//     const localStorageData = localStorage.getItem('persist:token');
//     if (localStorageData) {
//       const token = JSON.parse(localStorageData).token.replace(/"/g, '');

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export const getCampers = createAsyncThunk(
  'getCampers',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await api.get(`adverts?p=${page}&l=4`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const addColumn = createAsyncThunk(
//   'columns/addColumn',
//   async (newColumn, thunkAPI) => {
//     try {
//       const { data } = await api.post(`/columns`, newColumn);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const updateColumnById = createAsyncThunk(
//   'columns/updateColumnById',
//   async ({ _id, newColumnData }, thunkAPI) => {
//     try {
//       const { data } = await api.put(`/columns/${_id}`, newColumnData);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteColumn = createAsyncThunk(
//   'columns/deleteColumn',
//   async (columnId, thunkAPI) => {
//     try {
//       const { data } = await api.delete(`/columns/${columnId}`);
//       return data.id;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const getBoardById = createAsyncThunk(
//   'boards/getById',
//   async (boardId, thunkAPI) => {
//     try {
//       const { data } = await api.get(`/boards/${boardId}`);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
