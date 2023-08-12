import React from "react";
import '../Components/FAQ.css';
import faq_bg from './abstract-geometric-background.jpg';

export default function FAQ() {
    
    return (
<main class="main" style={{backgroundImage: `url(${faq_bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

  <section class="faq">
    <h2 id="faq-h1" style={{fontFamily: "Fira Code"}}>Frequently Asked Questions</h2>

    <div class="faq-container">
      <details class="faq-box" open>
        <summary class="faq-header" style={{fontFamily: "Fira Code"}}>
          How do I register on this platform?
        </summary>
        <div class="faq-content">
          <p id="faq-p" style={{fontFamily: "Fira Code"}}>
            Registration is free and always will be. All you have to do is to 
            simply create an account and you will be given unique account numbers in which
            the platform will use for crypto-mining.
          </p>
        </div>
      </details>

      <details class="faq-box">
        <summary class="faq-header" style={{fontFamily: "Fira Code"}}>
          How many options and plans does this platform offer users?
        </summary>
        <div class="faq-content">
          <p id="faq-p" style={{fontFamily: "Fira Code"}}>
            There are basically 3 unique plans in which users can choose from and 
            once a user successfully activates a plan they are bound to that specific plan
            until it expires.
          </p>
        </div>
      </details>

      <details class="faq-box">
        <summary class="faq-header" style={{fontFamily: "Fira Code"}}>
          Explain what the timeout interval denotes
        </summary>
        <div class="faq-content">
          <p id="faq-p" style={{fontFamily: "Fira Code"}}>
            The timeout intervals are used whenever users deposit funds into their bank accounts
            and also when they convert their crypto-currency earnings directly into U$D. 
            Currently the timeout interval is set to 1-day.
          </p>
        </div>
      </details>
    </div>
  </section>

</main>
)
}