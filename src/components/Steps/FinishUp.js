import React, { useContext } from "react";

import FormBody from "../FormBody/FormBody";

import { FormContext } from "../../context/form-context";

// Style
import "./FinishUp.css";

// Utils
import { convertSchemeToText } from "../../utils";

export default function FinishUp(props) {
  const { FormState: formContext } = useContext(FormContext);

  const schemeData = convertSchemeToText(formContext.scheme);

  return (
    <FormBody
      headerText="Finishing up"
      bodyText="Double-check everything looks OK before confirming."
    >
      <div className="finish-up">
        <div className="finish-up__plan">
          <span className="plan__description">
            <span className="description__name heading-2">
              {formContext.plan.name}{" "}
              <span className="name__scheme">({schemeData.longForm})</span>
            </span>
            <button className="name__action">Change</button>
          </span>
          <span className="plan__price">
            ${formContext.plan.price[`per${schemeData.name}`]}/
            {schemeData.shortForm}
          </span>
        </div>
        <ul className="finish-up__add-ons">
          {Object.keys(formContext.addOns).map((keyName) => {
            return formContext.addOns[keyName].value ? (
              <li className="add-on" key={keyName}>
                <span className="add-on__name">{keyName}</span>
                <span className="add-on__price">
                  +${formContext.addOns[keyName][`per${schemeData.name}`]}/
                  {schemeData.shortForm}
                </span>
              </li>
            ) : (
              ""
            );
          })}
        </ul>
      </div>

      <div className="finish-up__total">
        <span className="total__text">Total (per month)</span>
        <span className="total__price">+$12/mo</span>
      </div>
    </FormBody>
  );
}
