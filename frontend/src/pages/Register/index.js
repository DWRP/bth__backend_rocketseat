import React from 'react';
import {MdAdd} from 'react-icons/md';

import logoImage from '../../assets/logo.svg';

import './style.css';

export default function Register(){
    return(
        <div className="logon-container">
            
            <section className="form">
                
                <img src={logoImage} alt="logo 'Be The Hero' " />

                <form>
                    <h1>Faça seu Logon</h1>
                    <input type="text" name='id' placeholder='Sua ID'/>
                    <input type="password" name='pass' placeholder='Sua Senha'/>
                    <button type="submit" className='button'>Entrar</button>
                    
                    <a href="http://">
                        <MdAdd size={16} color={'#8C20E0'} />
                        Não tenho cadastro
                    </a>
                </form>
            
            </section>
        </div>
    )
}