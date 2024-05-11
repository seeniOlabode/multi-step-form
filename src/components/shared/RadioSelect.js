// Styles
import "./RadioSelect.css";

const scheme = "/yr";

export default function RadioSelect({
  options,
  name,
  keyName,
  selectedValue,
  onChange,
}) {
  return (
    <div className="radio-select">
      {options.map((option, index) => (
        <label className="radio-select__option" key={option[keyName]}>
          <span
            className="option__icon"
            style={{ background: `var(--${option.color})` }}
          >
            <img
              src={require(`/src/assets/icons/${option.name.toLowerCase()}.svg`)}
              alt="plan-icon"
            />
          </span>
          <span className="option__details">
            <span className="details__name heading-2">{option.name}</span>
            <span className="details__price body">
              {option.price.perYear}
              {scheme}
            </span>
            <span className="details__promo sub-body">{option.promo}</span>
          </span>
          <input
            type="radio"
            id={option[keyName]}
            name={name}
            value={index}
            checked={selectedValue === index}
            onChange={onChange}
          />
          <span className="option__highlighter"></span>
        </label>
      ))}
    </div>
  );
}
