import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/46692989?s=460&u=270a2463855abf2d8571378acb7fdd732c810c45&v=4" alt="Wandy Rosa" />
                <div>
                    <strong>Wandy Rosa</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Entusiasta em conhecimentos de física e exterminador de terra planistas.
                        <br /> <br />
                        Apaixonado por física e sempre disposto a aprender algo novo sobre as forças da natureza.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;