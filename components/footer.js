customElements.define('footer-new', class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<footer class="footer">
      <hr>
      <div class="footer-left">
          <div class="email-section">
               <h3>Email para contato: </h3>
               <p>museupraquem@gmail.com</p>
          </div>
      </div>
      <div class="footer-center">
           <div class="social-icons">
               <h4 class="footer-text">Acompanhe nossas redes sociais:</h4>
               <a href="https://www.facebook.com/museupraquem/" target="_blank"><img src='/assets/icons-social/facebook (1).svg' class="footer-image" /></a>
               <!-- 
               <a href="http://www.twitter.com"><img src='/assets/icons-social/twitter (1).svg' /></a>
               <a href="http://www.linkedin.com"><img src='/assets/icons-social/linkedin (1).svg' /></a> 
               !-->
               <a href="https://instagram.com/museupraquem?igshid=wa0gzfkea5sk" target="_blank"> <img src="/assets/icons-social/instagram.png" class="footer-image" /> </a>
           </div>
      </div>
       
       <p class="copy">&copy; Copyright 2020. Museu pra quem?</p>
   </footer>`;
    }
    
  });
  
