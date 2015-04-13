
app.controller('ArtistController', function($scope, $location, SpotifyService){

  $scope.search = function(){
    SpotifyService.search.artists({query: $scope.artist},function(result){
      $scope.artists =  result.artists;
    });
  };
    
  $scope.getImageSrc = function(artist){
    var smallest = artist.images[0];
    if (!smallest){
      // 1 pixel base64 encoded image
      return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    }

    artist.images.forEach(function(image){
      if (image.height < smallest.height){
        smallest = image;
      }
    });

    return smallest.url;
  };

  $scope.redirect = function(artist){

    $location.path('app/search/albums/'+artist.id);

  };
});