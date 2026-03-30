import './Hero.css'
import { useState, useEffect } from 'react'

const textos = ['Olá, eu sou o Pedro!', 'Engenheiro de Software', 'Desenvolvedor FullStack']

function Hero() {
  const [textoAtual, setTextoAtual] = useState('')
  const [indexTexto, setIndexTexto] = useState(0)
  const [indexLetra, setIndexLetra] = useState(0)
  const [apagando, setApagando] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!apagando) {
        if (indexLetra < textos[indexTexto].length) {
          setTextoAtual((t) => t + textos[indexTexto][indexLetra])
          setIndexLetra((i) => i + 1)
        } else {
          setTimeout(() => setApagando(true), 1500)
        }
      } else {
        if (textoAtual.length > 0) {
          setTextoAtual((t) => t.slice(0, -1))
        } else {
          setApagando(false)
          setIndexLetra(0)
          setIndexTexto((i) => (i + 1) % textos.length)
        }
      }
    }, apagando ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [textoAtual, indexLetra, apagando, indexTexto])
    
    return (
    <section className='hero'>
      <div className="hero-content">
        <h1 className='hero-titulo'>
            {textoAtual}<span className='cursor'>|</span>
        </h1>
        <p>Aprendendo desenvolvimento web. Tentando me tornar um desenvolvedor FullStack.</p>
        <a href="#projetos" className="hero-btn">Ver Projetos</a>
      </div>

      <div className="hero-card">
        <h3>Pedro Henrique</h3>
        <p className="hero-card-location">Pará, Brasil</p>
        <hr />
        <p className="hero-card-desc">Estudante de Engenharia de Software, apaixonado por tecnologia e desenvolvimento.</p>
        <div className="hero-card-stats">
          <div>
            <strong>3+</strong>
            <span>Projetos</span>
          </div>
          <div>
            <strong>1+ Anos</strong>
            <span>Experiência</span>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Hero