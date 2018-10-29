// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
var sectArr = []; 

url += '?' + $.param({
  'api-key': "0a25a239009441fb9e3531c5747b48ba"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  $.each(result.results, function(key, value){
    if (sectArr.indexOf(this.section)<0){
        sectArr.push(this.section);
        $('#sectionSelect').append('<option value=' + this.section.replace(/\s/g, '') + '>' + this.section + '</option>');
    }
    console.log(sectArr);
    });

}).fail(function(err) {
  throw err;
});
