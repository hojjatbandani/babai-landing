import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



export default function MainLayout({ children }) {
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',gap:'150px',height:"100vh"}}>
            <section>
                <Header />
                {children}
            </section>
            <Footer />
        </div>
    )
}
