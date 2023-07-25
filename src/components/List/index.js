import "./List.css";
export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <section className="activity-section">
      <h2 className="activity-section__headline">
        {isGoodWeather
          ? `The weather is awesome!\nGo outside and:`
          : `Bad weather outside!\nHere's what you can do now:`}
      </h2>
      <ul className="activity-section__list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-section__list__list-item">
            {activity.name}
            <button
              className="activity-section__list__button"
              onClick={() => onDeleteActivity?.(activity.id)}
            >
              ✖️
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
