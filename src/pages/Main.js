import React, { useState } from 'react';
import '../style/main.scss'
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import MainList from "../shop/MainList";
import MainVisual from "./MainVisual";
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import ListAll from '../shop/ListAll';
import Footer from './Footer';




const Main = ({ shopData, sw }) => {

    const anchors = [];
    const TabData = [
        { data: 'lipstick', name: '립' },
        { data: 'palette', name: '아이섀도우' },
        { data: 'concealer', name: '컨실러' },
    ]


    return (
        <ReactFullpage
            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */
            scrollOverflow={true}

            navigation={true}
            navigationPosition="right"
            navigationTooltips={anchors}

            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <section className='main main01'>
                                <h2>No.1 아이래쉬 세럼</h2>
                                <p>11관왕 롱 액티브 아이래쉬 세럼<br />
                                    속눈썹영양제의 새로운 기준을 경험해보세요</p>
                                <a href="">자세히 보기</a>
                            </section>
                        </div>
                        <div className='section'>
                            <section className='main main02'>
                                <h2>아보카도 아이크림</h2>
                                <p>순하게 시작하는<br />
                                    부담없는 눈가관리</p>
                                <a href="">자세히 보기</a>
                            </section>
                        </div>
                        <div className='section'>
                            <section className='main main03'>
                                <h2>실크리페어 네일크림</h2>
                                <p>건강한 손톱을 위한 시크릿 레시피!<br />
                                    쉽고 간편한 네일케어를 만나보세요</p>
                                <a href="">자세히 보기</a>
                            </section>
                        </div>
                        <div className="section">
                            <section className="mainTab">
                                <h2>베스트 제품</h2>
                                <ul className="menu">
                                    {
                                        TabData.map((it, idx) => { // idx = 0,1,2
                                            return <NavLink to={`/tab/${it.data}`} activeClassName="active">{it.name}</NavLink>
                                        })
                                    }
                                </ul>
                                <div className="con">
                                    <Outlet />
                                </div>
                            </section>
                        </div>
                        <div className='section fp-auto-height'>
                            <Footer />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )
}


export default Main;