import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import knowYourZodiac, { twelveZod, zodiacs } from "./zodiacInfo";

interface ZodiacObject {
  animal: {
    year: string;
    descr: string;
    type: string;
  },
  description: {
    title: string;
    intro: string;
    description: string;
    image: string;
  }
}

const initialState: ZodiacObject = {
  animal: {
    year: "Invalid Input!",
    descr:
      "Please make sure you're entering a valid year, This webpage doesn't accept a year previous to 1924 and no more than 2031.",
    type: "",
  },
  description: {
    title: '',
    intro: '',
    description: '',
    image: ''
  }
};

export const zodiacSlice = createSlice({
  name: "zodiac",
  initialState,
  reducers: {
    getZodiac: (state, action: PayloadAction<string>) => {
      // @ts-ignore
      const zodiac = new ZodiacSign(action.payload).chinese;
      state.animal = {
        ...twelveZod[knowYourZodiac(zodiac)],
        type: zodiac,
      }
    },
    getDescription: (state, action: PayloadAction<string>) => {
      state.description = zodiacs[knowYourZodiac(action.payload)]
    },
  },
});

export const { getZodiac, getDescription } = zodiacSlice.actions;
export default zodiacSlice.reducer;
