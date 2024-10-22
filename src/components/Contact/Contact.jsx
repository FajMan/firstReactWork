import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <form className="form">
        <div className="name">
            <label htmlFor="">Name:</label>
            <br />
            <input type="text" />
        </div>
        <br />
        <div className="name">
            <label htmlFor="">Email:</label>
            <br />
            <input type="email" />
        </div>
        <br />
        <div className="text">
            <textarea name="" id="">

            </textarea>
        </div>
        <br />
        <button>Submit</button>
        <br />
    </form>
  )
}

export default Contact