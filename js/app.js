'use strict';

$(document).ready(function() {

    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target = $(this).next();
        if (!target.hasClass('active')) {
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
        return false;
    });

    $('.product-links-wap a').click(function() {
        var this_src = $(this).children('img').attr('src');
        $('#product-detail').attr('src', this_src);
        return false;
    });
    $('#btn-minus').click(function() {
        var val = $("#var-value").html();
        val = (val == '1') ? val : val - 1;
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
    });
    $('#btn-plus').click(function() {
        var val = $("#var-value").html();
        val++;
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
    });
    $('.btn-size').click(function() {
        var this_val = $(this).html();
        $("#product-size").val(this_val);
        $(".btn-size").removeClass('btn-secondary');
        $(".btn-size").addClass('btn-success');
        $(this).removeClass('btn-success');
        $(this).addClass('btn-secondary');
        return false;
    });

});

// Spinner


// angular-js
var app = angular.module('techwiz', [])

app.controller('AppCtrl', function($scope) {
    // nav

    $scope.closeNav = function() {
        document.querySelector('.openmenu').classList.toggle("active");
        document.getElementById("mySidenav").classList.toggle("active");
    }
    $scope.openMenu = function() {
        document.querySelector('.openmenu').classList.toggle("active");
        document.getElementById("mySidenav").classList.toggle("active");
    }
    $scope.openMenu_rp = function() {
        document.querySelector('#openmenu').classList.toggle("active");
        document.getElementById("mySidenav").classList.toggle("active");
    }
    $scope.openMenu_rp = function() {
        document.querySelector('#openmenu').classList.toggle("active");
        document.getElementById("mySidenav").classList.toggle("active");
    }
    $scope.hidden_icon = function() {
            document.querySelector('#openmenu').classList.toggle("h-d");
            document.querySelector(".openmenu").classList.toggle("h-d");
        }
        // box-chát
    $scope.openChat = function() {
        document.querySelector('.chatBox').classList.toggle("active");
    }
    $scope.opboxchat = function() {
            document.querySelector('#chatApp').classList.toggle("active");
        }
        // search
    $scope.search = function() {
        document.querySelector('#search').classList.toggle("active");
    }
    $scope.add_cart = function() {
        document.querySelector('#table-add-cart').classList.toggle("active");
    }

    $scope.user = function() {
        document.querySelector('.menu_tk').classList.toggle("active");

    }
});

//end nav


$('body').ready(function() {
    $(".veen .rgstr-btn button").click(function() {
        $('.veen .wrapper').addClass('move');
        $('.body').css('background', '#e0b722');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function() {
        $('.veen .wrapper').removeClass('move');
        $('.body').css('background', '#ff4931');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });
});

// chat box
$(document).on('scroll', function(e) {
    $('#chatApp').css({
        display: 'block',
    });
})

// map
var mymap = L.map('mapid').setView([20.939345, 106.198792], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Zay Telmplte | Template Design by <a href="https://templatemo.com/">Templatemo</a> | Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([20.939345, 106.198792]).addTo(mymap)
    .bindPopup("<b>Address: </b>thôn lê xá, xã cẩm phúc, Huyện Cẩm Giang, Tỉnh Hải Dương").openPopup();

mymap.scrollWheelZoom.disable();
mymap.touchZoom.disable();


$('#carousel-related-product').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        }
    ]
});

$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
});
// end máp

// user