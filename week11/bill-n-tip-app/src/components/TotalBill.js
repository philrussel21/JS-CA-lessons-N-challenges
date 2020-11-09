import React from 'react';

export default function TotalBill({ bill, tip }) {
	function totalBill(initBill, tip) {
		const tipRate = tip / 100;
		console.log({ tipRate });
		const tipAmt = +initBill * tipRate;
		console.log({ tipAmt });
		console.log({ initBill });
		return +initBill + tipAmt;
	}

	return (
		<div>
			<h1>Total Bill with Tips: ${totalBill(bill, tip)}</h1>
			<h2>Total Tips: ${totalBill(bill, tip) - bill}</h2>
		</div>
	);
}
