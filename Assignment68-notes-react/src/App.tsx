// import './App.css'
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Notes } from "./pages/Notes";
import { useEffect, useState } from "react";
import { NoteForm } from "./components/NoteForm";

function App() {
  const [notes, setNotes] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    fetch("http://localhost:3000/meetingNotes/")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  const createButtonHandler = (openValue: boolean) => {
    setOpen(openValue);
  };

  const addNotes = (newNotes: any, id: string) => {
    if (id !== "") {
      const updatedNotes = notes.map((note) => {
        if (note._id === id) {
          return newNotes;
        }
        return note;
      });
      setNotes(updatedNotes);
      return;
    }
    setNotes([...notes, newNotes]);
  };

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Notes Application
              </Typography>
              <Button
                color="inherit"
                sx={{ bgcolor: "red" }}
                onClick={() => createButtonHandler(true)}
              >
                Create Note
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Notes meetingNote={notes} addNote={addNotes}></Notes>
        {open && (
          <NoteForm
            note={null}
            buttonHandler={createButtonHandler}
            openNote={open}
            addNote={addNotes}
          />
        )}
      </Container>
    </>
  );
}

export default App;
