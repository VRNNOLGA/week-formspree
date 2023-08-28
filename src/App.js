import './App.css';
import { useForm } from '@formspree/react';
//import React from 'react';
//import ContactForm from './ContactForm';

//export default function App() {
 // return (
    //<div>
      //<ContactForm />
    //</div>
  //);
//}


function App() {
  const [state, handleSubmit] = useForm('{https://formspree.io/f/xjvzpngy}');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form 
    onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <label>
    Your message:
    <textarea class="text" name="message" placeholder="Type your message..." required =""></textarea>
  </label>
      <button type="submit" disabled={state.submitting}>Sign up</button>
    </form>
  )
}
export default App;

