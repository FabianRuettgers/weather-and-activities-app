import "./List.css";
export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <section>
      {}
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h2>
      <ul>
        {activities.map((activity) => (
          <li>
            {activity.name}
            <button onClick={() => onDeleteActivity?.(activity.id)}>❌</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
