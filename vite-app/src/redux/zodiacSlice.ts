import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import knowYourZodiac, { twelveZod } from "./zodiacInfo";

interface ZodiacObject {
  animal: {
    year: string;
    descr: string;
    type: string;
  };
}

const initialState: ZodiacObject = {
  animal: {
    year: "Invalid Input!",
    descr:
      "Please make sure you're entering a valid year, This webpage doesn't accept a year previous to 1924 and no more than 2031.",
    type: "",
  },
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
      };
    },
  },
});

export const { getZodiac } = zodiacSlice.actions;
export default zodiacSlice.reducer;
