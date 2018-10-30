//wait for the DOM to be ready the run the function
$(document).ready(function () {
    //hide the unpopulated grid and loading gif until needed
    $("#grid").hide();
    $("#loader").hide();
    //every time a new section is selected run this function
    $("#sectionSelect").change(function () {
        checkSize();//call the JS media query
        $("#grid").empty();//clear old articles from grid
        $("#loader").show();//the loader .gif
        var selection = $("#sectionSelect :selected").val();//get the value selected from the dropdown
        // console.log(selection); for debugging 
        var url = 'https://api.nytimes.com/svc/topstories/v2/' + selection + '.json';//formulate the crrect URL based on selection
        // console.log(url); debugging
        url += '?' + $.param({
            'api-key': "0a25a239009441fb9e3531c5747b48ba"
        });
        $.ajax({//start the asyncronous call
            url: url,
            method: 'GET',//over the table
        }).done(function (result) {//when the call comes back run this function
            $("#grid").show();//show the grid as it gets populated
            // console.log(result); debugging
            $("#logo").css("width", "12rem"); //adjust the logo size for mobile
            var x = 0;//initialize counter variable
            $.each(result.results, function (key, value) {//for each object returned run this function
                var mediaVal = 4;//initialize variable to determine which photo to use
                //break the .each loop once we have gotten 12 articles
                if (x > 11) {
                    return false;
                }
                //find the index of the highest quality img
                if (value.multimedia.length < 5){
                    mediaVal = value.multimedia.length - 1;
                }
                //if the article has an image then add it to the grid
                if (value.multimedia.length > 0) {

                    //create a div with the headline of article requested
                    $("#grid").append("<div>" + '<a target="_blank" href="' + value.short_url + '"><img src="' + value.multimedia[mediaVal].url + '"></a>' + "<h1>" + value.abstract + "</h1>" + "</div>");

                    //}).catch(function(key = 0) {
                    //console.log("catch"); debugging
                    x++;
                }
            });
            $("#loader").hide();  //hide the loader .gif after all articles have been loaded
        }).fail(function (err) {
            // console.log(selection); debugging
            throw err;
        });
    });
});

//JS media query to transform header 
function checkSize(){
    console.log($("#logo").css("width"));
    if ($("header").css("align-self") == "flex-start" ){//condition to determine if the screen is desktop size
            $("header").css("height", "10%");
            $("header").css("margin", "0px");
            $("#logo").css("transform", "scale(0.6)");
            $("#logo").css("margin-left", "0px");
            $("#choose").css("margin-left", "38px");
    }else if ($("select").css("margin-top") == "11px" ){//condition to determine if the screen is tablet size
            $("header").css("height", "10%");
            $("#logo").css("transform", "scale(0.5)");
            $("header").css("margin", "0px");
            $("#logo").css("margin-left", "-50%");
            $("#choose").css("margin-left", "15%");
    }
}
