import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllusers,deleteUser} from '../service/api';
export const AllUser = () => {
    const [user,setUser]=useState([]);
    

    useEffect(()=>{
       allUser();
    },[])
    const allUser=async()=>{
        const result=await getAllusers();
        setUser(result.data);
        console.log("hiss",result.data);
    }
    const deleteData =async(id)=>{
        await deleteUser(id);
        getAllusers();

    }
  return (



    <div>                                 
       <table class="table table-dark">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">sirname</th>
            <th></th>
            
            </tr>
        </thead>

        {user.map((data,index)=>{
            return(
                <tbody>
                    <tr>
                        <th style={{}}>{data._id}</th>
                        <td>{data.name}</td>
                        <td>{data.sirname}</td>
                        <td>
                          <Link to={`/edit/${data._id}`}>  <button type="button" class="btn btn-primary">Edit</button></Link>
                            <button onClick={()=> deleteData(data._id)} type="button" class="btn btn-primary">Delete</button>
                        </td>
                    </tr>    
                 </tbody>
            )
        })}
        </table>
    </div>
  )
}
