import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
type actionItem = {
  item: string;
};
type Props = {
  note: {
    id: number;
    title: string;
    content: string;
    actionItems: actionItem[];
  };
};

export const Note = (props: Props) => {
  const NoteClickHandler = () => {
    console.log("expand");
  };

  const countWords = (str: string) => {
    return str.split(" ").length;
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
    >
      <Typography variant="h5">{props.note.title}</Typography>
      <Typography variant="body1">
        {countWords(props.note.content) > 10
          ? props.note.content.substring(1, 11) + "..."
          : props.note.content}
      </Typography>
      <List>
        {props.note.actionItems.map((actionItem: actionItem) => {
          return (
            <ListItem>
              <ListItemText primary={actionItem.item} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
