import "./App.css";
import { useEffect } from "react";
import Header from "./components/header";
import About from "./components/about";
import Fleet from "./components/fleet";
import Nav from "./components/nav";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='App'>
			<Nav />
			<Header />
			<About />
			<Fleet />
			<Contact />
			<hr className='line' />
			<Footer />
		</div>
	);
}

export default App;
