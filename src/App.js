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
  const [newActivities, setNewActivities] = useLocalStorageState(
    "filteredActivity",
    {
      defaultValue: [],
    }
  );

  useEffect(() => {
    const interval = setInterval(loadWeather, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    filterActivities(activities);
  }, [activities, weather]);

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

  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }

  function handleDeleteActivity(idNumber) {
    const updatedActivities = activities.filter((activity) => {
      return activity.id !== idNumber;
    });
    setActivities(updatedActivities);
  }

  function filterActivities(activities) {
    setNewActivities(
      activities.filter(
        (activity) => activity.isForGoodWeather === weather.isGoodWeather
      )
    );
  }

  return (
    <div className={weather.isGoodWeather ? `weather--good` : `weather--bad`}>
      <Weather weather={weather} />
      <List
        activities={newActivities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
