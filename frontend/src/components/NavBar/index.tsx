import { ReactComponent as Faculdade } from 'assets/img/faculdade.svg';
import { ReactComponent as Privacidade } from 'assets/img/privacidade.svg';
import './styles.css';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

type Cookies = {
    message?: string;
    textButton?: string;
}

function NavBar({ message, textButton }: Cookies) {
    const [cookies, setCookies] = useState(() => {
        return !!localStorage.getItem('@CookiesFloatingScreen2:ReactJS');
    });

    const handleAcceptCookies = useCallback(() => {
        localStorage.setItem('@CookiesFloatingScreen2:ReactJS', 'accept');

        setCookies(true);
    }, []);

    return (
        <html>
            <body>
                <header>
                    <nav className="container">
                        <div className="dsmovie-nav-content">
                            <h1>Projeto LGPD</h1>
                            <a href="https://unifafibe.com.br">
                                <div className="dsmovie-contact-container">
                                    <Faculdade />
                                    <p className="dsmovie-contact-link">UNIFAFIBE</p>
                                </div>
                            </a>
                            <NavLink
                                className="navbar-item"
                                to="/termsofuse">
                                    <Privacidade />
                                POLITICAS DE PRIVACIDADE
                            </NavLink>
                        </div>
                        {!cookies && (
                            <nav className="box-cookies">
                                <p>{message ? message : 'Este site usa cookies para garantir que você obtenha a melhor experiência. Confira nossa política de privacidade!'}</p>
                                <button className="aceitar" onClick={handleAcceptCookies}>{textButton ? textButton : 'Entendi!'}</button>
                            </nav>
                        )}
                    </nav>
                </header>
                <footer>
                    2022 Projeto LGPD - Todos os diretos reservados |
                    Responsáveis: Alunos de Sistemas de Informação - UNIFAFIBE
                </footer>
            </body>
        </html>

    );
}

export default NavBar;