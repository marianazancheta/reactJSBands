import './Footer.css';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className="social-media">
                <a href='https://www.facebook.com/mariana.santos.1671897/' target="_blank">
                    <img src='./images/fb.png'/>
                </a>
                <a href='https://www.instagram.com/zancheta.mariana/' target="_blank">
                    <img src='./images/ig.png'/>
                </a>
                
            </div>
            <img className='footer-logo' src="./images/logo.png"/>
            <p className='footer-info'>Developed by Mariana Zancheta</p>
        </footer>
    )
}

export default Footer;