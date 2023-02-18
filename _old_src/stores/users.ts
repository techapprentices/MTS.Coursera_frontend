import { defineStore } from "pinia";
//import axios from "axios";
import { axiosNoAuth, axiosAuth } from '../base';
import TokenStorage from '../token';



export interface IUserItem {
  id: String;
  login: String;
  email: String;
  nickname: String;
  password: String;
}

export const useCoursesStore = defineStore("users", {
  state: () => ({
    users: [] as IUserItem[],
    showUserEmailAlreadyExistsAlert: false,
  }),
  actions: {
    registerUser() {
      axiosAuth.post("/rest/v1/users")
      .then(response => {
        var registeredUser = response.data
        console.log("user was registered:");
        console.log(registeredUser)      
      })
      .catch(error => {
        alert(error)
        console.error("There was an error!", error)
      });      
    }
  },
});