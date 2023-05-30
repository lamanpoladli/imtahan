import React from 'react'
import { Col, Row } from 'antd';
import footerstyle from "./index.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
const Footer = () => {
  return (
    <div className={footerstyle.footer}>
      <div className={footerstyle.container}>
        <Row className={footerstyle.row}>
          <Col className={footerstyle.col} span={18}>
            <div><p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p></div>
          </Col>
          <Col className={footerstyle.col}  span={6}>
            <ul>
                    <li><FacebookIcon style={{color:"white"}} /></li>
                    <li><TwitterIcon style={{color:"white"}} /></li>
                    <li><InstagramIcon style={{color:"white"}} /></li>
                    <li><GoogleIcon style={{color:"white"}} /></li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer