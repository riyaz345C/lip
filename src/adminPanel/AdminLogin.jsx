import React, { useEffect, useRef, useState } from 'react'
import styles from './adminLogin.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { api } from './api'
function AdminLogin() {
  
  const naviagte = useNavigate()
  useEffect(()=>{
    function redirect(){
      if(localStorage.getItem('lipToken')){
        naviagte('/admin/account')
      }
    }
    redirect()
    return () => redirect()
  },[])
  const centerForm = (st) =>{
    const x =document.getElementById('root').style
    // if(st){
      x.minHeight= st ? '100vh' : 'inherit'
      x.display = st ? 'flex' : 'inherit'
      x.flexFlow = st ? 'column' : 'inherit'
      x.alignItems = st ? 'center' : 'inherit'
      x.justifyContent = st ? 'center' : 'inherit'
    // }
  }
  centerForm(true)
  const nameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const [data,setData] = useState()

  const submit = async(e) =>{
    e.preventDefault()
    try {
    const value = (v) => {return v.current.value}
    setData({message:`....loading`,color:'green'})
    const loginCredentials = await axios.post(api.login || `http://localhost:4000/login`,
    {name:value(nameRef),password:value(passwordRef)})

    // console.log(loginCredentials);

    if(loginCredentials.status === 200){
      localStorage.setItem('lipToken',loginCredentials.data.token)
      centerForm(false)
      navigate('/admin/account')
    } 
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      setData({ message: error.response.data.message, color: "red" });
      console.log(error.response.status, error.response.data.message);

    } else if (error.request) {
      // The request was made but no response was received
      setData({ message: "Connection refused.", color: "red" });
      console.log("Connection refused.");

    } else {
      // Something happened in setting up the request that triggered an error
      setData({ message: "Error: " + error.message, color: "red" });
      console.error("Error: ", error.message);
      
    }
    }
  }
console.log(data||'inherit');
  return (
    <>
    <div className={styles.message} style={{color:data ? data.color : '#000'}}>{data?data.message:''}</div>
    <form  className={styles.form}>
      <input type="text" placeholder='username' name='username' ref={nameRef}  className={styles.input} />
      <input type="text" placeholder='password' name='password' ref={passwordRef} className={styles.input}/>
      <input type="submit" value="Log-In" className={styles.button} onClick={submit}/>
    </form>
    </>
  )
}

export default AdminLogin