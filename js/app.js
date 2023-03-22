$(document).ready(function(){
    
    //Clase Active
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    $('.category_item').click(function (){
        let catProduct = $(this).attr('category');

        console.log(catProduct);

        //Clase Active al seleccionado

        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //Ocultando productos

        $('.product-item').hide();

        //mostrar productos

        $('.product-item[category="'+catProduct+'"] ').show();

        $('.category_item[category="all"]').click(function (){

            $('.product-item').show();

        });
    })

});