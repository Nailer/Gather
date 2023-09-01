import React, { useState } from 'react'
import "./page.css"
import Head from './Head'
import code from "../assets/qrcode.png"
import QRCode from 'qrcode.react';

export default function Page() {

    const [students, setStudents] = useState (0)
    const [tickets, setTickets] = useState (0)

    const [text, setText] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);

    const generateQRCode = () => {
        setShowQRCode(true);
    };

  return (
    <div>
        <Head />
        <div className="page">
            <div className="text">
                <p>Please press the "Generate QR Code" only when you are at eyereach of your preffered junction.</p>
            </div>

            <div className="capacity">
                <p>Vehicle Capacity</p>
                <span>12</span>
            </div>

            <div className="students">
                <p>Students Available</p>
                <span>{students}</span>
            </div>

            <div className="students">
                <p>Tickets Avaiable</p>
                <span>{tickets}</span>
            </div>

            <div className="qrCode">
                <div className="generate">
                    <h1><button className='btn' onClick={generateQRCode}>Generate QR Code</button></h1>
                </div>
            <div>
            <input
                className='nameInput'
                type="text"
                placeholder="Enter your name here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            

            {showQRCode && (
                <div>
                <QRCode className="qrCodeUse" value={text} />
                </div>
            )}
        </div>
            </div>

            <div className="info">
                <p>Kindly wait for your ride after generating your QR Code... thank you</p>
            </div>
        </div>

    </div>
  )
}
