
import '../assets/css/Contact.css';


const Contact = () => {
    return (
        <div className="contact">
            <section>
                <h2 id='contacto'>CONTACTOS</h2><br />
                <p id='p'><i className="fa-solid fa-phone"></i> <a href="https://wa.link/7p2zmo" target='_blank' title='WhatsApp'>301 6755558</a></p>
                <p id='p'><i className="fa-solid fa-envelope"></i> angeldavidh@gmail.com</p>
                <p id='p'><i className="fa-brands fa-github"></i><a href="https://github.com/DevDangel" target='_blank' title='github'> github.com/DevDangel</a></p>
                <p id='p'><i className="fa-solid fa-location-dot"></i> Ibagué,Tolima - Colombia</p>
            </section>
        </div>
    );
};

export default Contact;