import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useState, useEffect, useContext } from "react";
import useCreateDate from "../components/useCreateDate";
import { toast } from "react-hot-toast";
import { NoteContext } from "../context/notesContext";

const EditNote = () => {
  const{notes,setNotes}= useContext(NoteContext)
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();

  useEffect(() => {
    const note = notes.find((item) => item.id === id);
    if (note) {
      setTitle(note.title);
      setDetails(note.details);
    }
  }, [notes, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { id, title, details, date };
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          return newNote;
        }
        return item;
      });

      setNotes(newNotes);
      toast.success('note updated')
    }
    navigate('/');
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      const newNotes = notes.filter(item => item.id !== id);
      setNotes(newNotes);
      toast.error("Note deleted");
      navigate('/');
    }
  };
  

  return (
    <section>
      <header className="create-note__header">
        <Link to={'/'}><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Update</button>
        <button className="btn danger" onClick={handleDelete}><RiDeleteBin6Fill /></button>
      </header>
      <form className="create-note__form">
        <input
          type="text"
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Notes details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
