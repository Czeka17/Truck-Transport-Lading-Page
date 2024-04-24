import classes from "./footer.module.css";
function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.footerContent}>
				<div>
					<p>Katarzyna Czekańska - Transport Ciężarowy</p>
					<p>Godziny otwarcia - 8-16 pon-piatek</p>
				</div>
				<div>
					<p>Adres: Baszyn 12 56-160 Wińsko</p>
					<p>Email: Baszyn@op.pl</p>
					
				</div>
			</div>
		</footer>
	);
}
export default Footer;
