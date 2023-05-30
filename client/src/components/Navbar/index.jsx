import React from 'react'
import { Col, Row } from 'antd';
import navstyle from "./index.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from "react-router-dom"


const Navbar = () => {
  
  return (
    <header>
      <nav>
        <div className={navstyle.top}>
          <div className={navstyle.row}>
            <Row className={navstyle.row2}>
              <Col span={8}>
                <Row>
                  <Col span={12}>
                    <p style={{color:"white"}}>MON-SAAT:06-00 AM - 10-00 PM</p>
                  </Col>
                  <Col span={12}>
                    <p style={{color:"white"}}>SUN:CLOSED</p>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>

                <div className={navstyle.uldiv}>
                  <ul className={navstyle.ul}>
                    <li><FacebookIcon style={{color:"white"}} /></li>
                    <li><TwitterIcon style={{color:"white"}} /></li>
                    <li><InstagramIcon style={{color:"white"}} /></li>
                    <li><GoogleIcon style={{color:"white"}} /></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={navstyle.button}>
          <div className={navstyle.row}>
            <Row className={navstyle.row2}>
              <Col span={8}>
                <Row>
                  <Col span={24}>
                    <h1 style={{color:"#17a2b8"}}>Consulting .</h1>
                  </Col>

                </Row>
              </Col>
              <Col span={8}>
                <ul className={navstyle.ul}>
                  <li><Link style={{color:"black"}} to={`/`}>Home</Link></li>
                  <li><Link style={{color:"black"}} to={`/add-user`}>Add User</Link></li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar