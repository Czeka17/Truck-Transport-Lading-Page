import { FaArrowDown } from "react-icons/fa";
import classes from "./header.module.css";

function Header() {
	return (
		<header
			className={classes.header}
			id='home'
		>
			<div className={classes.con}>
				<div className={classes.corner}></div>
				<div className={classes.cornerTop}></div>
				<div className={`${classes.circle} ${classes.animation}`}>
					<a href="#about">
					<FaArrowDown size={36} />
					</a>
				</div>

				<div className={classes.text}>
					<h1
						data-aos='fade-down'
						data-aos-duration='500'
					>
						TRANSPORT CIĘŻAROWY <br />
						<span>CZEKAŃSKA KATARZYNA</span>
					</h1>
					<p>Przewozy towarów po całej Polsce</p>
				</div>
				<div className={classes.image}></div>
			</div>
		</header>
	);
}
export default Header;
