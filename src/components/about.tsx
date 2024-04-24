import classes from "./about.module.css";
import { FaBox, FaTruckMoving } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import SvgComponent from "./SvgComponent";

function About() {
	return (
		<section className={classes.about} id="about">
			<SvgComponent/>
			<div className={classes.con}>
			<h2 className={classes.title}>O NAS</h2>
				<div className={classes.aboutText}>
					<p>
						Nasz transport to dynamiczna firma transportowa z ponad 27-letnim
						doświadczeniem w branży. Od momentu naszego założenia konsekwentnie
						dostarczamy wysokiej jakości usługi transportowe klientom w kraju.
					</p>
				</div>
				<div
					className={classes.cardContainer}
					data-aos='fade-up'
				>
					<div className={classes.card}>
						<FaTruckMoving size={48} />
						<p>Zapewniamy przewóz towarów po całej Polsce</p>
					</div>
					<div className={classes.card}>
						<FaStar size={48} />
						<p>Od 27 Lat na rynku działamy jako transport</p>
					</div>
					<div className={classes.card}>
						<FaBox size={48} />
						<p>Oferujemy szybkie dostawy zawsze na czas</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default About;
