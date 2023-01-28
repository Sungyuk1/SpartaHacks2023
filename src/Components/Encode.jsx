import React, { useState } from 'react'

function Encode() {
    const [image, setImage] = useState();
    const [walletkeys, setWalletKeys] = useState()

    function onImageChange(e) {
        setImage(e.target.files);
    }

    function onTextInput(e){
        setWalletKeys(e.target.value)
    }

    function onEncodeButtonClick(){
        alert('Encode Button Clicked')
    }

  return (
    <div className='flex flex-col bg-blue-400'>
        <p className='text-4xl'>Encode Screen</p>
        <input className="m-4 w-1/4" type="file" accept="image/*" onChange={onImageChange}/>
        <input className="w-1/4 m-4" type="text" onChange={onTextInput}/>
        <p className='mx-4'>{walletkeys}</p>
        <div className="bg-black w-2/12 rounded-md flex justify-center mx-4">
            <button className="text-white" onClick={onEncodeButtonClick}>Encode Image</button>
        </div>
    </div>
  )
}

export default Encode