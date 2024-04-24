import classes from './contactModal.module.css'
interface ContactModalProps{
    onModalClose: () => void,
    title:string;
    paragraph:string;
    canCloseModal: boolean;
}
function ContactModal({onModalClose,title,paragraph,canCloseModal}:ContactModalProps){
    function CloseModal(){
        if(canCloseModal){
            onModalClose()
        }
    }
    return <div className={classes.modal}>
        <div className={classes.backdrop} onClick={CloseModal}>

        </div>
        <div className={classes.context}>
            <button className={classes.closeBtn}>X</button>
            <p>
                {title}
            </p>
            <p>
             {paragraph}
            </p>
            <button className={`${classes.okBtn} ${!canCloseModal && classes.btnDisabled}`} onClick={CloseModal}>
                Ok
            </button>
        </div>
    </div>
}
export default ContactModal;