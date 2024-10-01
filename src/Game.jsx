









import React, { useState } from 'react'
import Ticto from './Tic-to'

function Game() {
  //array  maping
  const [count,setcount]=useState(Array(9).fill(null))
  console.log("count",count)
  const [isXtrun,setisXtrun]=useState(true)

//cheak wiinner
const cheakwinner=()=>{
const wiinnerlogic=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[0,4,8],
[2,4,8],
]
for (let i=0;i<wiinnerlogic.length;i++){
  let [a,b,c]=wiinnerlogic[i]
  if(count[a]===count[b]&&count[a]===count[c]){
      return count[a]
  }
}
return false
}

//winner cheak
const iswinner=cheakwinner()
  const handelindex=(index)=>{
const copystete=[...count]
copystete[index]=isXtrun?'X':'0'

setcount(copystete)
setisXtrun(!isXtrun)
  }

  return (
    <div className='bord-container'>
    
     {iswinner? (<><h1> win:{iswinner}</h1></> ):(
     <>
     
     <div className='board-row'>
         <Ticto onClick={()=>handelindex(0)} value={count[0]}/>
         <Ticto  onClick={()=>handelindex(1)} value={count[1]}/>
        <Ticto  onClick={()=>handelindex(2)}  value={count[2]}/>
        
       </div>
    
       <div className='board-row'>
       <Ticto   onClick={()=>handelindex(3)}  value={count[3]}/>
         <Ticto  onClick={()=>handelindex(4)}  value={count[4]}/>
        <Ticto    onClick={()=>handelindex(5)} value={count[5]}/>
        
       </div>
    
       <div className='board-row'>
       <Ticto   onClick={()=>handelindex(6)}  value={count[6]}/>
         <Ticto  onClick={()=>handelindex(7)}   value={count[7]}/>
        <Ticto   onClick={()=>handelindex(8)}  value={count[8]}/>
       </div>
       </>
      ) }

    
    </div>
  )
}

export default Game
