// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";


// Call the menu and infinite scroll functions
menuOpen();
infiniteScroll();

// 获取回到顶部按钮
const backToTopButton = document.getElementById('gh-foot-title-back');

// 点击按钮时，平滑滚动到顶部
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});