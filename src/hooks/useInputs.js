import { useReducer } from "react";
import { isEmail, isPhone } from "../utils/validation";
function reducer(state, action) {
  if (action.type) {
    return {
      ...state,
      [action.type]: {
        value: action.value,
        isValid: action.isValid
      }
    };
  } else {
    return state;
  }
}

const getInitialState = (data) => {
  const parameters = Object.keys(data);
  let initialState = {};
  parameters.forEach((element) => {
    initialState = {
      ...initialState,
      [element]: { value: "", isValid: false, message: undefined }
    };
  });
  return initialState;
};

const checkValidation = (value, conditions) => {
  if (conditions?.email) {
    return isEmail(value);
  } else if (conditions?.phone) {
    return isPhone(value);
  } else {
    return Boolean(value);
  }
};
export const useInputs = (inputScheme) => {
  const [state, dispatch] = useReducer(reducer, getInitialState(inputScheme));

  function onChangeText(name, value) {
    const isRequired = Boolean(inputScheme[name].validate.isRequired);
    let isValid = true;
    if (isRequired) {
      isValid = checkValidation(value, inputScheme[name].validate);
    }
    dispatch({
      type: name,
      value,
      isValid
    });
  }
  return {
    state,
    onChangeText
  };
};
