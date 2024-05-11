// Assets
import Check from "../../assets/icons/checkbox.svg";

import "./ToggleOptions.css";

export default function ToggleOptions({ options, onChange }) {
  return (
    <div className="toggle-options">
      {Object.keys(options).map((keyName) => (
        <label
          className="toggle-options__option"
          htmlFor={keyName}
          key={keyName}
        >
          <input
            className="option__checkbox"
            type="checkbox"
            id={keyName}
            checked={options[keyName].value}
            onChange={(e) => onChange(e, keyName)}
          />
          <span className="option__box">
            <img src={Check} alt="check" />
          </span>
          <span className="option__details">
            <span className="details__name">{keyName}</span>
            <span className="details__description">
              {options[keyName].description}
            </span>
          </span>

          <span className="details__price">+1$/mo</span>
        </label>
      ))}
    </div>
  );
}
