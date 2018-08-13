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

                
                $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn(150);
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
    search(searchProduct);
})

function search(searchProduct) {
    $.ajax({
        type: 'GET',
        url: 'http://www.redbullshopus.com/products.json',
        success: function(response) {
            $('.container').html("");
            for (let prod of response.products) {
                var prodNum = response.products.indexOf(prod);

                if (prod.title.toLowerCase().includes(searchProduct.toLowerCase()) ===true) {
                    
                    $('.container').append("<div class='product' onclick='modalShow" + prodNum + "()'><div class='mainIMG'><img src='" + prod.images[0].src + "' /></div><div class='border'><div class='title'>" + prod.title + "</div></div></div>").hide().fadeIn();
                }
            }
        }
    })
}

// Nav bar functions

function clothesHeadwearSlideUp() {
    $('#clothesDrop').slideUp();
    $('#headwearDrop').slideUp();
}

function clothesAccessoriesSlideUp() {
    $('#clothesDrop').slideUp();
    $('#accessoriesDrop').slideUp();
}

function headwearAccessoriesSlideUp() {
    $('#headwearDrop').slideUp();
    $('#accessoriesDrop').slideUp();
}

function clothesHighlight() {
    $('#clothes').css('background-color', 'rgb(243, 0, 37)');
    $('#clothes').css('color', 'rgb(4, 7, 58)');
}

function headwearHighlight() {
    $('#headwear').css('background-color', 'rgb(243, 0, 37)');
    $('#headwear').css('color', 'rgb(4, 7, 58)');
}

function accessoriesHighlight() {
    $('#accessories').css('background-color', 'rgb(243, 0, 37)');
    $('#accessories').css('color', 'rgb(4, 7, 58)');
}

function clothesHeadwearUndo() {
    $('#clothes, #headwear').css('background-color', 'rgb(4, 7, 58)');
    $('#clothes, #headwear').css('color', 'rgb(243, 0, 37)');
}

function clothesAccessoriesUndo() {
    $('#clothes, #accessories').css('background-color', 'rgb(4, 7, 58)');
    $('#clothes, #accessories').css('color', 'rgb(243, 0, 37)');
}

function headwearAccessoriesUndo() {
    $('#headwear, #accessories').css('background-color', 'rgb(4, 7, 58)');
    $('#headwear, #accessories').css('color', 'rgb(243, 0, 37)');
}

$('#clothes').mouseover(function() {
    headwearAccessoriesSlideUp();
    clothesHighlight();
    headwearAccessoriesUndo();
})

$('#headwear').mouseover(function() {
    clothesAccessoriesSlideUp();
    headwearHighlight();
    clothesAccessoriesUndo();
})

$('#accessories').mouseover(function() {
    clothesHeadwearSlideUp();
    accessoriesHighlight();
    clothesHeadwearUndo();
})

$('#clothes').click(function() {
    headwearAccessoriesSlideUp();
    clothesHighlight();
    headwearAccessoriesUndo();
    $('#clothesDrop').slideToggle();
})

$('#headwear').click(function () {
    clothesAccessoriesSlideUp();
    headwearHighlight();
    clothesAccessoriesUndo();
    $('#headwearDrop').slideToggle();
})

$('#accessories').click(function () {
    clothesHeadwearSlideUp();
    accessoriesHighlight();
    clothesHeadwearUndo();
    $('#accessoriesDrop').slideToggle();
})

$('.header, .container').mouseover(function() {
    $('#clothesDrop').slideUp();
    $('#headwearDrop').slideUp();
    $('#accessoriesDrop').slideUp();
    $('#clothes, #headwear, #accessories').css('background-color', 'rgb(4, 7, 58)');
    $('#clothes, #headwear, #accessories').css('color', 'rgb(243, 0, 37)');
})
