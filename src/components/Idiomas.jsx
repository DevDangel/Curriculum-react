import '../assets/css/Idiomas.css';
const Idiomas = () => {
    return (
        <div className="idiomas">
            <h2 id='idiomas'>IDIOMAS</h2>
            <div className="ingles">
                <p id='ingles'>Inglés</p>
                <p style={{fontWeight: 'bold'}}>B1</p>
            </div>
            <div className="espanol">
                <p id='espanol'>Español</p>
                <p style={{fontWeight: 'bold'}}>Nativo</p>
            </div>
        </div>
    );
}
export default Idiomas;