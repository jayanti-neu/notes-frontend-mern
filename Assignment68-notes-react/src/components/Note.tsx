import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Button,
} from "@mui/material";
import React from "react";
import { NoteForm } from "./NoteForm";

type actionItem = {
  item: string;
  completed: boolean;
};
type Props = {
  note: {
    _id: string;
    id: number;
    title: string;
    content: string;
    actionItems: actionItem[];
  };
  addNotes: (note: any, id: string) => void;
};

export const Note = (props: Props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const NoteClickHandler = () => {
    setExpanded(!expanded);
  };

  const handleEditNoteClose = () => {
    setOpen(false);
  };

  const countWords = (str: string) => {
    let spaceCount: number = 0;
    let i;
    for (i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        spaceCount++;
        if (spaceCount > 9) {
          return i;
        }
      }
    }
    return i;
  };

  const endString = () => {
    if (expanded) {
      return props.note.content.substring(countWords(props.note.content));
    } else {
      return countWords(props.note.content) < props.note.content.length
        ? "..."
        : "";
    }
  };

  const editNoteBtnHandler = (note: any) => {
    // fetch("http://localhost:3000/meetingNotes/" + note._id, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(note),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);

    //     props.addNotes(data, data._id);
    //   });
    setOpen(true);
  };

  return (
    <Box
      onClick={NoteClickHandler}
      sx={{
        padding: "1rem",
        borderRadius: "1rem",
        width: "100%",
        marginBottom: "1rem",
      }}
      key={props.note._id}
    >
      <Typography variant="h5">{props.note.title}</Typography>
      <Typography variant="body1">
        {props.note.content.substring(0, countWords(props.note.content)) +
          endString()}
      </Typography>
      <Collapse in={expanded}>
        <List>
          {props.note.actionItems.map((actionItem: actionItem) => {
            return (
              <ListItem key={actionItem.item}>
                <ListItemText primary={actionItem.item} />
              </ListItem>
            );
          })}
        </List>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editNoteBtnHandler(props.note)}
        >
          Edit Note
        </Button>
      </Collapse>
      {open && (
        <NoteForm
          note={props.note}
          buttonHandler={handleEditNoteClose}
          openNote={open}
          addNote={props.addNotes}
        />
      )}
    </Box>
  );
};
