import React, { useState } from "react";
import placeholderImg from "../images/placeholder.jpg";
import { CheckCircleOutline, CloseRounded, PhotoOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import axios from 'axios'
const UploadModal = () => {

  const [previewSource , setPreviewSource] = useState('')
  const [fileInpuState , setFileInpuState] = useState('')
  const [selectedFile , setSelectedFile] = useState('')

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result); 
      setSelectedFile(previewSource )
    }

  }

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!selectedFile) return ;
    uploadImage(previewSource);
  }
  const uploadImage = (base64EncodedImage) => {
    console.log(base64EncodedImage)
    try {
      await axios 
    } catch (error) {
      console.log(error)
    }
  }
	return (
		<div>
			<div className="h-screen w-full top-0 bottom-0 left-0 right-0 fixed bg-black/80 flex items-center justify-center ">
				<div className="w-4/5 md:w-auto flex flex-col md:flex-row">
					<img
						src={previewSource ? previewSource : placeholderImg}
						className="md:w-60 object-cover"
						alt="couldn't load image try refreshing the page"
					/>
					<div className="bg-black pt-4 relative w-auto ">
						<CloseRounded className="absolute top-4 right-6 text-white hover:bg-neutral-600 rounded-full cursor-pointer" />
            <div className="text-white flex flex-col items-center gap-2 justify-center w-full">
                  <CheckCircleOutline className="text-green-500"/> image uploaded successfully 
                  
                </div>
						<form className="flex flex-col items-center gap-4 max-w-md p-6" onSubmit={handleSubmitFile}>
							<Typography className=' text-white text-center ' >
                
								It will be easier for your friends to recognise you if you
								upload your real photos to. You can upload the image in JPG, GIF
								or PNG format
							</Typography>
							<div className="flex flex-wrap gap-2 ">
								<label
									htmlFor="files"
									className="p-2 bg-gradient-to-b from from-purple-950 to-purple-600 text-white flex items-center justify-center gap-1 cursor-pointer rounded-lg w-full ">
									<PhotoOutlined />
                  {previewSource ? 'Change' : 'Upload'} Image
								</label>
								<input type="file" id="files" className="hidden" onChange={handleFileInput} value={fileInpuState}/>
               
                <div className="flex gap-2 w-full justify-center pt-3">
                  <button className="bg-neutral-950 text-white py-2 px-8 w-full  rounded-lg whitespace-nowrap">
                    Go back
                  </button>
                  <button type="submit" className="bg-neutral-950 text-white py-2 px-8 w-full rounded-lg">
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
