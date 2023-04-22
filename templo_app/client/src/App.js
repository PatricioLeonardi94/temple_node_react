import ListHeader from "./components/ListHeader";
import { useEffect, useState } from "react";

const App = () => {
  const id = "af3ff054-7bd5-4f02-a5f6-9add1be2d47b";
  const [student, setStudent] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/students/${id}`);
      const json = await response.json();
      setStudent(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getData, []);

  console.log(student);

  return (
    <div className="app">
      <ListHeader listName={"Holiday Tick List"} />
    </div>
  );
};

export default App;
