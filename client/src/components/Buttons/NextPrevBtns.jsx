import React from "react";

const NextPrevBtns = ({ isNextPage , setPage , page , isPrevPage , setLoading}) => {
	const handlePrevPageClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		if (page > 1) {
			setPage(page - 1);
		}
		setLoading(true);
	};

	const handleNextPageClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		if (isNextPage) {
			setPage(page + 1);
		}
		setLoading(true);
	};

	return (
		<div>
			<div className="flex justify-center items-center mb-14">
				<div className="w-full bg-slate-950 p-4 rounded-md flex justify-center mt-9">
					<button
						onClick={handlePrevPageClick}
						className="border border-white py-2 px-7 text-white rounded-sm mr-1 hover:bg-slate-900 active:scale-95">
						Prev
					</button>
					<button
						onClick={handleNextPageClick}
						className="border border-white py-2 px-7 text-white rounded-sm hover:bg-slate-900 ml-1 active:scale-95">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default NextPrevBtns;
