import React from "react"

import "./Style.css"

const useFormState = () => {
  const init = {
    name: '',
    email: '',
    message: ''
  }
  const [values, setValues] = React.useState(init)
  return [values, setValues]
}

const Contact = (props) => {

  const [isSent, setIsSent] = React.useState(null)
  const [values, setValues] = useFormState();

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!values.name || !values.email || !values.message) {
      setIsSent(false)
    } else {

      const TOKEN = "917347158:AAERyxqG8NkbO1djcV1pUeRtsG1eZs3sLx0"
      const CHAT_ID = "514623364"
      const MESSAGE = encodeURIComponent(`Üzenetet hoztam!\n\nNév: ${values.name}\nEmail: ${values.email}\n\n${values.message}`)

      fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${MESSAGE}`, {
            method: 'POST',
      }).then(() => setIsSent(true))
          .catch(() => alert("Valami hiba történt"))

      setValues({name: '', email: '', message: ''});
    }
  }

  return (
    <div className="background">
      <form id="contact-form" onSubmit={handleSubmit}>
      <div className="contact-grid-container">
        <div className="contact-grid-double contact shine">
          CONTACT
        </div>

        <input
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          name="name"
          className="contact-input"/>

        <input placeholder="Email"
          value={values.email}
          onChange={handleChange}
          name="email"
          className="contact-input"/>

        <textarea placeholder="Write for us"
          value={values.message}
          onChange={handleChange}
          name="message"
          className="contact-grid-double contact-large-input"/>

        {isSent ? (
          <p className="contact-grid-double sent-message">Thank you!<br/>Your message has been sent.</p>
          ) : (
          <input type ="submit" value="Send" className="contact-grid-double contact-submit"/>
        )}

        {isSent == false &&
          <p className="contact-grid-double missing-form">Oops. Something is missing.</p>
        }
      </div>
      </form>
    </div>
  )
}

export default Contact
