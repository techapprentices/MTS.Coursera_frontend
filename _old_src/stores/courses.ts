import { axiosAuth } from "@/base";
import { defineStore } from "pinia";
//import axios from "axios";

export interface ICourseItem {
  id: String;
  courseTitle: string;
  //completed: boolean;
}

export const useCoursesStore = defineStore("courses", {
  state: () => ({
    courses: [] as ICourseItem[],
    showAlert: false,
  }),
  actions: {
    reloadCourses() {
      axiosAuth.get("/rest/v1/courses")
      .then(response => {
        //console.log("courses loaded");
        this.courses = response.data 
      })
      .catch(error => {
        alert(error)
        console.error("There was an error!", error)
      });
    },
    addCourse(courseTitle: string) {
      axiosAuth.post(
        "/rest/v1/courses", 
        {"courseTitle": courseTitle},
      )
      .then(response => {
        var addedCourse = response.data
        console.log("course was added:");
        console.log(addedCourse)
      })
      .catch(error => {
        alert(error)
        console.error("There was an error!", error);
      })
      .finally(() => {
        this.reloadCourses();
      });
    },    
    deleteCourse(id: String) {
      axiosAuth.delete("/rest/v1/courses/" + id)
      .then(response => {
        var deletedCourse = response.data
        console.log("course was deleted:");
        console.log(deletedCourse)
      })
      .catch(error => {
        alert(error)
        console.error("There was an error!", error);
      })
      .finally(() => {
        this.reloadCourses();
      });
    },
    inputAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 1000);
    },
  },
});