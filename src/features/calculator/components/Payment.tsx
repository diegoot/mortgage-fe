import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { reset } from "../store";

const Payment = () => {
  const state = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const handleNewCalculation = () => {
    dispatch(reset());
  };

  return (
    <>
      <Typography variant="h4">{state.payment}</Typography>
      <Button variant="contained" onClick={handleNewCalculation}>
        New calculation
      </Button>
    </>
  );
};

export default Payment;
