$('.header').click(function() {
    findProducts();
})

function closeModal() {
    $('.closeModal').hide();
    $('.modal').hide();
}

function findProducts(){
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            var scripted = "";
            $('.container').html("");
            $('.modal').html("");
            $('.modalScript').html("");
            for (let prod of response.products) {
                
                scripted = scripted + ("function modalShow" + response.products.indexOf(prod) + "() {$('#modal" + response.products.indexOf(prod) + "').show();$('.modal').show();};");
                
                $('.modal').append("<div id='modal" + response.products.indexOf(prod) + "' class='closeModal'>")
                
                $('#modal' + response.products.indexOf(prod)).append("<div class='closePosition' onclick='closeModal()'>&times;</div><div class='modalmainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='modalborder'><div class='modaltitle'>" + prod.title + "</div><div class='modalbodyHTML'>" + prod.body_html + "</div></div>").hide();
                
                $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
            }
            $('.modalScript').append(scripted);
        }
    })
}


$('#clothes').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                
                if ((prod.product_type == 'Short') || (prod.product_type == 'T-Shirt')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
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
  
                    $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
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

                    $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
                }
            }
        }
    })
})

$('input').keyup(function(){
    searchProduct = $(this).val();
    console.log(searchProduct);
    search(searchProduct);
})

function search(searchProduct) {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                if (prod.title.toLowerCase().includes(searchProduct.toLowerCase()) ===true) {

                    $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn(200);
                }
            }
        }
    })
}