import '../assets/css/Idiomas.css';
const Idiomas = () => {
    return (
        <div className="idiomas">
            <h2 id='idiomas'>IDIOMAS</h2>
            <div className="ingles">
                <p id='ingles'>Inglés</p>
                <progress value={50} max={100} id='pr-ingles'></progress>
            </div>
            <div className="espanol">
                <p id='espanol'>Español</p>
                <progress value={100} max={100} id='pr-espanol'></progress>
            </div>
        </div>
    );
}
export default Idiomas;