import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import Weather from "./components/Weather";

function App() {
  const [weather, setWeather] = useState(true);
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadWeather();
  }, [activities]);

  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }

  function handleDeleteActivity(idNumber) {
    const updatedActivities = activities.filter((activity) => {
      return activity.id !== idNumber;
    });
    setActivities(updatedActivities);
  }

  function filterActivites(activities) {
    setActivities(
      activities.filter(
        (activity) => activity.isForGoodWeather === weather.isGoodWeather
      )
    );
  }
  filterActivites(activities);

  return (
    <>
      <h1>Weather and activities App</h1>
      <Weather weather={weather} />
      <List
        activities={activities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
