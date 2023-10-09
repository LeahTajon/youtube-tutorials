import {useState} from 'react'

const NewTodoForm = (props) => {
    props.onSubmit

    const [newItem, setNewItem] = useState("")

    function handleSumbit(e) {
        e.preventDefault()
        props.onSubmit(newItem)
        setNewItem("")
      }
    return (
    <form 
        className='new-item-form'
        onSubmit={handleSumbit}>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input 
            text='text'
            id='item'
            value={newItem} 
            onChange={e => setNewItem(e.target.value)}                        
          />
        </div>
        <button className="btn">Add</button>
      </form>
  )
}

export default NewTodoForm