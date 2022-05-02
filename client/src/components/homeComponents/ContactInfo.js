/** @format */

import React from "react";

const ContactInfo = () => {
	return (
		<div className='contactInfo container'>
			<div className='row'>
				<div className='col-12 col-md-4 contact-Box'>
					<div className='box-info'>
						<div className='info-image'>
							<i className='fas fa-phone-alt'></i>
						</div>
						<h5>Call Us</h5>
						<p>0000000</p>
					</div>
				</div>
				<div className='col-12 col-md-4 contact-Box'>
					<div className='box-info'>
						<div className='info-image'>
							<i className='fas fa-map-marker-alt'></i>
						</div>
						<h5>Headquarter</h5>
						<p>Stockholm Sweden</p>
					</div>
				</div>
				<div className='col-12 col-md-4 contact-Box'>
					<div className='box-info'>
						<div className='info-image'>
							<i className='fas fa-fax'></i>
						</div>
						<h5>email</h5>
						<p>info@ephrem.se</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
