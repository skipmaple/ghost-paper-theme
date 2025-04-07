// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import '../css/index.css';

// Import JS
import menuOpen from './menuOpen';
import infiniteScroll from './infiniteScroll';

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
