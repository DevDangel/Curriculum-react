import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png'
import java from '../assets/img/java.png';
import php from '../assets/img/php.png';
import pytohn from '../assets/img/python.png';
import mysql from '../assets/img/mysql.png';
import postgres from '../assets/img/postgres.png';
import git from '../assets/img/git.png';
import github from '../assets/img/github.png';
import '../assets/css/Conocimientos.css'

const Conocimientos = () => {
    return (
        <div className="conocimientos">
            <h2 className='con-title'>CONOCIMIENTOS T.I</h2>
            <div className="line"></div>
            <div className="esfera"></div>
            <div className="line-v"></div>
            <div className="secciones">
                <section id="front">
                    <h3>Fronted</h3>
                    <div className="imgs-front">
                        <img src={html} alt="HTML" width={100} id='html'/>
                        <img src={css} alt="CSS" width={100} id='css'/>
                        <img src={js} alt="JavaScript"  width={100} id='js'/>
                    </div>
                </section>
                <section id="back">
                    <h3>Backend</h3>
                    <div className="imgs-back">
                        <img src={java} alt="Java"  id='java'/>
                        <img src={php} alt="PHP"  id='php'/>
                        <img src={pytohn} alt="Python"  id='python'/>
                        <img src={mysql} alt="mysql"  id='mysql' />
                        <img src={postgres} alt="Postgres"  id='postgres'/>
                    </div>    
                </section>
                <section id="versiones">
                    <h3>Control de versiones</h3>
                    <div className="imgs-v">
                        <img src={git} alt="Git" width={10} id='git'/>
                        <img src={github} alt="GitHub" width={10} id='github'/>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Conocimientos;