import './LearnMore.css';
import bg from './tech_bg.jpg';

export default function LearnMore() {
    return (

<div class="sbody" style={{backgroundSize: 'cover', backgroundImage: `url(${bg})`}}>
<link href='https://fonts.googleapis.com/css?family=Fira Code' rel='stylesheet'></link>
  <section class="">
    <h1 class="section__title" style={{fontFamily: 'Fira Code'}}>
      Reliable, efficient delivery
      <span style={{fontFamily: 'Fira Code'}}>Powered by Technology</span>
    </h1>
    <p class="section__desc" style={{fontFamily: 'Fira Code', fontSize: '16px', color: 'whitesmoke'}}>One platform - many tools - Æ Power Platform provides
    a real world approach to improve user experience</p>
    <div class="features">
      <div class="feature feature-one" style={{backgroundColor: 'azure'}}>
        <h2 class="feature__title" style={{fontFamily: 'Fira Code'}}>E-Store</h2>
        <p class="feature__desc" style={{fontFamily: 'Fira Code'}}>Offers end-users a variety of microtransactions and products</p>
        <img class="feature__img" src="" alt=""/>
      </div>
      <div class="wrapper">
        <div class="feature feature-two" style={{backgroundColor: 'azure'}}>
          <h2 class="feature__title" style={{fontFamily: 'Fira Code'}}>Secure Æ Crypto Mining</h2>
          <p class="feature__desc" style={{fontFamily: 'Fira Code'}}>Offers premium security at unprecedented hash rates</p>
          <img class="feature__img" src="" alt=""/>
        </div>
        <div class="feature feature-three" style={{backgroundColor: 'azure'}}>
          <h2 class="feature__title" style={{fontFamily: 'Fira Code'}}>Chatbot</h2>
          <p class="feature__desc" style={{fontFamily: 'Fira Code'}}>Provides end-users with 24/7 online support from our dedicated chatbot Varana</p>
          <img class="feature__img" src="" alt=""/>
        </div>
      </div>
      <div class="feature feature-four" style={{backgroundColor: 'azure'}}>
        <h2 class="feature__title" style={{fontFamily: 'Fira Code'}}>Market Conversion</h2>
        <p class="feature__desc" style={{fontFamily: 'Fira Code'}}>Allows end-users to convert their crypto balances into U$D</p>
        <img class="feature__img" src="" alt=""/>
      </div>
    </div>

  </section>

</div>

    )
}