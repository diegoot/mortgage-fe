import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMortgageParameters } from "../types";

interface CalculatorState {
  loading: boolean;
  payment?: number;
}

const initialState: CalculatorState = {
  loading: false,
};

export const fetchMortgagePayment = createAsyncThunk<
  number,
  IMortgageParameters
>("calculator/fetchMortgagePayment", async (queryParams) => {
  const response = await fetch(
    `http://localhost:9000/mortgage/payment?propertyPrice=${queryParams.propertyPrice}&downPayment=${queryParams.downPayment}&annualInterestRate=${queryParams.annualInterestRate}&amortizationPeriod=${queryParams.amortizationPeriod}&paymentSchedule=${queryParams.paymentSchedule}`
  );
  const data = await response.json();
  return +data.mortgagePayment;
});

const gameSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMortgagePayment.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchMortgagePayment.fulfilled, (state, action) => {
      state.payment = action.payload;
      state.loading = false;
    });
  },
});

export const { reset } = gameSlice.actions;

export default gameSlice.reducer;
