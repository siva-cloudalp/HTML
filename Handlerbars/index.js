$(()=>{
  $('#a-click').click(function(){
    $('p').css('color','green')
  })
})

var data =[
  {id:12,v:"ftftftf"}
] 
var hData= $('#handlebars-demo').html();
// var template = $("#ProfileData").html();
if(!_.isUndefined(hData)){
     // Compile the template data into a function
var templateScript = Handlebars.compile(hData);
// Define data in JSON format.
var context = {
cust: data,
};
// Pass Data to template script.
var html = templateScript(context);
// Insert the HTML code into the page
$("#Data").html(html);

}
