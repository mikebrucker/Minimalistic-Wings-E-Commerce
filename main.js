function findProducts(){
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                $('.container').append("<div class='product'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
            }
        }
    })
}

$('.header').click(function() {
    findProducts();
})

$('#clothes').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) { 
                if ((prod.product_type == 'Short') || (prod.product_type == 'T-Shirt')) {
                    $('.container').append("<div class='product'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
                }
            }
        }
    })
})

$('#hats').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                if ((prod.product_type == 'Beanie') || (prod.product_type == 'Hat')) {
                    $('.container').append("<div class='product'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
                }
            }
        }
    })
})

$('#accessories').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                if ((prod.product_type == 'Accessories') || (prod.product_type == 'Stickers') || (prod.product_type == 'Umbrella') || (prod.product_type == 'Drink Bottle')) {
                $('.container').append("<div class='product'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
                }
            }
        }
    })
})

$('input').keyup(function(){
    searchProduct = $(this).val();
    console.log(searchProduct);
    $('.container').html("");
    search(searchProduct);
})

function search(searchProduct) {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            for (let prod of response.products) {
                if (prod.title.toLowerCase().includes(searchProduct.toLowerCase()) ===true) {
                    $('.container').append("<div class='product'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
                }
            }
        }
    })
}