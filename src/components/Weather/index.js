import "./Weather.css";
export default function Weather({ weather }) {
  return (
    <>
      <h1 className="app-headline">Weather and activities App</h1>
      <div className="weather-section">
        <h2 className="weather-section__emoji">{weather.condition}</h2>
        <p className="weather-section__degrees">{weather.temperature} °C</p>
      </div>
    </>
  );
}
