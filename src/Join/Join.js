import axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import baseUrl from '../appData'
import Cookies from "js-cookie"
import './Join.css';

const signin = async (userName, userPassword) => {
  let res = await axios.post(baseUrl + "/auth/signin", {id: userName, password: userPassword});

  if (res.status !== 200) {
    console.log("not verified:", res);
    return null;
  }
  return res.data.token;
}

export default function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [verified, setVerified] = useState(false);
  if (verified || Cookies.get("default") != null) {
    return (<Redirect to='/main'/>)
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Username" className="joinInput" type="text" onChange={(event) => setUserName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="joinInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <Link onClick={async (e) => {
          if (!userName || !password) {
            return;
          }
          let result = await signin(userName, password);
          if (result === null) {
            return;
          }
          let expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + 30);
          Cookies.set("default", result, {expires: 30});
          Cookies.set("currentUser", userName, {expires: 30})
          setVerified(true);
        }} to={`#`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
