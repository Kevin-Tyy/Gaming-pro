import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Community = () => {
  return (
    
    <div>
      	<div className="h-full bg-light w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-neutral-950 md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />

						<div>
              				Community
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Community