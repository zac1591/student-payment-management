import { Course } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/utils";


//endponts
const BASE_URL = 'http://localhost:8000/api/v1';
const CRUD = `${BASE_URL}/courses`;
//end

//fetching courses from backend
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
   try {
      const response = await fetch(`${CRUD}/`, {
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

   const response = await fetch(`${CRUD}/`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(dataToSend)
   });

   const courseData = await response.json();
   return courseData as Course;
});


//editing course
export const editCourse = createAsyncThunk('courses/editCourse', async (course: Course) => {
   const dataToSend = {
      course_name: course.courseName,
      course_price: course.coursePrice,
      registration_fee: course.registrationFee,
      course_description: course.courseDescription,
      start_date: formatDate(course.startDate),
      end_date: formatDate(course.endDate),
      is_available: course.isAvailable
   }

   const response = await fetch(`${CRUD}/${course.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(dataToSend)
   })

   if (!response.ok) {
      console.log(response.status)
      throw new Error('Algo salió mal')
   }

   const data = await response.json();
   return data;
});


//delete course
export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id: number) => {
   await fetch(`${CRUD}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id)
   });

   return id;
});

