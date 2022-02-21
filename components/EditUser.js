import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import  {getAllusers}  from '../service/api';
import {editUser} from "../service/api";

const AddUser = () => {
    const {id}=useParams();
    
    const navigation=useNavigate();
    const initialval={name:"",sirname:""};
    const [users,setUser]=useState(initialval);
    const {name,sirname}=users;
    useEffect(()=>{
        editFun();
    },[]);
    const editFun=async()=>{
        const result=await getAllusers(id);
        setUser(result.data);
    }

    const  userInputHandl=(e)=>{
        setUser({...users,[e.target.name]:e.target.value});
        console.log(users,"usersss")
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        await editUser(id,users);
        navigation("/")
    }
  return (
    <>
        <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input value={name} onChange={userInputHandl}  name='name' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Sirname</label>
                    <input value={sirname} onChange={userInputHandl}  name='sirname' type="text" className="form-control" id="exampleInputPassword1" placeholder="sirname"/>
                </div>
                    
                <button onClick={submitHandler} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default AddUser