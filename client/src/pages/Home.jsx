import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import homestyle from "./home.module.css"
import { Col, Row } from 'antd';
import ApprovalIcon from '@mui/icons-material/Approval';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllUsers, deleteUser } from "../api/requests"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { TextField,Button } from '@mui/material';
import {Helmet} from "react-helmet";

const Home = () => {
  const images = [
    "https://img.freepik.com/free-photo/businessman-excited-because-achievement-business_1163-5344.jpg?w=2000",
    "https://as1.ftcdn.net/v2/jpg/02/94/62/14/1000_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg",
    "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?w=2000",
  ];
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res)
    })
  }, [])
  function handleSearch(e) {
    let filteredUsers = users.filter((x) => x.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
    setUsers(filteredUsers)
  }

  return (
    
    <>
    <Helmet>
      <title>Business Man</title>
    </Helmet>
      <div>
        <Slide>
          <div className={homestyle.eachslideeffect}>
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>
              <span>
                <p style={{ color: "#17a2b8" }}>COMMITTED SUCCESS</p>
                <h1>WE HELP TO GROW BUSINESS</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi magnam eos, repellat<br></br> rem aspernatur omnis maiores. Nisi molestiae vitae nesciunt.</p>
                <button>OUR SERVICES</button>
              </span>
            </div>
          </div>
          <div className={homestyle.eachslideeffect}>
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
              <span>
                <p style={{ color: "#17a2b8" }}>COMMITTED SUCCESS</p>
                <h1>WE HELP TO GROW BUSINESS</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi magnam eos, repellat<br></br> rem aspernatur omnis maiores. Nisi molestiae vitae nesciunt.</p>
                <button>OUR SERVICES</button>
              </span>
            </div>
          </div>
          <div className={homestyle.eachslideeffect}>
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
              <span>
                <p style={{ color: "#17a2b8" }}>COMMITTED SUCCESS</p>
                <h1>WE HELP TO GROW BUSINESS</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi magnam eos, repellat<br></br> rem aspernatur omnis maiores. Nisi molestiae vitae nesciunt.</p>
                <button>OUR SERVICES</button>
              </span>
            </div>
          </div>
        </Slide>
      </div>
      <section className={homestyle.colorSec}>
        <div className={homestyle.container}>
          <Row>
            <Col span={24}>
              <div className={homestyle.col24}>
                <p>OUR TOP SERVICES</p>
                <h1>Our Best Services</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <div className={homestyle.col8}>
                <ApprovalIcon style={{ fontSize: "80px", color: "#17a2b8" }} />
                <h1>Strategy Planning</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Impedit ipsum esse modi doloremque perferendis<br></br> similique, unde amet maxime asperiores itaque.</p>
              </div>
            </Col>
            <Col span={8}>
              <div className={homestyle.col8}>
                <ApprovalIcon style={{ fontSize: "80px", color: "#17a2b8" }} />
                <h1>Strategy Planning</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Impedit ipsum esse modi doloremque perferendis<br></br> similique, unde amet maxime asperiores itaque.</p>
              </div>
            </Col>
            <Col span={8}>
              <div className={homestyle.col8}>
                <ApprovalIcon style={{ fontSize: "80px", color: "#17a2b8" }} />
                <h1>Strategy Planning</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Impedit ipsum esse modi doloremque perferendis<br></br> similique, unde amet maxime asperiores itaque.</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <div className={homestyle.section2}>
          <div className={homestyle.section2Row}>
            <Row>
              <Col span={12}>
                <div className={homestyle.imgDiv}>
                  <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png.webp" alt="" />
                </div>
              </Col>
              <Col span={12}>
                <div className={homestyle.wordDiv}>
                  <p style={{ color: "#17a2b8" }}>OUR TOP SERVICES</p>
                  <h1>Our Best Services</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, error nemo! Alias aperiam optio distinctio nam, voluptate repellendus tempore maiores blanditiis eligendi iure saepe reiciendis? Reprehenderit minima vitae nemo id ab molestiae consequuntur repellat saepe voluptate. Unde, accusamus. Odit rem quod, voluptates magnam laudantium labore qui praesentium reiciendis sapiente eum!</p>
                  <button>OUR SERVICES</button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className={homestyle.colorSec}>
        <div className={homestyle.container}>
          <Row>
            <Col span={24}>
              <div className={homestyle.col24}>
                <p>OUR PROFESSIONAL MEMBERS</p>
                <h1>Our Team Members</h1>
              </div>
            </Col>
          </Row>
          <TextField
            onChange={(e) => handleSearch(e)}
            style={{ marginBottom: "30px" }}
            id="outlined-basic"
            label="Search User"
            variant="outlined"
          />
          <Button
                variant="contained"
                color="success"
                style={{ marginLeft: '10px',backgroundColor:"#17a2b8"}}
                onClick={() => {
                  let sortedUsers = [...users.sort((a, b) => a.age - b.age)];
                  setUsers(sortedUsers);
                }}
              >
                Sort by Age
              </Button>
          <Row>
            {users && users.map((user) => {
              return <Col xs={{ span: 24}} sm={{ span: 12}} lg={{ span: 8}}  style={{ marginBottom: "5%" }} key={user._id}>
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
                          deleteUser(user._id).then(() => {
                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )
                          })
                          setUsers(
                            users.filter((x) => x._id !== user._id)
                          );
                        }
                      })
                    }}
                  >Delete</button>
                  <button><Link style={{ color: "white" }} to={`/users/edit/${user._id}`}>Edit</Link></button>
                  <button><Link style={{ color: "white" }} to={`/users/${user._id}`}>Detail</Link></button>
                </div>
              </Col>
            })}

          </Row>
        </div>
      </section>
      <section>
        <div className={homestyle.endContainer}>  
            <Col  style={{textAlign:"center"}} span={6}>
              <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand2.png" alt="" />
            </Col>
            <Col style={{textAlign:"center"}} span={6}>
              <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand4.png" alt="" />
            </Col>
            <Col style={{textAlign:"center"}} span={6}>
              <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand1.png" alt="" />
            </Col>
            <Col style={{textAlign:"center"}} span={6}>
              <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/brand5.png" alt="" />
            </Col>
        </div>
      </section>
    </>
  )
}

export default Home