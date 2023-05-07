import React, { useState } from "react";
import placeholderImg from "../images/placeholder.jpg";
import { ArrowLeftTwoTone, CheckCircleOutline, CloseRounded, PhotoOutlined, UploadFile, UploadOutlined, UploadTwoTone } from "@mui/icons-material";
import { Typography } from "@mui/material";
import axios from 'axios'
const UploadModal = () => {

  const [previewSource , setPreviewSource] = useState('')
  const [fileInputState , setFileInputState] = useState('')

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result); 
    }

  }

  const handleSubmitFile = (e) => {
    e.preventDefault();
    console.log(previewSource)

    if(!previewSource) return ;
    uploadImage(previewSource);
  }
  const uploadImage = async (base64EncodedImage) => {
    try {
      await axios.post('http://localhost:4000/api/upload', { data : previewSource }).then(
        console.log('data sent')
      )
    } catch (error) {
      console.log(error)
    }
  }
	return (
		<div>
			<div className="h-screen w-full top-0 bottom-0 left-0 right-0 fixed bg-black/80 flex items-center justify-center ">
				<div className="md:w-auto flex flex-col md:flex-row">
					<img
						src={previewSource ? previewSource : placeholderImg}
						className="md:w-60 max-h-72 object-cover"
						alt="couldn't load image try refreshing the page"
					/>
					<div className="bg-black pt-4 relative w-auto ">
						<CloseRounded className="absolute top-4 right-6 text-white hover:bg-neutral-800 rounded-full cursor-pointer " />
            <div className="flex items-center justify-center">
              <UploadOutlined className="text-sky-600"/>
              <Typography sx={{fontSize : '20px'}} className="text-transparent bg-gradient-to-r from-sky-500 to-violet-700 bg-clip-text">
                Upload a photo
              </Typography>
            </div>
            <div className="h- bg-gradient-to-r from-blue-500 to-purple-950"></div>
						<form className="flex flex-col items-center gap-4 max-w-lg p-6" onSubmit={handleSubmitFile}>
							<Typography className=' text-neutral-400 text-center ' >
                
								It will be easier for your friends to recognise you if you
								upload your real photos to. You can upload the image in JPG, GIF
								or PNG format
							</Typography>
							<div className="flex flex-wrap gap-1 ">
								<label
									htmlFor="files"
									className="py-3 px-2 bg-neutral-950 flex items-center justify-center gap-1 cursor-pointer rounded-md w-full transition duration-100 hover:bg-neutral-900/70 outline-dashed outline-1 outline-neutral-800">
									<PhotoOutlined className="text-sky-800"/>
                  <span className="bg-gradient-to-r from-sky-400 to-violet-800 text-transparent bg-clip-text font-bold">
                   {previewSource ? 'Change' : 'Upload'} Image

                  </span>
								</label>
								<input type="file" id="files" className="hidden" onChange={handleFileInput} value={fileInputState}/>
               
                <div className="flex gap-2 w-full justify-center pt-3">
                  <button className="bg-neutral-950 text-white py-2 px-8 w-full  rounded-lg whitespace-nowrap transition ">
                    <ArrowLeftTwoTone/>
                    Go back
                  </button>
                  <button type="submit" className="bg-neutral-950 text-white py-2 px-8 w-full rounded-lg transition " disabled={!previewSource}>
                    Done
                  </button>

                </div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadModal;
