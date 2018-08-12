let i = 0;
let galleriesArray = [];
let galleryArray = [];

function closeModal() {
    $('.closeModal').hide();
    $('.modal').hide();
    i = 0;
    for (j = 0; j < galleriesArray.length; j++) {
    $('#image' + j).attr('src', galleriesArray[j][0]);
    }
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
                var prodNum = response.products.indexOf(prod);

                scripted = scripted + ("function modalShow" + prodNum + "() {$('#modal" + prodNum + "').show();$('.modal').fadeIn();};function imgRight" + prodNum + "() {i++;if (i >= galleriesArray[" + prodNum + "].length) {i = -1; imgRight" + prodNum + "();} else {$('#image" + prodNum + "').attr('src', galleriesArray[" + prodNum + "][i]);}};function imgLeft" + prodNum + "() {i--;if (i < 0) {i = galleriesArray[" + prodNum + "].length;imgLeft" + prodNum + "();} else {$('#image" + prodNum + "').attr('src',galleriesArray[" + prodNum + "][i]);}};");

                $('.modal').append("<div id='modal" + prodNum + "' class='closeModal'></div>")
                
                $('#modal' + prodNum).append("<div class='closePosition' onclick='closeModal()'>&times;</div><div class='modalmainIMG'><div class='leftArrow' onclick='imgLeft" + prodNum + "()'>&#9668;</div><div class='rightArrow' onclick='imgRight" + prodNum + "()'>&#9658;</div><img id='image" + prodNum + "' src='" + prod.images[0].src + "' /></div><div class='modalborder'><div class='modaltitle'>" + prod.title + "</div><div class='modalbodyHTML'>" + prod.body_html + "</div></div>").hide();

                galleryArray = [];

                for (let image of prod.images) {
                    galleryArray.push(image.src);
                }

                galleriesArray.push(galleryArray);

                
                $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn();
            }
            $('.modalScript').append(scripted);
        }
    })
}

$('.header').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                                    
                $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn();
            }
        }
    })
})

$('#clothes').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                
                if ((prod.product_type == 'Short') || (prod.product_type == 'T-Shirt')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn();
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
  
                    $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn();
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

                    $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('input').keyup(function(){
    searchProduct = $(this).val();
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

                    $('.container').append("<div class='product' onclick='modalShow" + response.products.indexOf(prod) + "()'><div class='mainIMG'><img src='" + prod.variants[0].featured_image.src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div><div class='bodyHTML'>" + prod.body_html + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
}