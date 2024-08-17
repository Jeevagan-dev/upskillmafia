import React from 'react'

export default function Input(
    label,
    amount,
    onAmountChange ,
    onCurrencyChange,
) {
  return (
    <div className='input-container'>
      <div className="headers">
        <p>{label}</p>
        <p>currency type</p>
      </div>
      <div className='input-box'>
        <input type="number" placeholder='amount' value={amount} onChange={((e) => )}/>
        <select name="" id="">
          <option value="">usd</option>
          <option value="">inr</option>
        </select>
      </div>
    </div>
  )
}
