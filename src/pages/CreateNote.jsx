import { Link, useNavigate } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import { useContext, useState } from "react"
import { toast } from "react-hot-toast"
import {v4 as uuid} from 'uuid'
import useCreateDate from "../components/useCreateDate"
import { NoteContext } from "../context/notesContext"

const CreateNote = () => {
   const {setNotes}= useContext(NoteContext)
  const [title,setTitle]= useState('')
  const [details,setDetails]= useState('')
  const date = useCreateDate();
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
   
   e.preventDefault();
    if(title && details){
       const note ={id:uuid(), title, details,date}
       setNotes(prev=> [note,...prev])
       toast.success("note added")
      //  redirect to homepage
       navigate('/')
    }
  }
  return (
     <section>
      <header className="create-note__header">
       <Link to={'/'}><IoIosArrowBack/></Link>
       <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form" >
        <input type="text" autoFocus placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
         <textarea rows="28" placeholder="Notes details"  value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
      </form>
     </section>
  )
}

export default CreateNote