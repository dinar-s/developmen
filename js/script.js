$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

    // Фильтр Lates Works
var btnAll = document.getElementById('btn-all');
var btnWebDesign = document.getElementById('btn-web-design');
var btnUiUxDesign = document.getElementById('btn-ui-ux-design');
var btnMockups = document.getElementById('btn-mockups');

var workWebDesign1 = document.getElementById('web-design1');
var workWebDesign2 = document.getElementById('web-design2');
var workUiUxDesign1 = document.getElementById('ui-ux-design1');
var workUiUxDesign2 = document.getElementById('ui-ux-design2');
var workUiUxDesign3 = document.getElementById('ui-ux-design3');
var workMockups1 = document.getElementById('mockups1');
var workMockups2 = document.getElementById('mockups2');
var workMockups3 = document.getElementById('mockups3');

var viewAll = document.getElementById('view-all');

viewAll.onclick = function(){
    workWebDesign1.style.display = 'block';
    workWebDesign2.style.display = 'block';
    workUiUxDesign1.style.display = 'block';
    workUiUxDesign2.style.display = 'block';
    workUiUxDesign3.style.display = 'block';
    workMockups1.style.display = 'block';
    workMockups2.style.display = 'block';
    workMockups3.style.display = 'block';
    viewAll.style.display = 'none';
}

btnAll.onclick = function(){
    workWebDesign1.style.display = 'block';
    workWebDesign2.style.display = 'block';
    workUiUxDesign1.style.display = 'block';
    workUiUxDesign2.style.display = 'block';
    workUiUxDesign3.style.display = 'block';
    workMockups1.style.display = 'block';
    workMockups2.style.display = 'none';
    workMockups3.style.display = 'none';

    btnAll.classList.add('active');
    btnWebDesign.classList.remove('active');
    btnUiUxDesign.classList.remove('active');
    btnMockups.classList.remove('active');
};

btnWebDesign.onclick = function(){
    workWebDesign1.style.display = 'block';
    workWebDesign2.style.display = 'block';
    workUiUxDesign1.style.display = 'none';
    workUiUxDesign2.style.display = 'none';
    workUiUxDesign3.style.display = 'none';
    workMockups1.style.display = 'none';
    workMockups2.style.display = 'none';
    workMockups3.style.display = 'none';
    
    btnAll.classList.remove('active');
    btnWebDesign.classList.add('active');
    btnUiUxDesign.classList.remove('active');
    btnMockups.classList.remove('active');
};

btnUiUxDesign.onclick = function(){
    workUiUxDesign1.style.display = 'block';
    workUiUxDesign2.style.display = 'block';
    workUiUxDesign3.style.display = 'block';
    workWebDesign1.style.display = 'none';
    workWebDesign2.style.display = 'none';
    workMockups1.style.display = 'none';
    workMockups2.style.display = 'none';
    workMockups3.style.display = 'none';

    btnAll.classList.remove('active');
    btnWebDesign.classList.remove('active');
    btnUiUxDesign.classList.add('active');
    btnMockups.classList.remove('active');
};

btnMockups.onclick = function(){
    workMockups1.style.display = 'block';
    workMockups2.style.display = 'block';
    workMockups3.style.display = 'block';
    workWebDesign1.style.display = 'none';
    workWebDesign2.style.display = 'none';
    workUiUxDesign1.style.display = 'none';
    workUiUxDesign2.style.display = 'none';
    workUiUxDesign3.style.display = 'none';

    btnAll.classList.remove('active');
    btnWebDesign.classList.remove('active');
    btnUiUxDesign.classList.remove('active');
    btnMockups.classList.add('active');
};

    // Фильтр Lates Works


    // Кнопка More View с исчезновением
var moreView = document.getElementById('moreView');
moreView.onclick = function(){
    var infoMoreView = document.getElementById('infoMoreView');
    infoMoreView.style.display = 'block';

    setTimeout(function(){
        $('#infoMoreView').fadeOut('fast')
    } ,2500); 
};

    // Кнопка More View с исчезновением


    // Форма
var send = document.getElementById('send');
var errorForm = document.getElementById('errorForm');
var infoForm = document.getElementById('infoForm');

send.onclick = function(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');

    if (name.value == "" || email.value == "") {
        errorForm.style.display = 'block';
        infoForm.style.display = 'none';
        setTimeout(function(){
            $('#errorForm').fadeOut('fast')
        } ,2000);
    } else {
        errorForm.style.display = 'none';
        infoForm.style.display = 'block';
        setTimeout(function(){
            $('#infoForm').fadeOut('fast')
        } ,2000);
    }
};
    // Форма


$(document).ready(function(){
    $("#navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#headerIcon").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#header-btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

    // Поиск сверху
var searhInput = document.getElementById('header-search');
var searchImg = document.getElementById('search-img');

searchImg.onclick = function(){
    if (searhInput.style.display === 'block') {
        searhInput.style.display = 'none';
    } else {
        searhInput.style.display = 'block';
    }
}
    // Поиск сверху}


    // Моб меню
window.onload= function() {
    document.getElementById('svg-mob-menu').onclick = function() {
        openbox('box', this);
        return false;
    };
};
function openbox(id, toggler) {
    var div = document.getElementById('mob-menu');
    if(div.style.display == 'block') {
        div.style.display = 'none';
        div.style.transition = '1s';
    } else {
        div.style.display = 'block';
        div.style.transition = '1s';
    }
}
    // Моб меню