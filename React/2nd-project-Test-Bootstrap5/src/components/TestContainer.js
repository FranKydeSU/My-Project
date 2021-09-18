import React from 'react';

function TestContainer() {
	return (
		<>
			<div className="container-context">
				<p className="text-center">
					<b>TestContainer</b>
				</p>
				<div className="container text-center">
					<p className="text-center">This is default container</p>
				</div>
				<div className="container-fluid">
					<p className="text-center">This is container-fluid</p>
				</div>
				<p className="text-center">
					ลองเลื่อนจอให้เล็กลง เพื่อดูความแตกต่าง
				</p>
				<div className="row">
					<div className="col-sm">
						<p>This is 1st col-sm [≥576px]</p>
					</div>
					<div className="col-sm">
						<p>This is 1st col-sm [≥576px]</p>
					</div>
					<div className="col-sm">
						<p>This is 1st col-sm [≥576px]</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md">
						<p>This is 1st col-md [≥768px]</p>
					</div>
					<div className="col-md">
						<p>This is 1st col-md [≥768px]</p>
					</div>
					<div className="col-md">
						<p>This is 1st col-md [≥768px]</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg">This is 1st col-lg [≥992px]</div>
					<div className="col-lg">This is 2nd col-lg [≥992px]</div>
					<div className="col-lg">This is 3rd col-lg [≥992px]</div>
				</div>
				<p className="text-center">
					ยังมี xs ที่น้อยกว่า [576px], xl [≥1200px] และ xxl [≥1400px]
				</p>
				<div className="row justify-content-start">
					<div className="col-4">
						One of two columns-4 justify-content-start
					</div>
					<div className="col-4">
						One of two columns-4 justify-content-start
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-4">
						One of two columns-4 justify-content-center
					</div>
					<div className="col-4">
						One of two columns-4 justify-content-center
					</div>
				</div>
				<div className="row justify-content-end">
					<div className="col-4">
						One of two columns-4 justify-content-center
					</div>
					<div className="col-4">
						One of two columns-4 justify-content-center
					</div>
				</div>
			</div>
		</>
	);
}

export default TestContainer;
