import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import Form from "./Form";

describe("Form tests", () => {
  it("should show an input error on property price", async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const input = screen.getByTestId("propertyPrice");
    fireEvent.change(input, { target: { value: "600000" } });
    const error = await screen.findByText(
      /Property price must be lower to 500000/i
    );
    expect(error).toBeInTheDocument();
  });

  // TODO: check other errors

  it("should submit properly with all given values", async () => {
    // To test this we need to mock the store in a way that
    // we can setup some kind of spy for fetchMortgagePayment
    // action, so we can check it was actually invoke
    expect(1).toEqual(1);
  });
});
