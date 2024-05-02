import React, { useState } from 'react'

function Vote() {

const [congress,setCongress]=useState(0)
const [bjp,setBjp]=useState(0)
const [umbrella,setUmbrella]=useState(0)
const [farm,setFarm]=useState(0)
const [wheel,setWheel]=useState(0)
function HandleClick(sign){
    if(sign=='congress'){
        setCongress(c=>c+1)
    }
    else if(sign=='bjp'){
        setBjp(c=>c+1)
    }
    else if(sign=='umbrella'){
        setUmbrella(c=>c+1)
    }
    else if(sign=='farm'){
        setFarm(c=>c+1)
    }
    else if(sign=='wheel'){
        setWheel(c=>c+1)
    }
}

function handleWinner() {
    const votes = { congress, bjp, umbrella, farm, wheel };
    const winner = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
    alert(`The winner is: ${winner.toUpperCase()}`);
    setCongress(0)
    setBjp(0)
    setUmbrella(0)
    setFarm(0)
    setWheel(0)
  }


  return (
    <div id='machine'>
        <h1>
            Firse Sochle Ek Baar!!!
        </h1><hr/>
        <div className='wrapper'>
            <div className='row'>
                <img src='congress.jpg'></img>
                <i className='fas fa-arrow-alt-circle-left'></i>
                <div className='click' onClick={()=>HandleClick('congress')}></div>
                <div className='vote-count'>{congress}</div>
            </div>
            <div className='row'>
                <img src='bjp.jpg'></img>
                <i className='fas fa-arrow-alt-circle-left'></i>
                <div className='click' onClick={()=>HandleClick('bjp')}></div>
                <div className='vote-count'>{bjp}</div>
            </div>
            <div className='row'>
                <img src='umbrella.jpg'></img>
                <i className='fas fa-arrow-alt-circle-left'></i>
                <div className='click' onClick={()=>HandleClick('umbrella')}></div>
                <div className='vote-count'>{umbrella}</div>
            </div>
            <div className='row'>
                <img src='farm.jpg'></img>
                <i className='fas fa-arrow-alt-circle-left'></i>
                <div className='click' onClick={()=>HandleClick('farm')}></div>
                <div className='vote-count'>{farm}</div>
            </div>
            <div className='row'>
                <img src='wheel.jpg'></img>
                <i className='fas fa-arrow-alt-circle-left'></i>
                <div className='click' onClick={()=>HandleClick('wheel')}></div>
                <div className='vote-count'>{wheel}</div>
            </div>
        </div> 
        <button onClick={handleWinner} className='winner-btn'>Winner</button>       
    </div>
  )
}

export default Vote