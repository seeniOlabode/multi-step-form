import React, { useContext, useState } from "react";
import { FormContext } from "../../context/form-context";

// Components
import FormBody from "../FormBody/FormBody";
import ToggleOptions from "../shared/ToggleOptions";

const AddOnOptions = {
  "Online service": {
    description: "Access to multiplayer games",
    value: true,
    perYear: 10,
    perMonth: 1,
  },
  "Larger storage": {
    description: "Access to multiplayer games",
    value: true,
    perYear: 20,
    perMonth: 2,
  },
  "Customizable profile": {
    description: "Access to multiplayer games",
    value: false,
    perYear: 20,
    perMonth: 2,
  },
};

let validityStore = null;

export default function AddOns({ setFlowValidity }) {
  const { FormState: formContext } = useContext(FormContext);
  const [addOnForm, setAddOnForm] = useState(formContext.addOns);

  const updateValidity = () => {
    validityStore && clearTimeout(validityStore);
    setTimeout(() => {
      setFlowValidity(true, {
        type: "addOns",
        payload: addOnForm,
      });
    }, 500);
  };

  const handleAddOnChange = (event, keyName) => {
    const newValue = { ...addOnForm };
    newValue[keyName].value = event.target.checked;
    setAddOnForm(newValue);
    updateValidity();
  };

  return (
    <FormBody
      headerText="Pick add-ons"
      bodyText="Add-ons help enhance your gaming experience."
    >
      <ToggleOptions options={addOnForm} onChange={handleAddOnChange} />
    </FormBody>
  );
}
