// assets
import "./FormHeader.css";
import MobileBackground from "../../assets/bg-sidebar-mobile.svg";

export default function FormHeader({ formFlow }) {
  const allSteps = [1, 2, 3, 4];
  return (
    <header
      className="form-header"
      style={{ "--background": `url(${MobileBackground})` }}
    >
      <ul className="form-nav">
        {allSteps.map((step) => {
          return (
            <li
              className={`form-nav__step ${
                (formFlow.step + 1 === step ||
                  (step === 4 && formFlow.step === 4)) &&
                "active"
              }`}
              key={step}
            >
              {step}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
