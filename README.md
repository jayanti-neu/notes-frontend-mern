# Notes App

This project is a simple notes application built using React.js, Material-UI, Vite and TypeScript. It allows users to view, create, edit, and manage notes along with action items.

## User Requirements

1. As a user, I should be able to see all existing notes in a list view fetched from the JSON file using XMLHttpRequest.
2. As a user, I should see all notes with the title and the truncated content in the list view. The truncated content should maximum of 10 words followed by "..." using CSS.
3. As a user, I should be able to click on a note and expand its content (use CSS transitions).
4. As a user, I should see the entire content along with title and a list of action items in the expanded view.
5. Each action should have a checkbox to toggle between open and completed states.
6. As a user, I should be able edit the content and action items in the expanded view.
7. As a user, I should be able to add a new note by clicking a create button, this should open an editable card with the note details. This need not be persisted (not required to save it on the server).
8. As a user, I should be able to add a note by entering the title, content, and the action items. The created field should be added with the date and time.

## Technical Requirements

- Use React.js features like props, state, effects.
- Utilize Material-UI for UI components.
- Fetch data from a Node.js server using the fetch API.
- Use Vite for building the project.
- All data operations should persist the data in the database through the REST APIs.

## Instructions to Run the Project

1. Clone the repository to your local machine:

```bash
git clone
```

2. Navigate to the project directory:

```bash
cd Assignment68-notes-react
```

3. Install dependencies using npm or yarn:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

Also run the backend server:

```bash
npm run dev
```

5. Open your web browser and navigate to `http://localhost:3000` to view the application.

6. Start exploring and using the features of the Notes App!

## Credits

This project was created as an assignment to learn React.js, Material-UI, and Vite, Typescript based on the provided user and technical requirements. Developed by Jayanti.
