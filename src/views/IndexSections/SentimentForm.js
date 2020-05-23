/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import positive from "../../assets/img/emojis/svg/005-happy.svg";
import negative from "../../assets/img/emojis/svg/002-sad.svg";
import neutral from "../../assets/img/emojis/svg/015-shock.svg";

// reactstrap components
import { Input, Container, Row, Col, FormGroup } from "reactstrap";
let doneTypingInterval = 500;
let typingTimer;
let value;
class SentimentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emoji: neutral,
		};

		this.setEmoji = this.setEmoji.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	setEmoji(r) {
		if (r.success) {
			if (r.confidence > 75.0) {
				if (r.sentiment === "positive") {
					this.setState({
						emoji: positive,
					});
				} else {
					this.setState({
						emoji: negative,
					});
				}
			} else {
				this.setState({
					emoji: neutral,
				});
			}
		} else {
			this.setState({
				emoji: neutral,
			});
		}
	}
	onChange(e) {
		clearTimeout(typingTimer);
		value = e.target.value;
		typingTimer = setTimeout(() => {
			var formdata = new FormData();
			formdata.append("msg", value);
			var requestOptions = {
				method: "POST",
				body: formdata,
				redirect: "follow",
			};

			fetch("http://varunirani.pythonanywhere.com/predict", requestOptions)
				.then((response) => response.text())
				.then((result) => {
					let r = JSON.parse(result);
					this.setEmoji(r);
				})
				.catch((error) => console.log("error", error));

			clearTimeout(typingTimer);
		}, doneTypingInterval);
	}
	render() {
		return (
			<div className='section section-basic' id='basic-elements'>
				<img alt='...' className='path' src={require("assets/img/path1.png")} />
				<Container>
					<h2 className='title'>Try it</h2>
					<h3>
						Type in the text box below and see your sentiment ( preferably in
						English{" "}
						<span role='img' aria-label=''>
							😅
						</span>
						)<br></br> It takes some time for the sentiment to come through
					</h3>
					<div id='inputs'>
						<Row>
							<Col lg='8' sm='6'>
								<FormGroup>
									<Input
										defaultValue=''
										placeholder='Blah....blah....something'
										type='text'
										size='lg'
										onChange={this.onChange}
									/>
								</FormGroup>
							</Col>
							<Col lg='4' sm='6' className='mb-auto'>
								<img
									src={this.state.emoji}
									alt='Emoji'
									width='15%'
									height='100%'
								/>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		);
	}
}

export default SentimentForm;
