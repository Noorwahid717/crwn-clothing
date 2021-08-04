import React from 'react';
import './homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Topi</h1>
                    <span className="subtitle">Beli Sekarang</span  >
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Jaket</h1>
                    <span className="subtitle">Beli Sekarang</span  >
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Sepatu</h1>
                    <span className="subtitle">Beli Sekarang</span  >
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Pria</h1>
                    <span className="subtitle">Beli Sekarang</span  >
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Wanita</h1>
                    <span className="subtitle">Beli Sekarang</span  >
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;