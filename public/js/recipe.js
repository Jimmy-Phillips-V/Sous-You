var edamamCall;

    var lowFat = 'low-fat';
    var highProtein = 'high-protein';
    var lowCarb = 'low-carb';
    var searchTerms = [lowFat, highProtein, lowCarb];

    $.ajax({

        url: "https://cors-anywhere.herokuapp.com/" + "https://api.edamam.com/search?q=" + searchTerms + "&app_id=b4544b0b&app_key=549eddf763b78d2ec7e3fc9db4d1ef5d",    	
        method: "GET"
    }).then(function (response) {

    edamamCall = response.hits;
    for (var i = 0; i < edamamCall.length; i++) {
        var recipeDiv = $('<div>');
        recipeDiv.attr('id', 'receipeInfo' + i);
        recipeDiv.attr('class', 'card rounded');
        recipeDiv.attr('style', 'width: 33rem;');
        recipeDiv.css({'height': '340px', 'margin' : '10px'});

        var recipeAnchor = $('<a>')
        recipeAnchor.attr('href', edamamCall[i].recipe.url);
        recipeAnchor.attr('target', '_blank');

        var recipePic = $('<img>');
        recipePic.attr('class', 'card-img-top rounded')
        recipePic.attr('src', edamamCall[i].recipe.image);
        recipePic.attr('alt', 'pic of food');
        recipeAnchor.append(recipePic);


        var recipeTitle = $('<h3>');
        recipeTitle.attr('class', 'card-text text-center text-wrap card-title');
        recipeTitle.text(edamamCall[i].recipe.label);
        recipeAnchor.append(recipeTitle);

        recipeDiv.append(recipeAnchor);
        $('#recipes').append(recipeDiv)

    }
    $('#recipes').css('display', 'block');
});
