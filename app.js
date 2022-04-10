var buyBtns = document.querySelectorAll('.js-buy-ticket');
var modalElement = document.querySelector('.modal')
var modalClose = document.querySelector('.js-modal-close')
var modalContainer = document.querySelector('.js-modal-container')


for (const index in buyBtns) {
    if (Object.hasOwnProperty.call(buyBtns, index)) {
        const element = buyBtns[index];
        element.addEventListener('click', function (e) {
            e.preventDefault();
            modalElement.classList.add('open');
        })
    }
}

modalClose.addEventListener('click', function (e) {
    modalElement.classList.remove('open');
})

modalElement.addEventListener('click', function (e) {
    modalElement.classList.remove('open');

})

modalContainer.addEventListener('click', function (e) {
    e.stopPropagation();
})


//header responsive
var header = document.getElementById('header');

var mobileMenu = document.querySelector('.mobile-menu-btn');
var headerHeight = header.clientHeight;

//đóng mở mobile menu
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;

    }
}

//tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (const key in menuItems) {
    const menuItem = menuItems[key];
    console.log(menuItem);
   
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling
        && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }

}
