import React from 'react'

const Form = () => {




  const handleBtn = (e) => {
    if (e.target.checked) {
      document.querySelector('form button').removeAttribute("disabled")
    } else {
      document.querySelector('form button').setAttribute("disabled","true")
    }

  }


  return (
    <form action="">
      <h3>Find Your Courses.</h3>

      <div>
        <input type="text" name="name" placeholder='Your Name' />
      </div>

      <div>
        <input type="tel" name="mobile" placeholder='Mobile' />
      </div>

      <div>
        <input type="email" name="email" placeholder='email' />
      </div>

      <div>
        <select name="intrest" id="">
          <option value="not selected">Intrested In</option>
          <option value="">option 1</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
        </select>
      </div>

      <div>
        <textarea name="" id="" cols="30" rows="3" placeholder='Your Message'></textarea>
      </div>

      <div className='check-container'>
        <input type="checkbox" name="" id="check" onChange={handleBtn} />
        <label htmlFor='check'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo!?</label>
      </div>

      <button type='submit' disabled>Send A Message</button>
    </form>
  )
}

export default Form
