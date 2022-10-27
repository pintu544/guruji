import axios from "axios";
const api_url = "http://localhost:8000";


export const signin = async (signInData) => {
    console.log(signInData);
    try {
      const response = await axios({
        method: "POST",
        url: `${api_url}/signin`,
        data: signInData
      });
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
};

export const createTodo = async(todoData) => {
    try {
        const response = await axios({
            method: "POST",
            url: `${api_url}/create-todo`,
            data: todoData
          });
          return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export const updateTodo = async(id, todoData) =>{
    try {
        const response = await axios({
          method: "PATCH",
          url: `${api_url}/update-todo/${id}`,
        //   headers: {
        //     "access-token": localStorage.getItem("token"),
        //     'accept': "application/json",
        //     "Content-Type": "application/json"
        //   },
          data: {...todoData}
        });
        return response;
      } catch (err) {
        console.log(err);
        return err;
      }
}

export const deleteTodo = async(id) =>{
    try {
        const responce = await axios({
            method:"DELETE",
            url: `${api_url}/todo/${id}`
        })
        return responce
    } catch (error) {
        console.log(error);
        return error;
    }
}

