import React from 'react'
import "./Profile.scss"
import Header from "../../../components/header/Header"
import { BiPencil } from "react-icons/bi";
import emptyprofile from '../../../assets/emptyprofile.png'
import OrderComp from './Components/OrderComp'
import LikeComp from './Components/LikeComp'
import FollComp from './Components/FollComp'
import { AiOutlineRight } from 'react-icons/ai'
/**
 * @author Ziad Ezzat
 * @param {}
 * @description This is container of Profile Page which shows profile of user showing some data like name ,orders,likes and following Pges. 
 * @returns {JSX.Element of Profile Page} 
 */
const Profile = () => {
    return (
        <div>
            <Header />
            <div style={{ paddingLeft: 120, paddingRight: 135}}>
                <div className='form'>
                    <div className='greyform'>
                        <div style={{ marginTop: 50, marginLeft: 50, display: 'flex' }}>
                            <img src={emptyprofile} alt="profilelogo" style={{ width: 120, height: 120 }} />
                            <div style={{ display: 'block' }}>
                                <div style={{ display: 'flex' }}>
                                    <h1 style={{ fontSize: 30, marginLeft: 15, marginTop: 20, fontWeight: 600, color: 'black' }}>Ziad Elsamadony</h1>
                                    <BiPencil style={{ marginLeft: 18, marginTop: 33, width: 20, height: 20, cursor: 'pointer' }} />
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <a href='#' style={{ marginLeft: 15, color: 'grey', fontSize: 15 }}>1 order</a>
                                    <a href='#' style={{ marginLeft: 8, color: 'grey', width: 15, fontWeight: 600 }}>.</a>
                                    <a href='#' style={{ color: 'grey', fontSize: 15 }}>2 likes</a>
                                    <a href='#' style={{ marginLeft: 8, color: 'grey', width: 15, fontWeight: 600 }}>.</a>
                                    <a href='#' style={{ color: 'grey', fontSize: 15 }}>2 following</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ marginTop: 65, marginLeft: 445 }} >
                        <h5>Orders</h5>
                        <OrderComp data_testid="Order-Form-id" />
                        <button className='btn'> See past Orders</button>
                        <hr style={{ width: '85%', marginTop: 30 }}></hr>
                        <div style={{ display: 'flex' }}>
                            <a href='#' className='intersts'>Interests</a>
                            <AiOutlineRight style={{ marginLeft: 10, marginTop: 10 }} className='arr' />
                        </div>
                        <hr style={{ width: '85%', marginTop: 80 }}></hr>
                        <div style={{ display: 'flex' }}>
                            <a href='#' className='intersts'>Collections</a>
                            <AiOutlineRight style={{ marginLeft: 10, marginTop: 10 }} className='arr' />
                        </div>
                        <hr style={{ width: '85%', marginTop: 80 }}></hr>
                        <div style={{ display: 'flex' }}>
                            <a href='#' className='intersts'>Likes</a>
                            <AiOutlineRight style={{ marginLeft: 10, marginTop: 10 }} className='arr' />
                        </div>
                        <div className='likeblk'>
                            <LikeComp data_testid ="Like-Form-id" />
                            <LikeComp data_testid ="Like-Form-id"/>
                            <LikeComp data_testid ="Like-Form-id"/>
                            <LikeComp data_testid ="Like-Form-id"/>
                        </div>
                        <hr style={{ width: '85%', marginTop: 80 }}></hr>

                        <div style={{ display: 'flex',marginTop:25 }}>
                            <p className='intersts'>Following</p>
                            <a href='#' className='events'>See events</a>
                            <AiOutlineRight style={{ marginLeft: 10, marginTop: 10 }} className='arr' />
                        </div>
                        <div className='likeblk'>
                            <FollComp  text='GoMyCode' data_testid ="Follow-Form-id" />
                            <FollComp text='Ezz event riders'/>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Profile
