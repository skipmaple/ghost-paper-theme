// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/index.css';

// Import JS
import menuOpen from './menuOpen';
import infiniteScroll from './infiniteScroll';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Call the menu and infinite scroll functions
menuOpen ();
infiniteScroll ();

// 获取回到顶部按钮
const backToTopButton = document.getElementById ('gh-foot-title-back');

// 点击按钮时，平滑滚动到顶部
backToTopButton.addEventListener ('click', () => {
  window.scrollTo ({
    top: 0,
    behavior: 'smooth', // 平滑滚动
  });
});

const ghHead = document.querySelector ('.gh-head');

const ghTitle = document.querySelector ('.gh-title');

if (ghTitle) {
  let lastScrollY = window.scrollY; // 上次滚动位置

  // 监听滚动事件
  window.addEventListener ('scroll', () => {
    const currentScrollY = window.scrollY; // 当前滚动位置
    const titleRect = ghTitle.getBoundingClientRect (); // 获取标题的位置

    if (currentScrollY > lastScrollY) {
      // 向下滚动
      if (titleRect.top > 0) {
        ghHead.classList.remove ('hidden');
      } else {
        ghHead.classList.add ('hidden');
      }
    } else {
      // 向上滚动
      ghHead.classList.remove ('hidden');
    }

    lastScrollY = currentScrollY; // 更新上次滚动位置
  });
}

const cardColors = [
  ['#f4d06f', '#4c3906'],
  ['#d8d9f1', '#363b8f'],
  ['#cee0dc', '#073429'],
  ['#f8e6ea', '#e20a39'],
  ['#fff7f4', '#121212'],
];

// Select all cards
const cards = document.querySelectorAll ('.gh-tag-card');

// Assign a random color to each card
cards.forEach ((card, index) => {
  const randomIndex = index % cardColors.length;
  const randomColor = cardColors[randomIndex];

  // Dynamically create a CSS class for the random card color
  const style = document.createElement ('style');
  style.type = 'text/css';
  style.innerHTML = `
        .gh-tag-card-color-${index} .gh-tag-card-name-bar {
            background-color: ${randomColor[0]};
            border-color: ${randomColor[1]};
            color: ${randomColor[1]};
        }

        .gh-tag-card-color-${index} .gh-tag-card-link {
            background-color: ${randomColor[0]};
            color: ${randomColor[1]};
        }

        .gh-tag-card-color-${index} .gh-tag-card-desc {
            background-color: ${randomColor[1]};
            color: ${randomColor[0]};
        }

        .gh-tag-card-color-${index} .gh-tag-card-desc-title {
            border-color: ${randomColor[0]};
        }
    `;
  document.head.appendChild (style);

  // Add the unique class to the card
  card.classList.add (`gh-tag-card-color-${index}`);
});

// gh-tag-card-swiper
const swiper = new Swiper ('.gh-tags-swiper', {
  freeMode: true,
  mousewheel: true,
  slidesPerView: 2.4,
  spaceBetween: 25,
});

// Add custom wheel event listener
const swiperContainer = document.querySelector(".gh-tags-swiper");

swiperContainer.addEventListener("wheel", (event) => {
  const deltaY = event.deltaY;

  // Check if Swiper is at the beginning or end
  const isAtStart = swiper.isBeginning && deltaY < 0; // Scrolling up at the start
  const isAtEnd = swiper.isEnd && deltaY > 0; // Scrolling down at the end


  if (isAtStart || isAtEnd) {
    // Allow vertical scrolling
    document.body.style.overflowY = "auto";
    window.scrollBy({ top: deltaY });
  } else {
    // Prevent vertical scrolling and scroll Swiper horizontally
    event.preventDefault();
    document.body.style.overflowY = "hidden";
    swiperContainer.scrollLeft += deltaY; // Scroll horizontally
  }
});