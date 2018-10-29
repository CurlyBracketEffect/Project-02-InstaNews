$(document).ready(function () {
    $("#grid").hide();
    $("#loader").hide();
    $("#sectionSelect").change(function () {
        $("#grid").empty();
        $("#loader").show();
        var selection = $("#sectionSelect :selected").val();
        console.log(selection);
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + selection + '.json';
        console.log(url);
        url += '?' + $.param({
            'api-key': "0a25a239009441fb9e3531c5747b48ba"
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            $("#grid").show();
            console.log(result);
            $("#logo").css("width", "12rem");
            var x = 0;
            $.each(result.results, function (key, value) {
                
                // console.log(value.multimedia);
                // console.log(value.multimedia.hasOwnProperty('url'));   value.short_url
                if (x > 11) {
                    return false;
                }

                if (value.multimedia.length > 0) {

                    //create a div with the headline of article requested
                    $("#grid").append("<div>" + '<a target="_blank" href="' + value.short_url + '"><img src="' + value.multimedia[4].url + '"></a>' + "<h1>" + value.abstract + "</h1>" + "</div>");
                    //   $("#grid").append("<div>" + '<img src="' + value.multimedia[4].url + '">' + "<h1>" + value.abstract + "</h1>" + "</div>");

                    //}).catch(function(key = 0) {
                    //console.log("catch");
                    x++;
                }
                
            });
            $("#loader").hide();  
        }).fail(function (err) {
            console.log(selection);
            throw err;
        });
    });
});
