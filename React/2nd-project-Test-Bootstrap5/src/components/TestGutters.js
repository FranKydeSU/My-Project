import React from 'react';

function TestGutters() {
	return (
		<>
			<div className="container-context ">
				<p className="text-center">
					<b>TestGutters</b>
				</p>
				<div className="row gx-5">
					<p className="text-center">gx-5</p>
					<div className="col">
						<div className="p-3 border">Custom column padding</div>
					</div>
					<div className="col">
						<div className="p-3 border">Custom column padding</div>
					</div>
				</div>
				<div className="row gx-3">
					<p className="text-center">gx-3</p>
					<div className="col">
						<div className="p-3 border">Custom column padding</div>
					</div>
					<div className="col">
						<div className="p-3 border">Custom column padding</div>
					</div>
				</div>
				<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
					<div className="col">
						<div className="p-3 border bg-light">Row column</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TestGutters;
