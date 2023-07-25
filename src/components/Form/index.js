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
      <form onSubmit={handleSubmit}>
        <h1>Add new Activity</h1>
        <label id="activity">
          Name:
          <input type="text" name="activity" id="activity" />
        </label>
        <label id="weather">
          Good-weather activity:
          <input type="checkbox" name="weather" id="weather" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
