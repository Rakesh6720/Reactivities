import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Header } from "semantic-ui-react";
import { Activity } from "../models/activity";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities" />
      <Container>
        <ActivityDashboard activities={activities} />
      </Container>
    </div>
  );
}

export default App;
