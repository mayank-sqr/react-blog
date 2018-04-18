import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Blog extends Component {
	render() {
		return (
			<section id="blog">
				<Grid>
					<Row>
						<Col xs={12} md={4}>
							<div className="sidebar-wrapper">
								<ul>
									<li>List One</li>
									<li>List Two</li>
									<li>List Three</li>
									<li>List Four</li>
								</ul>
							</div>
						</Col>
						<Col xs={12} md={8}>
							<Row>
								<Col xs={12} md={3}>
									<div className="card">
				            <div className="card-body">
				              <h4 className="card-title">
				                <a href="#">Project One</a>
				              </h4>
				              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
				            </div>
				          </div>
								</Col>
								<Col xs={12} md={3}>
									<div className="card">
				            <div className="card-body">
				              <h4 className="card-title">
				                <a href="#">Project Two</a>
				              </h4>
				              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
				            </div>
				          </div>
								</Col>
								<Col xs={12} md={3}>
									<div className="card">
				            <div className="card-body">
				              <h4 className="card-title">
				                <a href="#">Project Three</a>
				              </h4>
				              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
				            </div>
				          </div>
								</Col>
								<Col xs={12} md={3}>
									<div className="card">
				            <div className="card-body">
				              <h4 className="card-title">
				                <a href="#">Project Four</a>
				              </h4>
				              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
				            </div>
				          </div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Grid>
			</section>
		)
	}
}

export default Blog;