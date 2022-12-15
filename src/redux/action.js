import axios from "axios";
import {
  ADD_ADMIN,
  Add_USER,
  DELETE_ADMIN,
  DELETE_DESIGNATION,
  DELETE_USER,
  GET_ADMIN,
  GET_DESIGNATION,
  GET_USERS,
} from "./actionType"


const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
})

const userAdded = () => ({
  type: Add_USER,
});

const userDeleted = () => ({
  type: DELETE_USER,
});


//====================== designation ====================



const getDepartment = (data) => ({
  type: GET_DESIGNATION,
  payload: data,
})

const designationAdd = () => ({
  type: Add_USER,
});

const designationDeleted = () => ({
  type: DELETE_DESIGNATION,
});



// =========== Admin ==============


const getAdmin = (data) => ({
  type: GET_ADMIN,
  payload: data,
})

const adminAdd = () => ({
  type: ADD_ADMIN,
});

const adminDeleted = () => ({
  type: DELETE_ADMIN,
});




////// ==================== department ==========================

export const loadUsers = () => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API}`).then((res) => {
      dispatch(getUsers(res.data));
    })
      .catch((error) => console.log("error", error));
  };
};

export const addUsers = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then(() => {
        dispatch(userAdded());
      })
      .catch((error) => console.log(error));
  };
};


export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then(() => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};


//  ========================== Designation =========================


export const loadDesignation = () => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API_DESIGNATION}`).then((res) => {
      dispatch(getDepartment(res.data));
    })
      .catch((error) => console.log("error", error));
  };
};

export const addDesignation = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API_DESIGNATION}`, user)
      .then(() => {
        dispatch(designationAdd());
      })
      .catch((error) => console.log(error));
  };
};

export const deleteDesignation = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API_DESIGNATION}/${id}`)
      .then(() => {
        dispatch(designationDeleted());
        dispatch(loadDesignation());
      })
      .catch((error) => console.log(error));
  };
};



// ================= ADMIN =====================


export const loadAdmin = () => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API_ADMIN}`).then((res) => {
      dispatch(getAdmin(res.data));
    })
      .catch((error) => console.log("error", error));
  };
};

export const addAdmin = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API_ADMIN}`, user)
      .then(() => {
        dispatch(adminAdd());
        dispatch(loadAdmin());
      })
      .catch((error) => console.log(error));
  };
};

export const deleteAdmin = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API_ADMIN}/${id}`)
      .then(() => {
        dispatch(adminDeleted());
        dispatch(loadAdmin());
      })
      .catch((error) => console.log(error));
  };
};







