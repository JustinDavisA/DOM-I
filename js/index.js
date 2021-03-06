const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
const navigation = document.querySelectorAll("a");
navigation[0].textContent = siteContent["nav"]["nav-item-1"];
navigation[1].textContent = siteContent["nav"]["nav-item-2"];
navigation[2].textContent = siteContent["nav"]["nav-item-3"];
navigation[3].textContent = siteContent["nav"]["nav-item-4"];
navigation[4].textContent = siteContent["nav"]["nav-item-5"];
navigation[5].textContent = siteContent["nav"]["nav-item-6"];

//cta
const ctaHead = document.querySelector("h1");
ctaHead.textContent = siteContent["cta"].h1;

const ctaBtn = document.querySelector("h1");
ctaBtn.textContent = siteContent["cta"].button;

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//top main
const featureHead = document.querySelector("div h4");
featureHead.textContent = siteContent["main-content"]["features-h4"];

const featureContent = document.querySelector("div p");
featureContent.textContent = siteContent["main-content"]["features-content"];

const aboutHeader = document.querySelectorAll("div h4");
aboutHeader[1].textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelectorAll("div p");
aboutContent[1].textContent = siteContent["main-content"]["about-content"];

//middle main
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom main
const servicesHead = document.querySelectorAll("div h4");
servicesHead[2].textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelectorAll("div p");
servicesContent[2].textContent = siteContent["main-content"]["services-content"];

const productHead = document.querySelectorAll("div h4");
productHead[3].textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelectorAll("div p");
productContent[3].textContent = siteContent["main-content"]["product-content"];

const visionHead = document.querySelectorAll("div h4");
visionHead[4].textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelectorAll("div p");
visionContent[4].textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactHead = document.querySelector(".contact h4");
contactHead.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

// Footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];