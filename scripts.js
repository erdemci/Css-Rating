function calculate(){
   $("#text").text($('input[name="star"]:checked').val());  
  console.log($('input[name="star"]:checked').val());
  console.log($("#text").text());
};