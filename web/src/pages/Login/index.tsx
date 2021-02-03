import React, {ChangeEvent, FormEvent, useState} from 'react';

import logoImg from '../../assets/images/logo.svg';
// import Input from '../../components/Input';

import openEye from '../../assets/images/icons/openeye.svg';
import closeEye from '../../assets/images/icons/closeeye.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import chekedIcon from '../../assets/images/icons/checked.svg';
import './styles.css';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';


const formLoginInitialState: DataForLogin = {
    email:'',
    pass:'',
    remember: false
}

interface DataForLogin{
    email:string,
    pass: string,
    remember: boolean
}

function Login() {
    const [eyeState, setEyeState] = useState(false);
    const [loginFormData, setLoginFormData] = useState<DataForLogin>(formLoginInitialState);
    const { auth, signIn } = useAuth();

    const history = useHistory();

    function handleLoginFormData(event: ChangeEvent<HTMLInputElement>) {
        // console.log(event.target);
        
        const fieldName = event.target.getAttribute('name') as string;
        const fieldValue = fieldName==="remember" ? event.target.checked : event.target.value;
        
        // console.log(fieldName);
        // console.log(fieldValue);
        
        setLoginFormData({
            ...loginFormData,
            [fieldName]:fieldValue
        });
        console.log(loginFormData);
    }

    async function handleLoginSubmin(event: FormEvent) {
        event.preventDefault();
        
        console.log(loginFormData);
        
        await signIn(loginFormData);
        // const loged = await signIn(loginFormData);
        // if (loged) {
        //     console.log("em teoria já está logado...");
            // await new Promise(resolve => setTimeout(resolve, 2000));
            history.push("/");
            // return (
            //     <Redirect to="/" />
            // );
        // } 
        // else {
            // history.push("/login");
        // }

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
                    {/* chamar função q faz requisição a api e tenta autenticar o usuário */}
                    <form action="" onSubmit={handleLoginSubmin} >
                        <div className="input-block-login">
                            <input type="email" name="email" id="email" placeholder="E-mail" onChange={handleLoginFormData} value={loginFormData.email} />
                            <div className="pass-group" > 
                                <input type={eyeState ? "text" : "password"} name="pass" id="pass" placeholder="Senha" onChange={handleLoginFormData} value={loginFormData.pass} />  
                                <div> <img src={eyeState ? closeEye : openEye} onClick={ () => setEyeState(!eyeState) } alt="" /> </div>  
                            </div>
                        </div>

                        <div className="remember-block">
                            <div>
                                <label className="chk">
                                    <input id="remember" type="checkbox" name="remember" onChange={handleLoginFormData} checked={loginFormData.remember}/>
                                    <span> <img src={chekedIcon} alt="" /> </span>
                                </label>

                                <label htmlFor="remember">Lembrar-me</label>
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