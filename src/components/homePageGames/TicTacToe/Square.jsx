import React from 'react'
import './TicTacToe.css'
import { useState, useEffect } from "react";




const Square = ({value, onSquareClick}) => {
    
  return (
    <div className=".square">
      <button 
        className='squareBTN'
        onClick={onSquareClick}
        >
            {value}
        </button>
    </div>
  )
}

export default Square
