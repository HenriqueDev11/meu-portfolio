import './Skills.css'
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'

function Skills() {
    return (
        <section className='skills-section'>
            <h2>Skills</h2>
            <div className='skills-grid'>
                <div className='skill'>
                    <FaPython size={40} />
                    <span>Python</span>    
                </div>
                <div className='skill'>
                    <FaJs size={40} />
                    <span>JavaScript</span>    
                </div>    
                <div className='skill'>
                    <FaHtml5 size={40} />
                    <span>HTML</span>    
                </div>    
                <div className='skill'>
                    <FaCss3Alt size={40} />
                    <span>CSS</span>    
                </div>    
                <div className='skill'>
                    <FaReact size={40} />
                    <span>React</span>    
                </div>
                <div className='skill'>
                    <SiFlask size={40} />
                    <span>Flask</span>    
                </div>            
            </div> 
        </section>
    )
}

export default Skills