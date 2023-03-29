import React from 'react'
import "./Publish.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillAndroid, AiFillBulb } from 'react-icons/ai';
import Radpub from './Radpub'
import Headerpub from './Headerpub'
import Tipsbox from './Tipsbox'
import DateTime from './DateTime'
import  Sidebar from "../../Pages/CreatorsView/Sidebar/Sidebar"
import { TfiTicket } from 'react-icons/tfi';
import { CgProfile } from 'react-icons/cg'
import {FiExternalLink} from 'react-icons/fi'
import Containerpub from './Containerpub';
/**
 * @author Ziad Ezzat
 * @param {}
 * @description This is container of Publish Page which shows the events publised with some data related to this data,Choosing if it can be public or private and if you want to publish now or wait for scheduling it.
 * @returns {JSX.Element of Publish Page} 
 */
const Publish = () => {
    const LoginColumnStyle = {
        margin: "4rem 0 0 12rem"
    }
    return (
        <div>
            <Headerpub data_testid= "HDID" />
            <Sidebar/>
        
            <div style={{ marginLeft: 450, marginTop: 20 }}>
                <h1 className='pubhead'>Publish Your Event</h1>
                <Containerpub data_testid= "CDID"  />
                <div style={{ marginTop: 30 }}>
                    <Row>
                        <Col md='5'>
                            <Radpub data_testid= "RADID"  />
                        </Col>
                        <Col md='7'>
                            <div style={{ marginLeft: 25 }}>
                                <Tipsbox data_testid= "TBID"  />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <DateTime data_testid= "DTID"  />
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Publish
