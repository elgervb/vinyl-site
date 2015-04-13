/**
 * Service for the public Spotify API.
 *
 * @see https://developer.spotify.com/web-api/console/get-artist-albums/
 */
app.service('SpotifyService', function($resource){

  return {

    search: $resource('https://api.spotify.com/v1/search?q=:query&type=:type', {}, {
      albums:  {method: 'GET', params: { type: 'album', isArray:true}},
      artists: {method: 'GET', params: { type: 'artist', isArray:true}}
    }),
    // https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums?album_type=album
    albums: $resource('https://api.spotify.com/v1/artists/:artistId/albums?album_type=:type&limit=50', {}, {
      list: {method: 'GET', params: { type: 'album', isArray:true}}
    })

  };
  

});
