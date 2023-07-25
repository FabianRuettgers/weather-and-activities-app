import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(activity) {
    setActivities([...activities, activity]);
  }
  console.log(activities);
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
