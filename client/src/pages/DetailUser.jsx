import React from 'react'
import { Col, Row } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserById ,deleteUser} from "../api/requests"
import { useParams } from 'react-router-dom'
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import homestyle from "./home.module.css"
const Detailuser = () => {
    const{id} = useParams();
  const[user,setUser] = useState({});
  useEffect(()=>{
    getUserById(id).then(res=>{
      setUser(res);
    })
  },[id]);
  return (
    <section className={homestyle.colorSec}>
    <div className={homestyle.container}>
    <Row>
              <Col key={user._id} span={8}>
                <div className={homestyle.col8}>
                  <img src={user.imageUrl} alt="" />
                  <h1>Full Name:{user.name}</h1>
                  <p>Age:{user.age}</p>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteUser(user._id).then(()=>{
                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )
                          })
                          
                        }
                      })
                    }}
                  >Delete</button>
                  <button><Link style={{color:"white"}} to={`/users/edit/${user._id}`}>Edit</Link></button>
                  <button><Link style={{color:"white"}}  to={`/`}>Back</Link></button>
                </div>
              </Col>

          </Row>
          </div>
          </section>
  )

}

export default Detailuser

