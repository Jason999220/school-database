// const swiper = new Swiper('.swiper', {
    // 結束完是否直接繼續
    // loop: true,
    // paginationClickable: true,
    // 轉換速度
    // speed : 2000,
    // 自動輪播
    // autoplay: {
        // delay: 2000,
    // },
// })

const swiper = new Swiper('.swiper', {
    // 結束完是否直接繼續
    loop: true,

    pagination: {
        el: ".page",
    },
    nextButton: '.swiper-button-next' ,
    prevButton: '.swiper-button-prev' ,
    speed : 2000,
    // 自動輪播
    autoplay: {
        delay: 2000,
    }
});

// 彈出新增類別
function openAddClass() {
    window.open ("09.新增類別示意圖.html", "newwindow", "height=500, width=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
};

// 彈出新增跑馬燈
function openAddImg() {
    window.open ("10.新增跑馬燈示意圖.html", "newwindow", "height=500, width=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
};

// 彈出新增活動
function openAddEvent() {
    window.open ("11.新增活動示意圖.html", "newwindow", "height=500, width=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
};


