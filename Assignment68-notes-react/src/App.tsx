// import './App.css'
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Notes } from "./pages/Notes";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

// type MeetingNote = {
//   id: number;
//   title: string;
//   content: string;
// }[];

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/meetingNotes/")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  const createButtonHandler = () => {
    console.log("Create Button Clicked");
  };

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
        <Box sx={{ flexGrow: 1, width: "100%", borderRadius: "20%" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Notes Application
              </Typography>
              <Button
                color="inherit"
                sx={{ bgcolor: "red" }}
                onClick={createButtonHandler}
              >
                Create Note
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Notes meetingNote={notes}></Notes>
      </Container>
    </>
  );
}

export default App;
