import { Course } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/utils";


//endponts
const BASE_URL = 'http://localhost:8000/api/v1/';
const COURSES_LIST = `${BASE_URL}course/list/`;
const ADD_COURSE = `${BASE_URL}course/`;
//end

//fetching courses from backend
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
   try {
      const response = await fetch(COURSES_LIST, {
         method: 'GET',
         headers: { 'Content-type': 'application/json' }
      });
      const coursesList = await response.json();
      return coursesList as Course[];

   } catch (error: any) {
      return error.message
   }
});


//adding a new course
export const addNewCourse = createAsyncThunk('courses/addNewCourse', async (newCourse: Course) => {
   const dataToSend = {
      course_name: newCourse.courseName,
      course_price: newCourse.coursePrice,
      registration_fee: newCourse.registrationFee,
      course_description: newCourse.courseDescription,
      start_date: formatDate(newCourse.startDate),
      end_date: formatDate(newCourse.endDate),
      is_available: newCourse.isAvailable
   }

   const response = await fetch(ADD_COURSE, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(dataToSend)
   });

   const courseData = await response.json();
   return courseData as Course;
})

