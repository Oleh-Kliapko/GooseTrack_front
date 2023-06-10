import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as apiOperations from 'helpers/api/tasksRequests';

export const fetchMonthTasks = createAsyncThunk(
  'tasks/fetchMonthTasks',
  async (monthNumber, thunkAPI) => {
    try {
      const data = await apiOperations.getTasksForOneMonth(monthNumber);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);







export const addNewTask = createAsyncThunk(
  'tasks/addNewTask',
  async (task, thunkAPI) => {
    try {
      apiOperations.updateTask(task)
      return task;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const saveEditedTask = createAsyncThunk(
  'tasks/saveEditedTask',
  async (task, thunkAPI) => {
    try {
      
      return task;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);



export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks');
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.post('/tasks', task);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (updatedTask, thunkAPI) => {
    try {
      const {_id, ...data } = updatedTask;
      const res = await axios.patch(`/tasks/${_id}`, data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const setChoosedDate = createAsyncThunk(
  'tasks/setChoosedDate',
  async (date, thunkAPI) => {
    const monthNumber = parseInt(date.slice(5, 7)); 
    try {
      fetchMonthTasks(monthNumber);
      return date;
    } catch (e) {
      return date;
    }
  },
);

export const setCurrentTask = ''