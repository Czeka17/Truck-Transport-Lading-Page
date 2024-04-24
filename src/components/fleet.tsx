import { FaTruck, FaTruckMoving } from "react-icons/fa";
import classes from "./fleet.module.css";
function Fleet() {
	return (
		<section className={classes.fleet} id="fleet">
			<FaTruckMoving className={classes.circle}/>
			<FaTruck className={`${classes.circle} ${classes.second}`}/>
			<div className={classes.con} >
				<h2 className={classes.title}>FLOTA</h2>
				<div className={classes.box} data-aos="zoom-in">
					<div className={classes.imgBox}>
						<img src='./trucks.jpg' alt="Zdjęcie przedstawiające ciężarówke" />
					</div>
					<p>
					Profesjonalna firma transportowa, która zapewnia kompleksowe rozwiązania dostosowane do Twoich potrzeb. Dzięki naszej niezawodnej flocie i doświadczonej załodze, możesz być pewny bezpiecznej i terminowej dostawy Twoich towarów.
					</p>
				</div>
				
				<div className={classes.box} data-aos="zoom-in">
					<p>
					Naszym celem jest zapewnienie sprawnego i niezawodnego funkcjonowania transportu w ramach naszych własnych operacji. Dążymy do ciągłego doskonalenia naszych procesów logistycznych.
					</p>
					<div className={classes.imgBox}>
						<img src='./truck2.jpg' alt="Zdjęcie przedstawiające ciężarówke" />
					</div>
				</div>
			</div>
		</section>
	);
}
export default Fleet;
