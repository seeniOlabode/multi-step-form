import React, { useReducer, useContext } from "react";

import { FormContext } from "./context/form-context";

import "./App.css";

// Components
import FormFooter from "./components/FormFooter/FormFooter";
import PersonalInfo from "./components/Steps/PersonalInfo";
import Plan from "./components/Steps/Plan";
import AddOns from "./components/Steps/AddOns";
import FinishUp from "./components/Steps/FinishUp.js";

let queuedAction = null;

function App(props) {
  const { dispatchForm: dispatchFormContext } = useContext(FormContext);

  const [formFlow, dispatchFormFlow] = useReducer(
    (currentState, action) => {
      const state = { ...currentState };
      switch (action.type) {
        case "next":
          if (state.validForm) {
            state.step = state.step + 1;
            state.validForm = false;
            if (Array.isArray(queuedAction)) {
              queuedAction.forEach((action) => {
                dispatchFormContext(action);
              });
            } else {
              dispatchFormContext(queuedAction);
            }
          }
          break;
        case "prev":
          if (state.validForm) {
            state.step = state.step - 1;
            state.validForm = false;
          }
          break;
        case "validity":
          state.validForm = action.payload;
          break;
        default:
          console.log("provide a valid action");
      }

      return state;
    },
    {
      step: 0,
      validForm: false,
    }
  );

  function goNext() {
    dispatchFormFlow({
      type: "next",
    });
  }

  function goPrev() {
    dispatchFormFlow({
      type: "prev",
    });
  }

  function setFlowValidity(value, contextAction) {
    dispatchFormFlow({
      type: "validity",
      payload: value,
    });
    queuedAction = contextAction;
  }

  return (
    <div className="app container-spacing">
      {
        [
          <PersonalInfo
            formFlow={formFlow}
            setFlowValidity={setFlowValidity}
          />,
          <Plan formFlow={formFlow} setFlowValidity={setFlowValidity} />,
          <AddOns formFlow={formFlow} setFlowValidity={setFlowValidity} />,
          <FinishUp formFlow={formFlow} setFlowValidity={setFlowValidity} />,
        ][formFlow?.step]
      }
      <FormFooter formFlow={formFlow} goNext={goNext} goPrev={goPrev} />
    </div>
  );
}

export default App;
