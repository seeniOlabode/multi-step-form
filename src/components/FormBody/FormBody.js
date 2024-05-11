// Styles
import "./FormBody.css";

export default function FormBody({ headerText, bodyText, children }) {
  return (
    <form className="form-body">
      <header className="form-body__header">
        <h1 className="heading-1">{headerText}</h1>
        <p className="body">{bodyText}</p>
      </header>
      <div className="form-body__fields">{children}</div>
    </form>
  );
}
