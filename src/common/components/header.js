import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Header extends Component {

	render() {
		return (
			<Grid>
				<section id="header">
					<Row>
						<Col xs={12} md={12}>
							<nav className="navbar navbar-inverse">
						    <div className="navbar-header">
						      <Link className="navbar-brand" to="javascript:void(0)">React Blog</Link>
						    </div>
						    <ul className="nav navbar-nav">
						      <li><Link to="/home">Home</Link></li>
						      <li><Link to="/blog">Blog</Link></li>
						    </ul>
							</nav>
						</Col>
					</Row>
				</section>
			</Grid>			
		)
	}
}

export default Header;