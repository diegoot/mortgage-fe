import { Form as RFFForm } from "react-final-form";
import { Select, TextField } from "mui-rff";
import { Button } from "@mui/material";
import {
  AMORTIZATION_PERIODS,
  MONTHLY_PAYMENT_SCHEDULE,
  PAYMENTS_SCHEDULE,
} from "../constants";
import { useAppDispatch } from "../../../store/hooks";
import { fetchMortgagePayment } from "../store";
import { IMortgageParameters } from "../types";

const Form = () => {
  const dispatch = useAppDispatch();

  async function onSubmit(values: IMortgageParameters) {
    dispatch(fetchMortgagePayment(values));
  }

  async function validate(values: IMortgageParameters) {
    const maxPropertyPrice = 500000;
    const minDownPayment = 5;
    const maxDownPayment = 100;
    const minAnnualInterestRate = 0;
    const maxAnnualInterestRate = 100;
    const maxAmortizationPeriod = 30;
    const minDownPaymentForMaxAmortizationPeriod = 20;

    if (!values.propertyPrice) {
      return { propertyPrice: "Property price is mandatory" };
    }
    if (values.propertyPrice >= maxPropertyPrice) {
      return {
        propertyPrice: `Property price must be lower to ${maxPropertyPrice}`,
      };
    }
    if (!values.downPayment) {
      return { downPayment: "Down payment % is mandatory" };
    }
    if (
      values.downPayment < minDownPayment ||
      values.downPayment > maxDownPayment
    ) {
      return {
        downPayment: `Down payment % must be a value between ${minDownPayment} and ${maxDownPayment}`,
      };
    }
    if (!values.annualInterestRate) {
      return { annualInterestRate: "Annual interest rate % is mandatory" };
    }
    if (
      values.annualInterestRate < minAnnualInterestRate ||
      values.annualInterestRate > maxAnnualInterestRate
    ) {
      return {
        annualInterestRate: `Annual interest rate % must be a value between ${minAnnualInterestRate} and ${maxAnnualInterestRate}`,
      };
    }
    if (!values.amortizationPeriod) {
      return { amortizationPeriod: "Amortization period is mandatory" };
    }
    if (!values.paymentSchedule) {
      return { paymentSchedule: "Payment schedule is mandatory" };
    }
    if (
      +values.amortizationPeriod === maxAmortizationPeriod &&
      values.downPayment < minDownPaymentForMaxAmortizationPeriod
    ) {
      return {
        downPayment: `Down payment must be at least ${minDownPaymentForMaxAmortizationPeriod} when amortization period is ${maxAmortizationPeriod}`,
      };
    }
    return;
  }

  return (
    <RFFForm
      onSubmit={onSubmit}
      initialValues={{
        amortizationPeriod: 5,
        paymentSchedule: MONTHLY_PAYMENT_SCHEDULE,
      }}
      validate={validate}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} noValidate data-testid="mortgage-form">
          <TextField
            label="Property price"
            name="propertyPrice"
            type="number"
            required={true}
            inputProps={{ "data-testid": "propertyPrice" }}
          />
          <TextField
            label="Down payment %"
            name="downPayment"
            type="number"
            required={true}
            sx={{ marginTop: 2 }}
            inputProps={{ "data-testid": "downPayment" }}
          />
          <TextField
            label="Annual interest rate %"
            name="annualInterestRate"
            type="number"
            required={true}
            sx={{ marginTop: 2, marginBottom: 2 }}
            inputProps={{ "data-testid": "annualInterestRate" }}
          />
          <Select
            label="Amortization period"
            name="amortizationPeriod"
            required={true}
            data={AMORTIZATION_PERIODS}
            sx={{ marginBottom: 2 }}
          />
          <Select
            label="Payment schedule"
            name="paymentSchedule"
            required={true}
            data={PAYMENTS_SCHEDULE}
          />
          <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
            Calculate
          </Button>
        </form>
      )}
    />
  );
};

export default Form;
