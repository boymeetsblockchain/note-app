import {CiSearch} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'
import NoteItem from '../components/NoteItem'
import { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../context/notesContext'

const Notes = () => {
  const{notes} = useContext(NoteContext)
  const [showSearch, setShowSearch]= useState(false)
  const [text,setText]= useState('')
  const [filteredNotes, setFilteredNotes]= useState(notes)
  

  const handleSearch =()=>{
  setFilteredNotes(notes.filter(note=>{
    if(note.title.toLowerCase().match(text.toLowerCase())){
      return note
    }
  }))
  }
  useEffect(handleSearch, [text])
  return (
    <section>
        <header className="notes__header">
            {!showSearch &&  <h2>My Notes</h2>}
            {showSearch   && <input type="text" autoFocus
             value={text} placeholder='KeyWord.....' 
              onChange={(e)=>{setText(e.target.value); handleSearch()}}/>}
              <button className='btn' onClick={()=>setShowSearch(prev=>!prev)}>
                {showSearch ?<MdClose/> :<CiSearch/>}
                </button>
        </header>
        <div className="notes__container">
           {
            filteredNotes.length === 0 && <p className='empty__notes'>No notes found</p> 
           }
            { 
            filteredNotes.map((note)=> <NoteItem note={note} key={note.id}/>)
                
            }
        </div>
         <Link className='btn add__btn' to={'/create-note'}><BsPlusLg/></Link>
    </section>
  )
}

export default Notes