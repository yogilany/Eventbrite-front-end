import axios from "axios";

const API_URL = "http://example.com/api/";

// CREATE
const createEvent = (eventData) => {
  return axios.post(
    `${process.env.REACT_APP_BASE_API}` + "/events/create",
    itemData
  );
};

// READ
const getItem = (itemId) => {
  return axios.get(API_URL + "items/" + itemId + "/");
};

const getAllItems = () => {
  return axios.get(API_URL + "items/");
};

// UPDATE
const updateItem = (itemId, itemData) => {
  return axios.put(API_URL + "items/" + itemId + "/", itemData);
};

// DELETE
const deleteItem = (itemId) => {
  return axios.delete(API_URL + "items/" + itemId + "/");
};

export { createItem, getItem, getAllItems, updateItem, deleteItem };
