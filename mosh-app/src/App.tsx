import { useState } from "react";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const lists = ["No", "Lake", "Tahe"];

  const handleSelected = (list: string) => {
    console.log(list);
  };
  return (
    <div>
      //props
      <ListGroup lists={lists} heading="Cities" onSelectItem={handleSelected} />
      //more complex so therefore reactnode instead of a string
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}></Alert>}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
