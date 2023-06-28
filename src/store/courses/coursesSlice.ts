import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../types";

type CourseSliceType = {
   courses: Course[]
}

const INITIAL_STATE: CourseSliceType = {
   courses: [
      {
         id: 15,
         courseName: 'PHTLS',
         courseDescription: 'Some random description',
         coursePrice: 250,
         registrationFee: 100,
         startDate: '2023-6-25',
         endDate: '2024-8-24',
         isAvailable: true
      },
      {
         id: 116,
         courseName: 'TECC',
         courseDescription: 'Another random description',
         coursePrice: 200,
         registrationFee: 100,
         startDate: '2023-10-1',
         endDate: '2023-12-1',
         isAvailable: false
      }
   ]
}

const courseSlice = createSlice({
   name: 'courses',
   initialState: INITIAL_STATE,
   reducers: {}
});

export default courseSlice.reducer