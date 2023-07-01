import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCourses, addNewCourse } from './thunks-courses'
import { Course } from "../../types";

type CourseSliceType = {
   courses: Course[],
   status: 'idle' | 'loading' | 'success' | 'failed',
   error: string | null | undefined
}

const INITIAL_STATE: CourseSliceType = {
   courses: [
      // {
      //    id: 15,
      //    courseName: 'PHTLS',
      //    courseDescription: 'Some random description',
      //    coursePrice: 250,
      //    registrationFee: 100,
      //    startDate: '2023-6-25',
      //    endDate: '2024-8-24',
      //    isAvailable: true
      // },
      // {
      //    id: 116,
      //    courseName: 'TECC',
      //    courseDescription: 'Another random description',
      //    coursePrice: 200,
      //    registrationFee: 100,
      //    startDate: '2023-10-1',
      //    endDate: '2023-12-1',
      //    isAvailable: false
      // }
   ],
   status: 'idle',
   error: null
}

const courseSlice = createSlice({
   name: 'courses',
   initialState: INITIAL_STATE,
   reducers: {
      // addCourse(state, action: PayloadAction<Course>) {
      //    state.courses = [...state.courses, action.payload]
      // },
      updateCourse(state, action: PayloadAction<Course>) {
         state.courses = state.courses.filter(course => course.id !== action.payload.id)
         state.courses = [...state.courses, action.payload]
      },
      deleteCourse(state, action: PayloadAction<number>) {
         state.courses = state.courses.filter(course => course.id !== action.payload)
      }
   },
   extraReducers(builder) {
      builder
         .addCase(fetchCourses.pending, state => {
            state.status = 'loading';
         })
         .addCase(fetchCourses.fulfilled, (state, action) => {
            state.status = 'success'
            state.courses = action.payload;
         })
         .addCase(fetchCourses.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         })
         .addCase(addNewCourse.fulfilled, (state, action) => {
            state.status = "success";
            state.courses.push(action.payload);
         })
         .addCase(addNewCourse.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         })
   },
});

export default courseSlice.reducer
export const { updateCourse, deleteCourse } = courseSlice.actions