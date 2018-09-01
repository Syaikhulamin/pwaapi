$(document).ready(function(){

    var _url = "https://my-json-server.typicode.com/Syaikhulamin/pwaapi/product";

    var dataResult  = '';
    var catResult   = '' ;
    var categories  = [] ;

    $.get(_url , function(data){

        $.each(data, function(key, items){

            _cat = items.category ;

            dataResult += "<div>"
                            + "<h3>" + items.name + "</h3>"
                            + "<p>" + items.category + "</p>"
                        "<div>" ;

            if($.inArray(_cat, categories) == -1){
                categories.push(_cat);
                catResult += "<option value='"+ _cat +"'>"+ _cat + "</option>" ;
            }

        });

        $("#product").html(dataResult);
        $("#cat_select").html("<option value='all'>semua</option>" + catResult);
    });

    // Fungsi Filter
    $('#cat_select').on('change', function(){
        updateProduct($(this).val());
    });

    function updateProduct(cat){

        var dataResult = '' ;
        var _newUrl = _url ;

        if(cat != 'all'){
            _newUrl = _url + "?category=" + cat ; 
        }

        $.get(_newUrl, function (data) {

            $.each(data, function (key, items) {

                _cat = items.category;

                dataResult += "<div>"
                    + "<h3>" + items.name + "</h3>"
                    + "<p>" + items.category + "</p>"
                "<div>";

            });

            $("#product").html(dataResult);
        });
    }
    
});