import React, { useState } from 'react'

function ImageUpload() {
    const [image, setImage] = useState([]);

    function onImageChange(e) {
        setImage([...e.target.files]);
    }
  return (
    <div>
        <input type="file" accept="image/*" onChange={onImageChange}/>
    </div>
  )
}

export default ImageUpload