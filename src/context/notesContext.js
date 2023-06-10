import { createContext, useState,useEffect} from "react";

export const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('note')) || []);
  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {children}
    </NoteContext.Provider>
  );
};
