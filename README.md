# About the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other tools used are:

- [React Final Form](https://final-form.org/react): for the form implementation
- [Material UI](https://mui.com/): this helps with the UI
- [mui-rff](https://www.npmjs.com/package/mui-rff): this helps to use MUI inputs with RFF
- [Redux Toolkit](https://redux-toolkit.js.org/): as a state manager

NOTA: for this simple app we do not need a state manager but I think it is simpler this way for example to share information between different calculator components, that is why I added.

## How to work locally

- git clone https://github.com/diegoot/mortgage-fe.git
- cd mortgage-fe
- yarn install
- yarn start

You can now access the app at http://localhost:3000

**IMPORTANT:** make sure to have the backend running at port 9000, thiss version of the API has it hardcoded.

If you want to run tests then `yarn test`

## Possible improvements

- In the results page:
  - show a table with all the payments the user will have to do
  - show the total amount and how much of it is because of interests and insurance
- Implement form validations with [Yup](https://www.npmjs.com/)
- Improve out of the box dark mode contrasts (buttons look a bit weird to me)
- Improve [limitations](https://github.com/mui/material-ui/issues/36264) for input type number, this prevented me to provided the desired user experience that I was looking for
- Improve tests by properly mocking redux store
- Add environment file to manage endpoints in different environments
