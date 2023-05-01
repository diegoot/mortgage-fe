import { useAppSelector } from "../../../store/hooks";
import Form from "./Form";
import { Box, Container, Paper, CircularProgress } from "@mui/material";
import Payment from "./Payment";

const Calculator = () => {
  const state = useAppSelector((state) => state.calculator);

  return (
    <Container component="main" maxWidth="sm">
      <Paper>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
          }}
        >
          {!state.payment && !state.loading && <Form />}
          {state.payment && <Payment />}
          {state.loading && <CircularProgress />}
        </Box>
      </Paper>
    </Container>
  );
};

export default Calculator;
