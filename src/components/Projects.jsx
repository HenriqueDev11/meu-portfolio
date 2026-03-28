import './Projects.css'

function Projects() {
    return (
        <section className='projects'>
            <h2>Projetos</h2>
        <div className='cards-container'>
            <div className='card'>
            <h3>Calculadora Simples</h3>
            <p>Uma calculadora feita em python utilizando utilizando Flask, HTML e CSS para interface gráfica.</p>
            <span>Python • Flask • HTML • CSS</span>
        </div>

        <div className='card'>
            <h3>Sistema de Login</h3>
            <p>Um sistema de login básico utilizando JS interno, HTML e CSS.</p>
            <span> JavaScript • HTML • CSS</span>
        </div>

        <div className='card'>
            <h3>Bot-Lembretes</h3>
            <p>Um BOT de Lembretes feito em Python para o Discord.</p>
            <span> Python • discord.py • Railway </span>
        </div>

    </div>
        </section>
    )
}

export default Projects