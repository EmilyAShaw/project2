

      var map;
      var kim = "img/kimIcon.png";
      var kanye = "img/kanyeIcon.png";
      var dave = "img/daveFrancoIcon.png";
      var kourtney = "img/kourtneyIcon.png";
      var placeholder = "img/placeholder.png"
      

    


      function initMap() {


        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3),
          mapTypeId: 'terrain'
        });

      
        var script = document.createElement('script');
       
        script.src = 'https://api.instagram.com/v1/tags/starspotting/media/recent?access_token=6217406642.348eb7c.bc9a06b20fae4fc1b2699141fc64f926&callback=callbackFunction';
        document.getElementsByTagName('head')[0].appendChild(script);
      }



      // Loop through the results array and place a marker for each
      // set of coordinates.
      window.callbackFunction = function(results) {

        // var resultsObj = JSON.parse(results);
        // console.log('resultsObj', resultsObj.data[0]);

       for (var i = 0; i < results.data.length; i++) {
          var coords = results.data[i].location;
          var txt = results.data[i].caption.text;
          // console.log(results.data[i]);
          var long = results.data[i].location.longitude;
          var lat = results.data[i].location.latitude;
          var users = results.data[i].users_in_photo;

          //searching through the inner array for usernames
          if(users.length !== 0){
            for(var j = 0; j < users.length; j++) {
             
              var celeb = users[j].user.username
              console.log ("celeb", celeb);
            }
          }
         
         	//for (var j = 0; j < users_in_photo.length; j++){
         	//	var celeb =users_in_photo[j];
         	//}
	
          var latLng = new google.maps.LatLng(lat,long);

          	if (celeb == "kanyew.est"){
              icon = kanye;

              console.log (celeb)
            }
            else if (celeb == "kaleb_campbell"){
              icon = dave;

              console.log (celeb)
            }

            else if (celeb == "kourtneypictures"){
              icon = kourtney;

              console.log (celeb)
            }

            else if (celeb == "zoeolivia97"){
              icon = kim;

              console.log (celeb)
            }

            else {
              icon = placeholder;
            }



          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
           	icon: icon
           });

       

        }
      }
 


  