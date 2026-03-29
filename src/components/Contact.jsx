import './Contact.css'

function Contact() {
    return (
        <section id="contato" className='contact'>
                <h1>Contato</h1>
                <p>Entre em contato para projetos!</p>

            <div className='contact-links'>
                <a href="https://github.com/henriquedev11" target="_blank">Github</a>
                <a href="mailto:dopedroconta1@email.com" target="_blank">Entre em contato</a>
            </div>
        </section>
    )
}

export default Contact