import React from 'react'
import style from './Login.module.css'
import {Button} from "@nextui-org/react";

const Login = () => {
  return (
    <div>
        <div className="flex gap-4 items-center"></div>
        <div className={style.body}>
            <div className={style.main}>
            <div className={style.border}>
            <div className={style.header}>
                <h1>Prijavite se</h1>    
            </div>
            <div className={style.username}>
            <div className={style.inputBox}>
        <input type="text" name="username" required id="username"/>
        <span>Username</span>
            </div>
            </div>
            <div className={style.inputBox}>
        <input type="password" name="password" required id="password"/>
        <span>Password</span>
        <Button className={style.Button}>Potvrdi</Button>
        <div className={style.toggle} onclick="showHide()"></div>
        </div>
        </div>
        </div>
        </div>
    </div>
    
  )
  
}

export default Login