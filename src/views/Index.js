import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import SentimentForm from "views/IndexSections/SentimentForm.js";
import Info from "views/IndexSections/Info.js";

class Index extends React.Component {
	componentDidMount() {
		document.body.classList.toggle("index-page");
	}
	componentWillUnmount() {
		document.body.classList.toggle("index-page");
	}
	render() {
		return (
			<>
				<IndexNavbar />
				<div className='wrapper'>
					<PageHeader />
					<Info />
					<SentimentForm />
					<Footer />
				</div>
			</>
		);
	}
}

export default Index;
