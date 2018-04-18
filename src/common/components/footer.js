import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

class Footer extends Component {
	render() {
		return(
			<Grid>
				<section id="footer">
					<Row>
						<Col xs={12} md={12}>
							<p>&cpoy; Copytright 2018. All rights reserved.</p>
						</Col>
					</Row>
				</section>
			</Grid>		

		)
	}	
}

export default Footer;