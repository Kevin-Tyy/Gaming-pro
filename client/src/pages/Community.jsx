import React, { useEffect, useState } from "react";
import Navbar from "../components/Fixed/Navbar";
import Sidebar from "../components/Fixed/Sidebar";
import { fetchFromAPI } from "../utils/apiFetch";
import NextPrevBtns from "../components/Buttons/NextPrevBtns";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
const Community = () => {
	const [developers, setDevelopers] = useState([]);
	const [page, setPage] = useState(1);
	const [isNextPage, setIsNextPage] = useState(null);
	const [isPrevPage, setIsPrevPage] = useState(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		fetchFromAPI("developers", page).then((data) => {
			const { results } = data;
			setDevelopers(results)
			setIsNextPage(data.next);
			setIsPrevPage(data.previous);
			setLoading(false);

		});
	}, [page]);

	return (
		<div>
			<div className="h-full bg-light w-full">
				<div className="grid grid-cols-7 md:grid-cols-8">
					<div className="h-14 md:h-screen fixed bottom-0 w-full md:w-20 bg-neutral-950 md:sticky md:top-0 xl:w-full z-50">
						<Sidebar />
					</div>
					<div className="col-span-7 h-full">
						<Navbar />
						{developers && <div>
								{loading ? (
									<div className="flex items-center justify-center h-screen">
										<CircularProgress sx={{ color: "gray", mb: 40 }} />
									</div>
								) : 
									<div>
										{developers.map((dev)=>(
											<div className="h-64 flex justify-between p-7 rounded-lg bg-neutral-800 m-5">
												<img src={dev.image_background} alt="couldn't load image"  className=" w-80 object-cover "/>
												<div>
													<h5 className="text-white font-black">Name :</h5>
													<h4 className="text-stone-400 text-lg">{dev.name}</h4>
												</div>	
												<div className="">
													<div className="flex flex-row max-w-2xl flex-wrap">

														{dev.games.map((game)=> (
															<Link to={`/games/${game.id}`}>
																<p className="bg-neutral-900 text-white p-1.5 m-1">{game.name}</p>
															
															</Link>

														))}
													</div>
												</div>
											</div>
										))}
									</div>
								
								}

						</div>
						
						}
						<div>
							<NextPrevBtns
								page={page}
								setPage={setPage}
								setLoading={setLoading}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Community;
