import { Note } from "../components/Note";
import { Box, Paper, Typography } from "@mui/material";

const NotesList = (props: any) => {
  return (
    <div>
      {props.meetingNote.map((note: any) => {
        return (
          <Paper elevation={12} key={note._id}>
            <Note note={note} addNotes={props.addNotes}></Note>
          </Paper>
        );
      })}
    </div>
  );
};

type Props = {
  meetingNote: any;
  addNote: (note: any, id: string) => void;
};

export const Notes = (props: Props) => {
  // const [notes, setNotes] = useState(props.meetingNote);

  // const addNotes = (note: any) => {
  //   setNotes([...notes, note]);
  // };

  // useEffect(() => {
  //   setNotes(props.meetingNote);
  // }, []);

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h5" sx={{ pb: 5 }}>
        Meeting Notes
      </Typography>
      <NotesList
        meetingNote={props.meetingNote}
        addNotes={props.addNote}
      ></NotesList>
    </Box>
  );
};
