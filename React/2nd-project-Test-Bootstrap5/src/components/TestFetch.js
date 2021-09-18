import React, { useState, useEffect } from 'react';
import { cloneElement } from 'react';

function TestFetch() {
	const [tmp, setTmp] = useState({});
	useEffect(() => {
		fetch('https://thai-gold-api.herokuapp.com/latest')
			.then((res) => res.json())
			.then((res) => setTmp(res));
	}, []);
	console.log(tmp);

	return <div>{tmp.response.date}</div>;
}

export default TestFetch;
