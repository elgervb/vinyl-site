
app.controller('AlbumController', function($scope, $routeParams, SpotifyService){

  SpotifyService.albums.list({artistId: $routeParams.artistId},function(result){
    // sort
    result.items.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    $scope.albums = result;
  });

  $scope.getImageSrc = function(album){
    var smallest = album.images[0];
    if (!smallest){
      // 1 pixel base64 encoded image
      return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    }

    album.images.forEach(function(image){
      if (image.height < smallest.height){
        smallest = image;
      }
    });

    return smallest.url;
  };
    
});