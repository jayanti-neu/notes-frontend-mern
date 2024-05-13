import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

interface Note {
  _id: string;
  id: number;
  title: string;
  content: string;
  actionItems: ActionItem[];
}
type Props = {
  note: Note | null;
  buttonHandler: (openValue: boolean) => void;
  openNote: boolean;
  addNote: (note: any, id: string) => void;
};

interface ActionItem {
  completed: boolean;
  item: string;
}

export const NoteForm = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [actionItems, setActionItems] = useState<ActionItem[]>([]);
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    if (props.note) {
      setTitle(props.note.title);
      setContent(props.note.content);
      setActionItems(props.note.actionItems);
    }
  }, [props.note]);

  const createNote = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        title: title,
        content: content,
        actionItems: actionItems,
      }),
    };
    fetch(
      "https://notes-backend-mern.onrender.com/meetingNotes/",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        props.addNote(data, "");
      });
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleAddActionItem = () => {
    setActionItems([...actionItems, { completed: false, item: "" }]);
  };

  const handleActionItemChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedItems: ActionItem[] = [...actionItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [event.target.name]:
        event.target.type === "checkbox"
          ? (event.target as HTMLInputElement).checked
          : event.target.value,
    };
    setActionItems(updatedItems);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (props.note) {
      const updatedNote = {
        ...props.note,
        title: title,
        content: content,
        actionItems: actionItems,
      };
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedNote),
      };
      fetch(
        "https://notes-backend-mern.onrender.com/meetingNotes" + props.note._id,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (props.note) {
            props.addNote(data, props.note._id);
          }
        });
      props.buttonHandler(false);
      return;
    }
    setId(id + 1);
    createNote();
    setTitle("");
    setContent("");
    setActionItems([]);
    props.buttonHandler(false);
  };

  const handleClose = () => {
    props.buttonHandler(false);
  };

  return (
    <>
      <Dialog
        open={props.openNote}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Create note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            margin="dense"
            id="content"
            name="content"
            label="Content"
            type="text"
            fullWidth
            value={content}
            onChange={handleContentChange}
          />
          <List>
            {actionItems.map((actionItem, index) => (
              <ListItem key={index}>
                <Grid container spacing={2}>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={actionItem.completed}
                          onChange={(event) =>
                            handleActionItemChange(index, event)
                          }
                          name="completed"
                        />
                      }
                      label="Completed"
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      margin="dense"
                      id="actionItem"
                      name="item"
                      label="Action Item"
                      type="text"
                      fullWidth
                      value={actionItem.item}
                      onChange={(event) => handleActionItemChange(index, event)}
                    />
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <IconButton onClick={handleAddActionItem}>
            <AddIcon />
          </IconButton>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
