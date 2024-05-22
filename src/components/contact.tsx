import classes from "./contact.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import ContactModal from "./contactModal";
import emailjs from "@emailjs/browser";
interface FormData {
	name: string;
	email: string;
	message: string;
}
function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [showModal, setShowModal] = useState(false)
	const [modalText, setModalText] = useState({ title: "Wysyłanie...", paragraph: "Proszę czekać" });
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		console.log(formData);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
		setShowModal(true)
		emailjs.init(`${process.env.REACT_APP_EMAIL_KEY}`);
		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			message: formData.message,
		};
		if (
			formData.name === "" ||
			formData.email === "" ||
			!formData.email.includes("@") ||
			formData.message === ""
		) {
			setModalText({ title: "Błąd!", paragraph: "Niepoprawne dane!" });
			setShowModal(true);
		} else {
			try {
				emailjs
					.send(
						`${process.env.REACT_APP_SERVICE_KEY}`,
						`${process.env.REACT_APP_TEMPLATE_KEY}`,
						templateParams
					)
					.then(() => {
						setModalText({
							title: "Udało się!",
							paragraph: "Email został wysłany! odpowiem na niego wkrótce",
						});
						setShowModal(true);
						setFormData({ name: "", email: "", message: "" });
					})
					.catch(() => {
						setModalText({
							title: "Oj...",
							paragraph: "Coś poszło nie tak, spróbuj ponownie później!",
						});
						setShowModal(true);
						setFormData({ name: "", email: "", message: "" });
					});
			} catch (error) {
				setModalText({
					title: "Oj...",
					paragraph: "Coś poszło nie tak, spróbuj ponownie później!",
				});
				setShowModal(false);
				setFormData({ name: "", email: "", message: "" });
			}
		}
      };
	  function closeModalHandler(){
		setShowModal(false)
	  }
	return (
		<section
			className={classes.Contact}
			id='contact'
		>
			<h2 className={classes.title}>KONTAKT</h2>
			<div className={classes.con}>
				<div
					className={classes.ContactBox}
					data-aos='fade-up'
					aos-animation-delay='3000'
				>
					<div>
						<p>
							Masz pytania dotyczące naszej historii lub działalności?
							Skontaktuj się z nami, chętnie udzielimy odpowiedzi!
						</p>
					</div>
					<hr />
					<div className={classes.ContactBoxBottom}>
						<form onSubmit={handleSubmit}>
							<div className={classes.formBox}>
								<div className={classes.form}>
									<div className={classes.formInputTop}>
										<div className={classes.formInputBox}>
											<input
												type='text'
												id='name'
												name='name'
												required
												value={formData.name}
												onChange={handleChange}
											/>
											<span>Imie</span>
										</div>
										<div className={classes.formInputBox}>
											<input
												type='email'
												id='email'
												name='email'
												required
												value={formData.email}
												onChange={handleChange}
											/>
											<span>Email</span>
										</div>
									</div>
									<div className={classes.formInputTop}>
										<div className={classes.formInputBox}>
											<textarea
												name='message'
												id='message'
												required
												cols={30}
												rows={10}
												value={formData.message}
												onChange={handleChange}
											/>
											<span>Wiadomość</span>
										</div>
									</div>
									<div className={classes.formButton}>
										<button>Wyślij</button>
									</div>
								</div>
								<div className={classes.imgBox}>
									<iframe title="truck" src='https://lottie.host/embed/6921605c-3a6f-49fb-9680-492533eeb2a6/7rEP9bW41w.json'></iframe>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			{showModal && <ContactModal onModalClose={closeModalHandler} title={modalText.title} paragraph={modalText.paragraph} />}
		</section>
	);
}
export default Contact;
