import React, { Component } from 'react'
import styles from './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className={styles.Contact}>
        <div>contact page to do</div>
        <form
          className={styles.ContactForm}
          name='afm_form_af054f1d'
          id='afm_form_af054f1d'
          action='http://free.allforms.mailjol.net/u/af054f1d.php'
          method='POST'
        >
          <input type='text' name='name' placeholder='name*' />
          <input type='text' name='email' placeholder='email*' />
          <input type='text' name='subject' placeholder='subject*' />
          <textarea rows='4' name='message' placeholder='message' />
          <input type='submit' name='submit' value='send' />
        </form>
      </div>
    )
  }
}

export default Contact
