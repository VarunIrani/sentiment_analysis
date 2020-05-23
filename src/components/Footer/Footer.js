import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
	render() {
		return (
			<footer className='footer'>
				<Container>
					<Row>
						<Col md='12'>
							<h4 className='title'>Team Nintendo • Sentiment Analysis</h4>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default Footer;
