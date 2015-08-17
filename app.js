var app = angular.module("redditApp", ['ngSanitize']);

app.controller('Reddit', function ($scope) {
    $scope.articles = [
        {
            title: 'Pizza is awesome!',
            author: 'Robert Paulson',
            image: 'http://foodporndaily.com/pictures/gooey-melty-thin-crust-cheese-pizza.jpg',
            description: 'Mixtape plaid vegan, cronut jean shorts quinoa readymade trust fund meggings keffiyeh vinyl dreamcatcher photo booth banjo pop-up. Quinoa fingerstache drinking vinegar, single-origin coffee freegan Schlitz Pinterest irony letterpress fap gastropub kale chips actually. Hella High Life cliche beard, typewriter Thundercats organic plaid meggings ethical pour-over Helvetica wayfarers Williamsburg. Cardigan pickled cornhole McSweeney\'s. Biodiesel church-key banh mi, skateboard health goth wolf Tumblr butcher. American Apparel mixtape trust fund, locavore listicle Helvetica 8-bit church-key.',
            votes: 0,
            date: Date.now()
        },
        {
            title: 'So is Bacon!',
            author: 'Ellen Steube (Dance Partier)',
            image: 'http://investorplace.com/wp-content/uploads/2014/02/bacon.jpg',
            description: 'Mixtape plaid vegan, cronut jean shorts quinoa readymade trust fund meggings keffiyeh vinyl dreamcatcher photo booth banjo pop-up. Quinoa fingerstache drinking vinegar, single-origin coffee freegan Schlitz Pinterest irony letterpress fap gastropub kale chips actually. Hella High Life cliche beard, typewriter Thundercats organic plaid meggings ethical pour-over Helvetica wayfarers Williamsburg. Cardigan pickled cornhole McSweeney\'s. Biodiesel church-key banh mi, skateboard health goth wolf Tumblr butcher. American Apparel mixtape trust fund, locavore listicle Helvetica 8-bit church-key.',
            votes: 0,
            date: Date.now()
            //need an external library to format date (moment)
        }
    ];

    $scope.submitPost = function () {
        var info = {};
        info.title = $scope.title;
        info.description = $scope.description;
        info.author = $scope.author;
        info.image = $scope.image;
        info.votes = 0;
        info.comments = [];
        info.date = new Date();

        $scope.articles.push(info);
        $scope.title = "";
        $scope.author = "";
        $scope.image = "";
        $scope.description = "";
    };

    $scope.addComment = function () {
        $scope.comments = [];

        $scope.comments.push({
            comment: $scope.comments
        });

        // Clear input fields after push
        $scope.comments = "";
    };
    $scope.upVote = function(info){
      info.votes++;
    };
    $scope.downVote = function(info){
      info.votes--;
    };
    $scope.show = function(){
      if ($scope.form === 0) {
        $scope.form = 1;
      } else {
        $scope.form = 0;
      }
    };
});
