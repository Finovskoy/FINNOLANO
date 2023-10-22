// Javascript is not necessary for the button itself

const links = {
    youtube: document.querySelector('.link1'),
    telegram: document.querySelector('.link2'),
    twitch: document.querySelector('.link3'),
    twitter: document.querySelector('.link4')
  };
  
  const backdrop = document.querySelector('.backdrop');
  
  function hideAllLinks() {
    for (let link of Object.values(links)) {
      link.classList.remove('visible');
    }
  }
  
  document.querySelector('.youtube').addEventListener('click', () => {
    hideAllLinks();
    links.youtube.classList.add('visible');
    backdrop.classList.add('visible');
  });
  
  document.querySelector('.telegram').addEventListener('click', () => {
    hideAllLinks();
    links.telegram.classList.add('visible');
    backdrop.classList.add('visible');
  });
  
  document.querySelector('.twitch').addEventListener('click', () => {
    hideAllLinks();
    links.twitch.classList.add('visible');
    backdrop.classList.add('visible');
  });

  document.querySelector('.twitter').addEventListener('click', () => {
    hideAllLinks();
    links.twitter.classList.add('visible');
    backdrop.classList.add('visible');
  });
  
  backdrop.addEventListener('click', () => {
    hideAllLinks();
    backdrop.classList.remove('visible');
  });
  
  // Выбираем кнопку
const btn = document.querySelector(".dark-version");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Если текущий адрес содержит "light-theme.css"
  if (theme.getAttribute("href") == "style.css") {
    // …то переключаемся на "dark-theme.css"
    theme.href = "light.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme.css"
    theme.href = "style.css";
  }
});


function toggledark() {
    if (theme.getAttribute("href") == "style.css") {
    // …то переключаемся на "dark-theme.css"
    theme.href = "light.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme.css"
    theme.href = "style.css";
  }
}