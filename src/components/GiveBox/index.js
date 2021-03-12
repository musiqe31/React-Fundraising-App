import React, { useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { Donate } from '../../redux/actions/'

export default function GiveBox() {
    const [amount, setamount] = useState("")
    const dispatch = useDispatch()
    const [error, seterror] = useState("")
    const [price, setprice] = useState("")

    const donate = (e) => {
        e.preventDefault()
        console.log(typeof (amount))
        if (amount < 5) {
            setprice(true)
            seterror(false)
            console.log("Number less than 5")
        } else if (isNaN(amount)) {
            seterror(true)
            setprice(false)
        } else {
            seterror(false)
            setprice(false)
            dispatch(Donate(amount))
        }

        setamount("")
    }

    const amountdonated = (e) => {
        setamount(e.target.value)
        console.log(e.target.value)
    }

    const Errors = () => {
        if (error) {
            return <p className="err">Please Input A Valid Dollar Amount</p>
        } else if (price) {
            return <p className="err">Please Enter Amount Greater Than $5.00</p>
        }
    }

    return (
        <div>
            <form>
                <div className="container">
                    <div className="inputContainer">
                        <i className="fa fa-usd icon" aria-hidden="true"></i>
                        <input className="input-field" onChange={amountdonated} value={amount} type="text" placeholder="25" />
                        <button className="btn" onClick={donate}>Give Now</button>
                    </div>
                    {Errors()}
                </div>
            </form>
        </div>
    )
}


