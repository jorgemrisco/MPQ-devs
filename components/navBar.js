customElements.define('nav-bar', class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<section id = "menu-bar">
        
      <div id="responsive-div">
          <div id="menu-logo">
              <a href="index.html">
                  <img id="logo-reference" src="../assets/images/logo/MPQ-logo-black.png" alt="MPQ-logo-black" height="60px">
              </a>
  </div>
  
      <div id="menu-links">
          <a class="nav-button" href="index.html#quem-somos">Quem Somos?</a>
          <a class="nav-button" href="index.html#listOfMembers">Nossa Equipe</a>
          <a class="nav-button" href="expo_carcere-fem.html">Acervo</a>
          <a class="nav-button" href="mpqrecomenda.html">MPQ Recomenda</a>
          <a class="nav-button" href="index.html#faleConosco">Fale Conosco</a>
          
      </div>
  </div>
  </section>`;
    }
    
  });
  