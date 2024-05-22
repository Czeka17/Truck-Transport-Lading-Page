import Hamburger from "hamburger-react";
import classes from "./nav.module.css";
import { useEffect, useState } from "react";
function Nav() {
	const [scrolling, setScrolling] = useState(false);
	const [isOpen, setOpen] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<nav className={classes.nav}>
			<div
				className={`${scrolling ? classes.scrolled : ""} ${classes.scroll}`}
			></div>
			<div className={classes.desktopNav}>
				<ul className={classes.navList}>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#about'>O nas</a>
					</li>
					<li>
						<a href='#fleet'>Flota</a>
					</li>
					<li>
						<a href='#contact'>Kontakt</a>
					</li>
				</ul>
			</div>
			<div className={classes.mobileNav}>
				<div className={classes.hamburger}><Hamburger toggled={isOpen} toggle={setOpen} /></div>
			 <ul className={`${classes.navListMobile} ${isOpen && classes.open}`}>
					<li>
						<a href='#home' onClick={() => setOpen(false)}>Home</a>
					</li>
					<li>
						<a href='#about' onClick={() => setOpen(false)}>O nas</a>
					</li>
					<li>
						<a href='#fleet' onClick={() => setOpen(false)}>Flota</a>
					</li>
					<li>
						<a href='#contact' onClick={() => setOpen(false)}>Kontakt</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Nav;
