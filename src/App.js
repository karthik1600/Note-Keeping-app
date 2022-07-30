import { NotesList } from "./components/NotesList";
import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";
import Search from "./components/Search";
import { Header } from "./components/Header";
import './index.css';
const App = () => {
  const [notes, setNotes] = useState([]);
	useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    console.log(savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    console.log('a');
    console.log(notes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    console.log(newNote);
    setNotes([...notes, newNote]);
  }
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  }
  const [searchText, setSearchText] = useState('');  
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={`${darkmode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDark={setDarkmode} />
      <Search handleSearch={setSearchText} />
      <NotesList
        notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  );
}

export default App;
