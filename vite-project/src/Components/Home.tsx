import React from 'react'
import "./home.css"
import Head from './Head'

export default function Home() {
  return (
    <div className="heads">
        <Head />
        <div className="others">
            <div className="name">
                <span>Hi, Alexa...</span>
                <p>N.B: Please choose a junction you know is nearer to your apartment. The junctions are listed with reference of the distance to the main road</p>
            </div>
            <div className="junctions">
                <div className="junctionLists">
                    <button>Left Junction A</button>
                    <button>Left Junction E</button>
                    <button>Right Junction A</button>
                    <button>Right Junction E</button>
                </div>
            </div>
        </div>
    </div>
  )
}
