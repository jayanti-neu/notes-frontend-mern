import { Note } from "../components/Note";
import { Paper, Typography } from "@mui/material";

const NotesList = (props: any) => {
  return (
    <div>
      {props.meetingNote.map((note: any) => {
        return (
          <Paper elevation={12}>
            <Note note={note}></Note>
          </Paper>
        );
      })}
    </div>
  );
};

type Props = {
  meetingNote: any;
};

export const Notes = (props: Props) => {
  return (
    <div>
      <h1>Notes</h1>
      <Typography variant="h5">Meeting Notes</Typography>
      <NotesList meetingNote={props.meetingNote}></NotesList>
    </div>
  );
};
