const Idiomas = () => {
    return (
        <div className="idiomas">
            <h2>IDIOMAS</h2>
            <div className="ingles">
                <p>Inglés</p>
                <progress value={50} max={100}></progress>
            </div>
            <div className="espanol">
                <p>Español</p>
                <progress value={100} max={100}></progress>
            </div>
        </div>
    );
}
export default Idiomas;