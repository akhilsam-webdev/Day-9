import { useState } from "react";
import axios from "axios";

const App = () => {
  const [note, setNote] = useState([
    
  ]);

  axios.get("http://localhost:3000/api/note")
  .then((res) => {
    console.log(res.data.note);
    setNote(res.data.note)

  });

  return (
    <div className="app">
      {note.map((item,idx) => (
        <div className="note" key={idx}>
          <h1>{item.titel}</h1>
          <p>{item.diss}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
