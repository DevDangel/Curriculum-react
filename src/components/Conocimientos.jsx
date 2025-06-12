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

const Conocimientos = () => {
    return (
        <div className="conocimientos">
            <h2>EXPERIENCIA LABORAL</h2>
            <div className="line"></div>
            <div className="secciones">
                <section id="front">
                    <h3>Fronted</h3>
                    <div className="line"></div>
                    <div className="imgs-front">
                        <img src={html} alt="HTML" width={100}/>
                        <img src={css} alt="CSS" width={100}/>
                        <img src={js} alt="JavaScript"  width={100}/>
                    </div>
                </section>
                <section id="back">
                    <h3>Backend</h3>
                    <div className="line"></div>
                    <div className="imgs-back">
                        <img src={java} alt="Java" width={10}/>
                        <img src={php} alt="PHP" width={10}/>
                        <img src={pytohn} alt="Python" width={10}/>
                        <img src={mysql} alt="mysql" width={10} />
                        <img src={postgres} alt="Postgres" width={10}/>
                    </div>    
                </section>
                <section id="versiones">
                    <h3>Control de versiones</h3>
                    <div className="line"></div>
                    <div className="imgs-v">
                        <img src={git} alt="Git" width={10}/>
                        <img src={github} alt="GitHub" width={10}/>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Conocimientos;