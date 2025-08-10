'use client'
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'

const UploadPage = () => {
  return (
    <CldUploadWidget 
        uploadPreset='cloudnineco'
        onUpload={(result, widget) => {
            console.log(result, widget)
        }}>
        {({ open }) => <button 
        className='btn btn-primary'
        onClick={() => open()}>Upload</button>}
    </CldUploadWidget>
  )
}

export default UploadPage