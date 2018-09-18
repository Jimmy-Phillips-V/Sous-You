//https://www.livestrong.com/article/92939-calculate-bmi-hand/

var edamamCall;

//Obtain user inputs
$('#submitInfo').on('click', function(event) { 
  event.preventDefault();
var e = document.getElementById('userPreference');
var value = e.options[e.selectedIndex].value;
var diet;

if (value == 1) {
  diet = "vegan"
  console.log(diet)
  }
else if (value == 2) {
  diet = "vegetarian"
  }
else if (value == 3) {
  diet = "paleo"
  }
else if (value == 4) {
  diet = "pescatarian"
  }
else if (value == 5) {
  diet = ""
  }

    
var queryURL = `https://api.edamam.com/search?q=${diet}&app_id=b4544b0b&app_key=549eddf763b78d2ec7e3fc9db4d1ef5d`
$.get(queryURL, function(response){

  edamamCall = response.hits;
  for (var i = 0; i < edamamCall.length; i++) {
      var recipeDiv = $('<div>');
      recipeDiv.attr('id', 'receipeInfo' + i);
      recipeDiv.attr('class', 'card rounded');
      recipeDiv.attr('style', 'width: 33rem;');
      recipeDiv.css({'height': '340px', 'margin' : '10px'});

      var recipePic = $('<img>');
      recipePic.attr('class', 'card-img-top rounded')
      recipePic.attr('src', edamamCall[i].recipe.image);
      recipePic.attr('alt', 'pic of food');
      recipeDiv.append(recipePic);


      var recipeTitle = $('<h3>');
      recipeTitle.attr('class', 'card-text text-center text-wrap card-title');
      recipeTitle.text(edamamCall[i].recipe.label);
      recipeDiv.append(recipeTitle);

      var recipeAnchor = $('<a>')
      recipeAnchor.attr('href', edamamCall[i].recipe.url);
      recipeAnchor.attr('target', '_blank');
      // recipeDiv.append(recipeAnchor);

      //send response to our profile page & recipe table
      $('#recipes').append(recipeDiv);
      //Ingredients,retrieve data to be sent to the profile & ingredients table
      var ingredientsDiv = $('<div>');

      var ingredientItems = $("<p>");
      ingredientItems.text(edamamCall[i].recipe.ingredientLines);
      ingredientsDiv.append(ingredientItems);
      $('').append();   
     }   
   })
  })
  
   
        
//  if(userInfo === "No preference") {
//                 $.ajax({
//                     // url: "https://cors-anywhere.herokuapp.com/" + "https://api.edamam.com/search?q=" + ??? + "&app_id=b4544b0b&app_key=549eddf763b78d2ec7e3fc9db4d1ef5d",
//                     url:"https://api.edamam.com/search?q=" +  + "&app_id=b4544b0b&app_key=549eddf763b78d2ec7e3fc9db4d1ef5d",
        
//                     method: "GET"
//                 }).then(function (response) {
    
//         edamamCall = response.hits;
//         for (var i = 0; i < edamamCall.length; i++) {
//             var recipeDiv = $('<div>');
//             recipeDiv.attr('id', 'receipeInfo' + i);
//             recipeDiv.attr('class', 'card rounded');
//             recipeDiv.attr('style', 'width: 33rem;');
//             recipeDiv.css({'height': '340px', 'margin' : '10px'});
    
//             var recipeAnchor = $('<a>')
//             recipeAnchor.attr('href', edamamCall[i].recipe.url);
//             recipeAnchor.attr('target', '_blank');
    
//             var recipePic = $('<img>');
//             recipePic.attr('class', 'card-img-top rounded')
//             recipePic.attr('src', edamamCall[i].recipe.image);
//             recipePic.attr('alt', 'pic of food');
//             recipeAnchor.append(recipePic);
    
    
//             var recipeTitle = $('<h3>');
//             recipeTitle.attr('class', 'card-text text-center text-wrap card-title');
//             recipeTitle.text(edamamCall[i].recipe.label);
//             recipeAnchor.append(recipeTitle);
    
//             recipeDiv.append(recipeAnchor);
            
//           //send response to our profile page & recipe table
            
//             $('#recipes').append(recipeDiv)
            
//           //Ingredients,retrieve data to be sent to the profile & ingredients table
//           var ingredientsDiv = $('<div>');
         
//           var ingredientItems = $("<p>");
//           ingredientItems.text(edamamCall[i].recipe.ngredientLines);
//           ingredientsDiv.append(ingredientItems);
//           // $('#ingredients').append(recipeDiv);

//         }
//         })
    // }



