import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Home extends Component {
	render() {
		return(
			<section id="home">
				<Grid>
					<Row>
						<Col xs={12} md={12}>
							<div classNameName="home-wrapper">
								<header className="special">
									<h2>Sem turpis amet semper</h2>
									<p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
								</header>
								<div className="highlights">
									<section>
										<div className="content">
											<header>
												<a href="#" className="icon fa-vcard-o"><span className="label">Icon</span></a>
												<h3>Feugiat consequat</h3>
											</header>
											<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
										</div>
									</section>
									<section>
										<div className="content">
											<header>
												<a href="#" className="icon fa-files-o"><span className="label">Icon</span></a>
												<h3>Ante sem integer</h3>
											</header>
											<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
										</div>
									</section>
									<section>
										<div className="content">
											<header>
												<a href="#" className="icon fa-floppy-o"><span className="label">Icon</span></a>
												<h3>Ipsum consequat</h3>
											</header>
											<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
										</div>
									</section>
									<section>
										<div className="content">
											<header>
												<a href="#" className="icon fa-line-chart"><span className="label">Icon</span></a>
												<h3>Interdum gravida</h3>
											</header>
											<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
										</div>
									</section>
									<section>
										<div className="content">
											<header>
												<a href="#" className="icon fa-paper-plane-o"><span className="label">Icon</span></a>
												<h3>Faucibus consequat</h3>
											</header>
											<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
										</div>
									</section>
									<section>
										<div className="content">
											<header>
												<a href="#" className="icon fa-qrcode"><span className="label">Icon</span></a>
												<h3>Accumsan viverra</h3>
											</header>
											<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
										</div>
									</section>
								</div>
							</div>
						</Col>
					</Row>
				</Grid>
			</section>
		)
	}
}

export default Home;