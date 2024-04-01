import { Note } from "../components/Note";
import { Box, Paper, Typography } from "@mui/material";

const NotesList = (props: any) => {
  return (
    <div>
      {props.meetingNote.map((note: any) => {
        return (
          <Paper elevation={12} key={note.id}>
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
    <Box sx={{ p: 5 }}>
      <Typography variant="h5" sx={{ pb: 5 }}>
        Meeting Notes
      </Typography>
      <NotesList meetingNote={props.meetingNote}></NotesList>
    </Box>
  );
};
