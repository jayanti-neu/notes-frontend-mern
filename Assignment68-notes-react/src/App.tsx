// import './App.css'
import { Box, Container, CssBaseline } from "@mui/material";
import { Notes } from "./pages/Notes";
import { useEffect, useState } from "react";
// type MeetingNote = {
//   id: number;
//   title: string;
//   content: string;
// }[];

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    console.log("App component mounted");
    fetch("http://localhost:3000/meetingNotes/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid red",
        }}
      >
        <Notes meetingNote={notes}></Notes>
      </Container>
    </>
  );
}

export default App;
