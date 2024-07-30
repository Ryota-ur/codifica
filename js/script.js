new WOW().init();

const topswiper = new Swiper('.topswiper', {
    // Optional parameters
    loop: true,
    slidesPerView: '1',
    effect: 'fade',
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
    },
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const swiper = new Swiper('.swiper', {

    // Optional parameters
    loop: true,
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 'auto',
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    
    spaceBetween: 10,//768px以下のcardの間隔
    breakpoints: {//ブレイクポイント 768px
        768: {
        spaceBetween: 20, //768px以上のcardの間隔
     }
    }
    });


jQuery('a[href^="#"]').on('click',function(){
var header = jQuery('.header').innerHeight();
var id= jQuery(this).attr('href');
var position = 0;
if ( id != '#'){
    position = jQuery(id).offset().top - header;
}
jQuery('html,body').animate({
scrollTop:position
} ,
500);
});

// クラスの切り替えを処理する関数
function toggleDrawer() {
    document.querySelector('.drawer__icon').classList.toggle('is-active');
    document.querySelector('.drawer__content').classList.toggle('is-active');
}

// クラスの削除を処理する関数
function closeDrawer() {
    document.querySelector('.drawer__icon').classList.remove('is-active');
    document.querySelector('.drawer__content').classList.remove('is-active');
}

// アイコンのクリックイベントリスナー
document.querySelector('.drawer__icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleDrawer();
});

// リンクのクリックイベントリスナー
document.querySelectorAll('.drawer__content--link').forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        closeDrawer();
    });
});
