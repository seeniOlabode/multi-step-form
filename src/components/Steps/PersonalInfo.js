import React, { useContext, useEffect, useState } from "react";

// Components
import FormBody from "../FormBody/FormBody";
import TextForm from "../shared/TextForm";
import { FormContext } from "../../context/form-context";

let validityStore = null;

const validateName = (name) => name.trim().length >= 3;
const validateEmail = (email) => email.trim() !== "" && email.includes("@");
const validatePhone = (phone) =>
  typeof Number(phone.trim().length >= 8) === "number";

export default function PersonalInfo({ setFlowValidity }) {
  const { FormState: formContext } = useContext(FormContext);
  const [personalInfoForm, setPersonalInfoForm] = useState(
    formContext.personalInfo
  );

  const [formValid, setFormValid] = useState({
    name: validateName(personalInfoForm.name),
    email: validateEmail(personalInfoForm.email),
    phone: validatePhone(personalInfoForm.phone),
  });

  const updateValidity = () => {
    validityStore && clearTimeout(validityStore);
    validityStore = setTimeout(() => {
      setFlowValidity(formValid.name && formValid.email && formValid.phone, {
        type: "personalInfo",
        payload: personalInfoForm,
      });
    }, 500);
  };

  const handleNameChange = (event) => {
    setPersonalInfoForm({ ...personalInfoForm, name: event.target.value });
    setFormValid({ ...formValid, name: validateName(event.target.value) });
  };

  const handleEmailChange = (event) => {
    setPersonalInfoForm({ ...personalInfoForm, email: event.target.value });
    setFormValid({ ...formValid, email: validateEmail(event.target.value) });
  };

  const handlePhoneChange = (event) => {
    setPersonalInfoForm({ ...personalInfoForm, phone: event.target.value });
    setFormValid({
      ...formValid,
      phone: validatePhone(event.target.value),
    });
  };

  useEffect(() => {
    updateValidity();
  }, [formValid]);

  return (
    <FormBody
      headerText="Personal Info"
      bodyText="Please provide your name, email address, and phone number."
    >
      <TextForm
        label="Name"
        placeholder="Stephen King"
        value={personalInfoForm.name}
        onChange={handleNameChange}
        type="text"
      />
      <TextForm
        label="Email"
        placeholder="steph@gmail.com"
        value={personalInfoForm.email}
        onChange={handleEmailChange}
        type="email"
      />
      <TextForm
        label="Phone Number"
        placeholder="+234 810 332 3332"
        value={personalInfoForm.phone}
        onChange={handlePhoneChange}
        type="tel"
      />
    </FormBody>
  );
}
