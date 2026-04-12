import './Contact.css'
import { FaGithub } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contato" className='contact'>
      <h1>Contato</h1>
      <p>Entre em contato para projetos!</p>

      <div className='contact-links'>
        <a href="https://github.com/henriquedev11" target="_blank" className="contact-btn"> <FaGithub size={20} /> Github</a>

        <div className='contact-btn'>dopedroconta1@gmail.com</div>
      </div>
    </section>
  )
}

export default Contact
