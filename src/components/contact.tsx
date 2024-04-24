import classes from "./contact.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import ContactModal from "./contactModal";
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
	const [canCloseModal, setCanCloseModal] = useState(false)
	const [title,setTitle] = useState('')
	const [paragraph,setParagraph] = useState('')
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
		setTitle('Wysyłanie')
		setParagraph('Proszę czekać')
		setCanCloseModal(false)
         try{
			const response = await fetch(`${process.env.REACT_APP_EMAIL_STRING}/baszyn@op.pl`, {
				method:"POST",
				headers:{
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			})
			if (response.ok) {
				setCanCloseModal(true)
				setTitle('Wysłano!')
				setParagraph("Twoja wiadomość została wysłana!")
				setFormData({
					name:"",
					email:"",
					message:""
				})
			} else {
				setCanCloseModal(true)
				setTitle('Błąd!')
				setParagraph('Nie udało się wysłać wiadomości, spróbuj ponownie później lub napisz na baszyn@op.pl')
			}
		 }
		 catch(error){
			setCanCloseModal(true)
				setTitle('Błąd!')
				setParagraph('Nie udało się wysłać wiadomości, spróbuj ponownie później lub napisz na baszyn@op.pl')
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
									<iframe src='https://lottie.host/embed/6921605c-3a6f-49fb-9680-492533eeb2a6/7rEP9bW41w.json'></iframe>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			{showModal && <ContactModal canCloseModal={canCloseModal} onModalClose={closeModalHandler} title={title} paragraph={paragraph} />}
		</section>
	);
}
export default Contact;
