import axios from "axios";

export function getTodos() {
  return axios.get("https://62cd7067066bd2b69925e5e8.mockapi.io/crud");
}

export function deleteTodo(id) {
  return axios({
    url: `https://62cd7067066bd2b69925e5e8.mockapi.io/crud/${id}`,
    method: "DELETE"
  });
}

export function addTodo({ title, status }) {
  // title, status
  return axios({
    url: `https://62cd7067066bd2b69925e5e8.mockapi.io/crud/`,
    method: "POST",
    data: {
      title,
      status
    }
  });
}

export function toggleTodoStatus({ id, newStatus }) {
  return axios({
    url: `https://62cd7067066bd2b69925e5e8.mockapi.io/crud/${id}`,
    method: "PATCH",

    data: {
      status: newStatus
    }
  });
}

// WRITE a GET TODO, and display elements
// use a loading indicator
// use an error indicator
// use your own json server
