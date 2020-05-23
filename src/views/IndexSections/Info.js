import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Info extends React.Component {
	render() {
		return (
			<div
				className='section section-download'
				data-background-color='black'
				id='download-section'>
				<img alt='...' className='path' src={require("assets/img/path1.png")} />
				<Container>
					<Row className='justify-content-md-center'>
						<Col className='text-center' lg='8' md='12'>
							<h2 className='title'>What is Sentiment Analysis?</h2>
							<h4 className='description'>
								Sentiment analysis is the interpretation and classification of
								emotions (positive, negative and neutral) within text data using
								text analysis techniques. Sentiment analysis allows businesses
								to identify customer sentiment toward products, brands or
								services in online conversations and feedback.
							</h4>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Info;
