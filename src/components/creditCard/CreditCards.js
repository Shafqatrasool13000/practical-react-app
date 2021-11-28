import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';
const CreditCards = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <>
            <Cards cvc={cvc} name={name} number={number} expiry={expiry} focused={focus} />
            <form >
                <input type="text" value={name} placeholder="Enter Name" name='name' onFocus={e =>setFocus(e.target.name)} onChange={(e) => setName(e.target.value)} />

                <input type="tel" value={number} name='number' placeholder="Enter Number" onChange={(e) => setNumber(e.target.value)} onFocus={e =>setFocus(e.target.name)} />

                <input type="text" name="expiry" value={expiry} placeholder="MM/YY Expiry" onChange={(e) => setExpiry(e.target.value)} onFocus={e =>setFocus(e.target.name)} />

                <input type="tel" value={cvc} name='cvc' placeholder="Enter CVC" onChange={(e) => setCvc(e.target.value)} onFocus={e => setFocus(e.target.name) } />
            </form>
        </>

    )
}

export default CreditCards
