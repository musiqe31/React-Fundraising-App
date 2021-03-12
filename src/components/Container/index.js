import React, { useEffect } from 'react'
import './style.css'
import GiveBox from '../GiveBox/'
import { useSelector } from 'react-redux'


export default function Container() {
    const amount = useSelector(state => state.data.amount)
    const donors = useSelector(state => state.data.donors)
    const remaining = (5000 - amount).toFixed(2)

        const Goal =()=>{
            if(remaining > 0){
                return <p className="bg">${remaining} still needed to fund this project</p>
            }else{
                return  <p className="celebrate"> Our Goal of $5,000 was reached!!</p>
            }
        }

    return (
        <div>
            <div className="centered">
                <div>
                    {Goal()}
                    <div className="box">
                        <progress className="pb" id="amount" value={amount} max="5000" ></progress>
                        <h1>Only four days left to fund this project</h1>
                        <p>Join the <span className="donors">{donors}</span> other donors who have already supported the project</p>
                        <GiveBox />
                    </div>
                </div>
            </div>
        </div>
    )
}


