import React, {useState} from 'react';

import logoImg from '../../assets/images/logo.svg';
// import Input from '../../components/Input';

import openEye from '../../assets/images/icons/openeye.svg';
import closeEye from '../../assets/images/icons/closeeye.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import chekedIcon from '../../assets/images/icons/checked.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function Login() {
    const [eyeState, setEyeState] = useState(false);

    function chagePassType() {
        setEyeState(!eyeState);
    }
    
    return(
        <div id="page-login">

            {/* passar para um component talvez */}
            <aside className="proffy-presentation">
                <div className="presentation-group">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </aside>
            {/* passar para um component talvez */}

            <main className="main-login">
                <fieldset>
                    <legend> Fazer login </legend>
                    <form action="">
                        <div className="input-block-login">
                            <input type="text" name="" placeholder="E-mail"/>
                            <div className="pass-group" > 
                                <input type={eyeState ? "text" : "password"} name="" placeholder="Senha"/>  
                                <div> <img src={eyeState ? closeEye : openEye} onClick={ chagePassType } alt="" /> </div>  
                            </div>
                        </div>

                        <div className="remember-block">
                            <div>
                                <label className="chk">
                                    <input id="chk" type="checkbox" name="remember" />
                                    <span> <img src={chekedIcon} alt="" /> </span>
                                </label>

                                <label htmlFor="chk">Lembrar-me</label>
                            </div>
                            <Link to="/forgot" >Esqueci minha senha</Link>
                        </div>

                        <button type="submit" >Entrar</button>

                    </form>
                </fieldset>

                    <div className="incentivisation-block">
                        <span>
                            Não tem conta? <br />
                            <b> <a href="/#">Cadastre-se</a> </b>  
                        </span>

                        <span>
                        É de graça <img src={purpleHeartIcon} alt="" />
                        </span>
                    </div>

            </main>

        </div>
    );
}

export default Login;