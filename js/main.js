const api_url = window.location.protocol.toLowerCase().includes("s")
  ? "https://api-master.onrender.com"
  : "http://localhost:8000";

let menuHidden = true;

const hamburger = document.querySelector("#btn-menu");
hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("is-active");
  $(".menu").animate({ left: menuHidden ? 0 : "-81%" }, 500);
  menuHidden = !menuHidden;
});

// awakeAPI();

setInterval(async () => {
  awakeAPI();
}, 30000);

const numColor = 255;

async function awakeAPI() {
  try {
    const res = await fetch(api_url);
  } catch (error) {
    console.log(error);
  }
}

let baseUrl = window.location.origin;

if (baseUrl.includes('https')) {
  baseUrl += '/kc/'
}

const url = new URL(window.location.href)
const urlParam = url.searchParams.get('c') ? '?c=' + url.searchParams.get('c') : ''

const components = {
  header: `
  <a href="${baseUrl}" class="simple-logo">
      <img src="${baseUrl}/assets/img/logo.svg" width="40" alt="logo" />
    </a>

    <a href="${baseUrl}" class="logo">
      <img src="${baseUrl}/assets/img/logo.svg" width="40" alt="logo" />
      <span>Knowledge Center</span>
    </a>
    <a href="${baseUrl + '/signup.html' + urlParam}" class="btn-credit"><i class="la la-plus"></i>Cadastrar-se</a>
    <nav>
      <a href="">Home</a>
      <a href="">Artigos</a>
      <a href="">Podcast</a>
      <a href="./about.html">Sobre Nós</a>
      <a href="" class="login">
        <img src="./assets/img/user.svg" width="17" alt="" />
      </a>
    </nav>
    <button class="hamburger hamburger--spin btn-menu" type="button" aria-label="Menu" aria-controls="navigation">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  `,
  footer:
    `
    <div class="f-left">
      <img src="${baseUrl}/assets/img/logo.svg" width="60" height="60" alt="logo" />
    </div>
    <div class="f-right">
      <div>
        <h2>Sobre nós</h2>
        <ul>
          <li><a href="./about.html">Missão, Visão e valores</a></li>
        </ul>
      </div>
      <div>
        <h2>Parceiros</h2>
        <ul>
          <li><a href="">Crediinvest</a></li>
          <li><a href="">PowerController</a></li>
          <li><a href="">Hermaak</a></li>
        </ul>
      </div>
      <div>
        <h2>Contacto</h2>
        <ul>
          <li><a href="">(+258) 872081978</a></li>
          <li><a href="mailto:knowledgecenter.kc@gmail.com">knowledgecenter.kc@gmail.com</a></li>
          <li><a href="">Tech Space nº 404</a></li>
        </ul>

        <div class="rs">
          <a href=""><i class="la la-lg la-facebook"></i></a>
          <a href=""><i class="la la-lg la-instagram"></i></a>
          <a href=""><i class="la la-lg la-youtube"></i></a>
        </div>
      </div>
    </div>
    `

}


// COMPNNT
document.querySelector('header').innerHTML = components.header;
document.querySelector('footer').innerHTML = components.footer;