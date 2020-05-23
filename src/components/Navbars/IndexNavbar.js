import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
	Collapse,
	NavbarBrand,
	Navbar,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from "reactstrap";

class ComponentsNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseOpen: false,
			color: "navbar-transparent",
		};
	}
	componentDidMount() {
		window.addEventListener("scroll", this.changeColor);
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.changeColor);
	}
	changeColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			this.setState({
				color: "bg-info",
			});
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			this.setState({
				color: "navbar-transparent",
			});
		}
	};
	toggleCollapse = () => {
		document.documentElement.classList.toggle("nav-open");
		this.setState({
			collapseOpen: !this.state.collapseOpen,
		});
	};
	onCollapseExiting = () => {
		this.setState({
			collapseOut: "collapsing-out",
		});
	};
	onCollapseExited = () => {
		this.setState({
			collapseOut: "",
		});
	};
	scrollToDownload = () => {
		document
			.getElementById("download-section")
			.scrollIntoView({ behavior: "smooth" });
	};
	render() {
		return (
			<Navbar
				className={"fixed-top " + this.state.color}
				color-on-scroll='100'
				expand='lg'>
				<Container>
					<div className='navbar-translate'>
						<NavbarBrand to='/' tag={Link} id='navbar-brand'>
							<span>Team Nintendo • </span>
							Sentiment Analysis
						</NavbarBrand>
						<UncontrolledTooltip placement='bottom' target='navbar-brand'>
							Designed and Coded by Laukik, Rehan and Varun
						</UncontrolledTooltip>
						<button
							aria-expanded={this.state.collapseOpen}
							className='navbar-toggler navbar-toggler'
							onClick={this.toggleCollapse}>
							<span className='navbar-toggler-bar bar1' />
							<span className='navbar-toggler-bar bar2' />
							<span className='navbar-toggler-bar bar3' />
						</button>
					</div>
					<Collapse
						className={"justify-content-end " + this.state.collapseOut}
						navbar
						isOpen={this.state.collapseOpen}
						onExiting={this.onCollapseExiting}
						onExited={this.onCollapseExited}>
						<div className='navbar-collapse-header'>
							<Row>
								<Col className='collapse-brand' xs='6'>
									<a
										href='#pablo'
										onClick={(e) => e.preventDefault()}
										className='text-white'>
										Team Nintendo • Sentiment Analysis
									</a>
								</Col>
								<Col className='collapse-close text-right' xs='6'>
									<button
										aria-expanded={this.state.collapseOpen}
										className='navbar-toggler'
										onClick={this.toggleCollapse}>
										<i className='tim-icons icon-simple-remove' />
									</button>
								</Col>
							</Row>
						</div>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default ComponentsNavbar;
