import { Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';

import { Toaster } from 'react-hot-toast';

import { NoteContextProvider } from './context/notesContext';

const App = () => {
 
  return (
    <main id="app">
      <NoteContextProvider>
      <Routes>
        <Route path="/" element={<Notes/>} />
        <Route path="/create-note" element={<CreateNote  />} />
        <Route path="/edit-note/:id" element={<EditNote />} />
       
      </Routes>
      </NoteContextProvider>
      <Toaster />
    </main>
  );
};

export default App;
