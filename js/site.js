function scrollTo(offsetTop) {
    const parent = document.querySelector('html')
    console.log(parent);
    parent.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    })
}

function isWeixinBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("micromessenger") != -1) {
        return true;
    } else {
        return false;
    }
}

function documentReady() {
    // https://bulma.io/documentation/components/navbar/#navbar-menu

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    const $menu_items = document.querySelectorAll('.menu-item')
    if ($menu_items.length > 0) {
        $menu_items.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                let targetEl = document.querySelector(item.hash);
                if (isWeixinBrowser()) {
                    document.querySelector('html').scrollTop = targetEl.offsetTop
                } else {
                    scrollTo(targetEl.offsetTop)
                }

            })
        })
    }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
if (document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', documentReady);
} else {
    // `DOMContentLoaded` has already fired
    documentReady();
}
const titleIndentation = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 7,
}
function traverse(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        // 处理当前节点
        if (titleIndentation[node.tagName]) {
            node.style.marginLeft = titleIndentation[node.tagName] + 'em'
        } else if (node.previousElementSibling && titleIndentation[node.previousElementSibling.tagName]) {
            node.style.marginLeft = titleIndentation[node.previousElementSibling.tagName] + 3 + 'em';
        } else if (node.previousElementSibling && !titleIndentation[node.previousElementSibling.tagName]) {
            node.style.marginLeft = node.previousElementSibling.style.marginLeft;
        }

        // 遍历子节点
        for (let i = 0; i < node.childNodes.length; i++) {
            traverse(node.childNodes[i]);
        }
    }
}

const userAgent = window.navigator.userAgent;
const screenWidth = window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth
const isMobile = /Mobile/i.test(userAgent) || screenWidth < 768
const isTablet = /Tablet/i.test(userAgent) || (screenWidth >= 768 && screenWidth < 1024);
// 从根节点开始遍历整个 DOM 树
if (!isMobile) traverse(document.querySelector('#main-content'));