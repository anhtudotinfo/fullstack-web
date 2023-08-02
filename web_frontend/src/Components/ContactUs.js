import './ContactUs.css';
import image_bg from './image3.jpg'; 
import contact_us from './contact-image.jpg';

export default function ContactUs () {
    return (
<div class='bodys' style={{backgroundSize: 'cover', backgroundImage: `url(${image_bg})`}}>
<div class="containers">
  <div class="form-container">
    <div class="left-container" style={{backgroundSize: 'cover', backgroundImage: `url(${contact_us})`}}>
      <div class="left-inner-container">
      <h2 id='h2'>Let's Chat</h2>
      <p id='p-text'>Whether you have a question, want to start a project or simply want to connect.</p>
        <br/>
        <p id='p-text'>Feel free to send me a message in the contact form</p>
    </div>
      </div>
    <div class="right-container">
      <div class="right-inner-container">
        <form action="#" class='form'>
			<h2 id='h2' class="lg-view">Contact</h2>
      <h2 id='h2' class="sm-view">Let's Chat</h2>
           <p id='p-text'>* Required</p>

        <div class="input-contact">
            <input  type="text" placeholder="Name *"  />
            <input type="email" placeholder="Email *" />
			<input type="text" placeholder="Company" />
			<input type="phone" placeholder="Phone" />
        </div>
          <textarea id='textarea' rows="3" placeholder="Message"></textarea>
			<button id='button-contact'>Submit</button>
		</form>
      </div>
    </div>
  </div>
</div>
</div>
    )
}