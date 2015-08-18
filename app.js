var app = angular.module("redditApp", ['ngSanitize']);

app.controller('Reddit', function ($scope) {
    $scope.articles = [
        {
            title: 'Tacos are awesome!',
            author: 'Robert Paulson',
            image: 'http://casperscherokee.com/wp-content/uploads/2014/09/55150-Doritos-Taco-Solo6.png',
            description: 'Mixtape plaid vegan, cronut jean shorts quinoa readymade trust fund meggings keffiyeh vinyl dreamcatcher photo booth banjo pop-up. Quinoa fingerstache drinking vinegar, single-origin coffee freegan Schlitz Pinterest irony letterpress fap gastropub kale chips actually. Hella High Life cliche beard, typewriter Thundercats organic plaid meggings ethical pour-over Helvetica wayfarers Williamsburg. Cardigan pickled cornhole McSweeney\'s. Biodiesel church-key banh mi, skateboard health goth wolf Tumblr butcher. American Apparel mixtape trust fund, locavore listicle Helvetica 8-bit church-key.',
            votes: 0,
            date: Date.now(),
            allComments: 0,
            comments: []
        },
        {
            title: 'So is Bacon!',
            author: 'Ellen Steube (Dance Partier)',
            image: 'http://koketchup.com/wp-content/uploads/2012/03/1-braised-bacon1.jpg',
            description: 'Mixtape plaid vegan, cronut jean shorts quinoa readymade trust fund meggings keffiyeh vinyl dreamcatcher photo booth banjo pop-up. Quinoa fingerstache drinking vinegar, single-origin coffee freegan Schlitz Pinterest irony letterpress fap gastropub kale chips actually. Hella High Life cliche beard, typewriter Thundercats organic plaid meggings ethical pour-over Helvetica wayfarers Williamsburg. Cardigan pickled cornhole McSweeney\'s. Biodiesel church-key banh mi, skateboard health goth wolf Tumblr butcher. American Apparel mixtape trust fund, locavore listicle Helvetica 8-bit church-key.',
            votes: 0,
            date: Date.now(),
            allComments: 0,
            comments: []
        },
        {
            title: 'I prefer swan',
            author: 'Jenan Manette',
            image: 'http://dentistvschef.files.wordpress.com/2013/03/dading-angsa-goose-carcass-goose-meat.jpg',
            description: 'Mixtape plaid vegan, cronut jean shorts quinoa readymade trust fund meggings keffiyeh vinyl dreamcatcher photo booth banjo pop-up. Quinoa fingerstache drinking vinegar, single-origin coffee freegan Schlitz Pinterest irony letterpress fap gastropub kale chips actually. Hella High Life cliche beard, typewriter Thundercats organic plaid meggings ethical pour-over Helvetica wayfarers Williamsburg. Cardigan pickled cornhole McSweeney\'s. Biodiesel church-key banh mi, skateboard health goth wolf Tumblr butcher. American Apparel mixtape trust fund, locavore listicle Helvetica 8-bit church-key.',
            votes: 0,
            date: Date.now(),
            allComments: 0,
            comments: []
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
        $scope.person = "";
        $scope.comment = "";
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

    $scope.showComments = function () {
        if (this.allComments === 0) {
            this.allComments = 1;
        }
        else {
            this.allComments = 0;
        }
    };

    $scope.newComment = function () {
        if (this.submitNewComment === 0) {
            this.submitNewComment = 1;
        }
        else {
            this.submitNewComment = 0;
        }
    };

    $scope.addComment = function (comments) {
        if (this.person && this.message) {
            var comment = {};
            comment.person = this.person;
            comment.message = this.message;
            comments.push(comment);
            this.submitNewComment = 0;
            this.person = "";
            this.message = "";
            this.allComments = 0;
        }
    };
});
