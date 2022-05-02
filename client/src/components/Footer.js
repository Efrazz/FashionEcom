/** @format */

import React from "react";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='justify-content-center d-flex'>
				<div className='card-name'>
					<img
						alt='mastercard'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png'
					/>
				</div>
				<div className='card-name'>
					<img
						alt='visa'
						src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
					/>
				</div>
				<div className='card-name'>
					<img
						alt='paypal'
						src='https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png'
					/>
				</div>
				<div className='card-name'>
					<img
						alt='express'
						src='https://cdn.shopify.com/s/files/1/0447/7639/0806/files/klarna2_480x480.gif?v=1601733122'
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
