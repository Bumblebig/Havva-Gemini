import { useNavigate } from "react-router-dom"
import Button from "../../../components/ui/Button"

const ContactLink = () => {

    const navigate = useNavigate();

  return (
    <section className="contact-link">
        <div className="contact-link-wrapper">
            <div className="contact-link-text">
                <h1>Got a question?</h1>
                <p>Or want to learn more about what we offer and how you can get involved?</p>
                <Button size={'xl'} onClick={()=> navigate('/contact')} variant={'btn-primary'} >Contact Us</Button>
            </div>
            <div className="contact-img">
                
            </div>
        </div>
    </section>
  )
}

export default ContactLink