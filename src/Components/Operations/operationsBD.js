// import axios from "axios";
import { Loader } from "../../redux/slice/Loader";
import { addFavorite } from "../../redux/slice/Favorite";
// import { errorSet } from "../redux/actions/errorAction";
// import { addTask, deleteTask, setTask } from "../redux/actions/tasksAction";
// import { inputClear } from "../redux/actions/formAction";

import { db } from "../../config";

const DB = ["filmsFavorite"];

// export const readDataFromFireStone = (dbName = favoriteDB) => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     const result = await db.collection(dbName).get();
//     const formatResult = result.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//     dispatch(setTask(formatResult));
//   } catch (error) {
//     dispatch(errorSet("Something went wrong, try later"));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

export const writeDataToFireStone = (number, data) => async (dispatch) => {
  try {
    dispatch(Loader(true));
    await db.collection(DB[number]).add(data);
    dispatch(addFavorite(data));
  } catch (error) {
  } finally {
    dispatch(Loader(false));
  }
};

// export const deleteDataFormFireStore = (number, docId) => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     await db.collection(DB[number]).doc(docId).delete();
//     dispatch(deleteTask(docId));
//   } catch (error) {
//     dispatch(errorSet("Something went wrong, try later"));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

// import axios from "axios";
// import { loaderOff, loaderOn } from "../redux/actions/loaderAction";
// import { errorReset, errorSet } from "../redux/actions/errorAction";
// import { addTask, deleteTask, editTask, setTask } from "../redux/actions/tasksAction";
// import { inputClear } from "../redux/actions/formAction";

// const options = {
//   header: { "Content-Type": "application/json" },
// };

// export const getTaskOperation = () => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     const result = await axios.get("http://localhost:5000/tasks");
//     dispatch(setTask(result.data));
//     dispatch(inputClear());
//   } catch (error) {
//     dispatch(errorSet("Something went wrong, try later"));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

// export const postTaskOperation = (task) => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     const result = await axios.post("http://localhost:5000/tasks", task, options);
//     dispatch(addTask(result.data));
//     dispatch(inputClear());

//     // console.log('post',result.data);
//   } catch (error) {
//     dispatch(errorSet("Something went wrong, try later"));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

// export const deleteTaskOperation = (id) => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     await axios.delete(`http://localhost:5000/tasks/${id}`);
//     dispatch(deleteTask(id));
//     // console.log(result);
//   } catch (error) {
//     dispatch(errorSet("Something went wrong, try later"));
//   } finally {
//     dispatch(loaderOff());
//   }
// };
