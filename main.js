let i = 0;
let galleriesArray = [];
let galleryArray = [];

function closeModal() {
    $('.closeModal').fadeOut();
    $('.modal').fadeOut();
    i = 0;
    for (j = 0; j < galleriesArray.length; j++) {
        $('#image' + j).attr('src', galleriesArray[j][0]);
    }
}

// Creates separate modals, makes specific functions for each modal, creates modal gallery, adds sizes
// Sizes and add to cart are for show only

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

                scripted = scripted + ("function modalShow" + prodNum + "() {$('#modal" + prodNum + "').show();$('.modal').fadeIn();};function imgRight" + prodNum + "() {i++;if (i >= galleriesArray[" + prodNum + "].length) {i = -1; imgRight" + prodNum + "();} else {$('#image" + prodNum + "').attr('src', galleriesArray[" + prodNum + "][i]);}};function imgLeft" + prodNum + "() {i--;if (i < 0) {i = galleriesArray[" + prodNum + "].length;imgLeft" + prodNum + "();} else {$('#image" + prodNum + "').attr('src',galleriesArray[" + prodNum + "][i]);}};$('#size" + prodNum + "').click(function() {$('#sizes" + prodNum + "').slideToggle();});");

                $('.modal').append("<div id='modal" + prodNum + "' class='closeModal'></div>");
                
                $('#modal' + prodNum).append("<div class='closePosition' onclick='closeModal()'>&times;</div><div class='modalmainIMG'><div class='leftArrow' onclick='imgLeft" + prodNum + "()'>&#9668;</div><div class='rightArrow' onclick='imgRight" + prodNum + "()'>&#9658;</div><img id='image" + prodNum + "' src='" + prod.images[0].src + "' /></div><div class='modalborder'><div class='modaltitle'>" + prod.title + "</div><button id='cart" + prodNum + "'>Add to Cart</button><div class='size' id='size" + prodNum + "'>Size</div><div class='sizeDropDown' id='sizes" + prodNum + "'></div><div class='modalbodyHTML'>" + prod.body_html + "</div></div>").hide();

                for (let size of prod.variants) {
                    let avail = false;
                    if (size.available === true) {
                        avail = true;
                        $('#sizes' + prodNum).append("<div>" + size.title + "</div>");
                    } else if (avail === false) {
                        $('#size' + prodNum).html("Out of Stock");
                    }
                }

                $('#sizes' + prodNum).hide();

                galleryArray = [];

                for (let image of prod.images) {
                    galleryArray.push(image.src);
                }

                galleriesArray.push(galleryArray);
                
                $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn(150);
            }
            $('.modalScript').append(scripted);
        }
    })
}

// Returns products in specific categories

$('#allItems').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
            }
        }
    })
})

$('#allClothes').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if ((prod.product_type == 'Short') || (prod.product_type == 'T-Shirt')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#mens').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (((prod.product_type == 'Short') || (prod.product_type == 'T-Shirt')) && (prod.tags.includes("Men") || prod.tags.includes("Mens") || prod.tags.includes("Men's"))) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#womens').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (((prod.product_type == 'Short') || (prod.product_type == 'T-Shirt')) && (prod.tags.includes("Women") || prod.tags.includes("Womens") || prod.tags.includes("Women's"))) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#allHeadwear').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if ((prod.product_type == 'Beanie') || (prod.product_type == 'Hat')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
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
                var prodNum = response.products.indexOf(prod);

                if (prod.title.includes('Hat')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#caps').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (prod.title.includes('Cap')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#beanies').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (prod.title.includes('Beanie')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#allAccessories').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if ((prod.product_type == 'Accessories') || (prod.product_type == 'Stickers') || (prod.product_type == 'Umbrella') || (prod.product_type == 'Drink Bottle')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#popSockets').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (prod.tags.includes('popsocket')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#keychains').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (prod.product_type == 'Keychain') {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#backToSchool').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (prod.tags.includes('Umbrella') || prod.tags.includes('Drink') || prod.tags.includes('Sticker') || prod.tags.includes('bag') || prod.tags.includes('Pen') || prod.tags.includes('Pin') || prod.tags.includes('Towel')) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('#bikes').click(function () {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (prod.title.includes('Bike')) {

                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
})

$('input').keyup(function(){
    searchProduct = $(this).val();
    if (searchProduct.length > 2) {
        search(searchProduct);
    }
})

// Returns searched products

function search(searchProduct) {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (prod.title.toLowerCase().includes(searchProduct.toLowerCase()) ===true){
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
}

// Nav bar functions

function clothesHighlight() {
    $('#clothes').css('background-color', 'rgb(243, 0, 37)');
    $('#clothes').css('color', 'rgb(4, 7, 58)');
    $('#headwearDrop').slideUp();
    $('#accessoriesDrop').slideUp();
    $('#headwear, #accessories').css('background-color', 'rgb(4, 7, 58)');
    $('#headwear, #accessories').css('color', 'rgb(243, 0, 37)');
}

function headwearHighlight() {
    $('#headwear').css('background-color', 'rgb(243, 0, 37)');
    $('#headwear').css('color', 'rgb(4, 7, 58)');
    $('#clothesDrop').slideUp();
    $('#accessoriesDrop').slideUp();
    $('#clothes, #accessories').css('background-color', 'rgb(4, 7, 58)');
    $('#clothes, #accessories').css('color', 'rgb(243, 0, 37)');
}

function accessoriesHighlight() {
    $('#accessories').css('background-color', 'rgb(243, 0, 37)');
    $('#accessories').css('color', 'rgb(4, 7, 58)');
    $('#clothesDrop').slideUp();
    $('#headwearDrop').slideUp();
    $('#clothes, #headwear').css('background-color', 'rgb(4, 7, 58)');
    $('#clothes, #headwear').css('color', 'rgb(243, 0, 37)');
}

$('#clothes').mouseover(function() {
    clothesHighlight();
})

$('#headwear').mouseover(function() {
    headwearHighlight();
})

$('#accessories').mouseover(function() {
    accessoriesHighlight();
})

$('#clothes').click(function() {
    clothesHighlight();
    $('#clothesDrop').slideToggle();
})

$('#headwear').click(function () {
    headwearHighlight();
    $('#headwearDrop').slideToggle();
})

$('#accessories').click(function () {
    accessoriesHighlight();
    $('#accessoriesDrop').slideToggle();
})

$('.header, .container').mouseover(function() {
    $('#clothesDrop').slideUp();
    $('#headwearDrop').slideUp();
    $('#accessoriesDrop').slideUp();
    $('#clothes, #headwear, #accessories').css('background-color', 'rgb(4, 7, 58)');
    $('#clothes, #headwear, #accessories').css('color', 'rgb(243, 0, 37)');
})
