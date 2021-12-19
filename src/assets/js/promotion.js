jQuery(document).ready(function ($) {
    const linkItems = document.querySelectorAll(".header__nav__item");
    const links = document.querySelectorAll(".header__nav__menu");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        const currentClass = this;
        const currentClassParent = currentClass.parentElement;
        console.log(currentClass.className);
        if (currentClassParent.classList.contains('on')) {

        } else {
            [].forEach.call(linkItems, function (el) {
                el.classList.remove("on");
            });
            currentClassParent.classList.add('on');

        }
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    //서울 지도 및  카드 리스
    const mapLinks = document.querySelectorAll(".map_list button");
    const map = document.querySelector(".map");
    const mapCard = document.querySelector(".map_card");
    mapLinks.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const index = Array.from(mapLinks).indexOf(e.target);
            let classes = ['v1', 'v2', 'v3', 'v4', 'v5']
            map.classList.remove(...classes);
            mapCard.classList.remove(...classes);

            map.classList.add(`v${index + 1}`);
            mapCard.classList.add(`v${index + 1}`);
        })
    })

    let $win = window;
    let cardWidth = 250;
    let cardHeight = 400;
    var screenWidth = cardWidth / 2,
        screenHeight = cardHeight / 2,
        $elems = document.querySelectorAll(".elem"),
        validPropertyPrefix = "",
        otherProperty = "perspective(1000px)",
        elemStyle = $elems[0].style;

    if (typeof elemStyle.webkitTransform == "string") {
        validPropertyPrefix = "webkitTransform";
    } else if (typeof elemStyle.MozTransform == "string") {
        validPropertyPrefix = "MozTransform";
    }

    for (let i = 0; i < $elems.length; i++) {
        $elems[i].addEventListener("mousemove", function (e) {
            e.preventDefault();
            var centroX = e.offsetX - screenWidth,
                centroY = screenHeight - (e.offsetY + 23),
                degX = centroX * 0.14,
                degY = centroY * 0.12,
                $elem;

            $elem = $elems[i];
            $elem.style[validPropertyPrefix] =
                otherProperty + "rotateY(" + degX + "deg)  rotateX(" + degY + "deg)";
        });
        $elems[i].addEventListener("mouseleave", function (e) {
            e.preventDefault();
            $elems[i].style[validPropertyPrefix] = "none";
        });
        $elems[i].addEventListener("click", function (e) {
            e.preventDefault();
            const layer = $elems[i].parentElement.querySelector('.card_list_ly');

            layer.classList.add('on');
        });
    }
    //버튼 닫기
    const dialogBtns = document.querySelectorAll('.card_list_ly button');
    for (let i = 0; i < dialogBtns.length; i++) {
        dialogBtns[i].addEventListener('click', (e) => {
            e.preventDefault();
            e.target.closest('.card_list_ly').classList.remove('on');
        });
    }
    const lyVoteClose = document.querySelectorAll('.ly_vote_close');
    for (let i = 0; i < lyVoteClose.length; i++) {
        console.log("imhere");
        lyVoteClose[i].addEventListener('click', (e) => {
            e.preventDefault();
            e.target.closest('.ly_vote').classList.remove('on');
        });
    }
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
    new WOW().init();
});

