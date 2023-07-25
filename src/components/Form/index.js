import { uid } from "uid";
import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      id: uid(),
      name: event.target.elements.activity.value,
      isForGoodWeather: event.target.elements.weather.checked,
    };
    onAddActivity(data);
    event.target.reset();
    event.target.elements.activity.focus();
  }
  return (
    <>
      <form className="activity-form" onSubmit={handleSubmit}>
        <h2 className="activity-form__headline">Add new Activity</h2>
        <label className="activity-form__label" id="activity">
          Name:
          <input
            className="activity-form__input-text"
            type="text"
            name="activity"
            id="activity"
          />
        </label>
        <label className="activity-form__label" id="weather">
          Good-weather activity:
          <input
            className="activity-form__input-checkbox"
            type="checkbox"
            name="weather"
            id="weather"
          />
        </label>
        <button className="activity-form__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
