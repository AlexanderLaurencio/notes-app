import Notes from "./components/Notes"
import { addNote } from "./services/IndexedDB"

// addNote({title: "Learn JavaScript", description: "Learn Fetch API in JavaScript"});

function App() {
  return (
    <>
      <Notes />
    </>
  )
}

export default App
