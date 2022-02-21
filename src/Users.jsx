import React,{useState, useEffect} from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import './App.css'
import {FiMail} from "react-icons/fi";
import {BsFacebook,BsInstagram,BsGithub,BsLinkedin} from 'react-icons/bs';


const Users = (props) => {

  const val = props.opt
  const [repo1, setRep1] = useState([])
  const [repo2, setRep2] = useState([])
  const loc = ['India', 'USA', 'China', 'France', 'Australia'];
  
 

  useEffect(() => {
    const axiosPost = async () => {
      const res = await axios('https://reqres.in/api/users/');
      setRep1(res.data.data)
    };
  
    const axiosPost2 = async () => {
      const res = await axios('https://reqres.in/api/users?page=2')
      setRep2(res.data.data)
    }
    axiosPost();
    axiosPost2();
  }, [])

  const repo = [...repo1, ...repo2]


  const show = () => {
    return (
      <div className="body2">
      {val > 0 && val<13? 
      
      <div className="info-container gra">
        <p className="bg"></p>
          <Avatar 
          style={{ border: "2px solid gray", margin: 20, height: "150px", width: "150px" }}
          src={repo[val-1].avatar}
            />
          <p className="text">{`${repo[val-1].first_name} ${repo[val-1].last_name}`}</p>
          <p className="email"><FiMail className="fi"/>{repo[val-1].email}</p>
          <p className="des">{`Hello my name is ${repo[val-1].first_name} ${repo[val-1].last_name}. I 
          am currently living in ${loc[props.rnd]} and I am loving this place. I explore many things in this place
          . I love its foods and drink and its cultre.`}</p>
          <div className="icon">
            <BsFacebook className="i"/>
            <BsInstagram className="i"/>
            <BsGithub className="i"/>
            <BsLinkedin className="i"/>
          </div>
        
      </div>
      
      : <p className="note">No data selected.<b></b>Please enter number between 1 to 12</p>}
      </div>
      
    )
  }

  return (

    <div>
      {show()}

    </div>
    

  );
}

export default Users;
