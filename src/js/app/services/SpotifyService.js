app.service('SpotifyService', function($resource){

  return {

    search: $resource('https://api.spotify.com/v1/search?q=:query&type=:type', {}, {
      albums:  {method: 'GET', params: { type: 'album', isArray:true}},
      artists: {method: 'GET', params: { type: 'artist', isArray:true}}
    })

  };
  

});