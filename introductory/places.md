The URL for this request is https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJmzrzi9Y0K4gRgXUc3sTY7RU&fields=address_component,adr_address,business_status,formatted_address,geometry,icon,name,type,url,vicinity&key=AIzaSyAUo1lD94xydVP2R07g_e6w9npOnaJkE8k using my own API key. 

The following is the JSON Response:

{
   "html_attributions" : [],
   "result" : {
      "address_components" : [
         {
            "long_name" : "290",
            "short_name" : "290",
            "types" : [ "street_number" ]
         },
         {
            "long_name" : "Bremner Boulevard",
            "short_name" : "Bremner Blvd",
            "types" : [ "route" ]
         },
         {
            "long_name" : "Old Toronto",
            "short_name" : "Old Toronto",
            "types" : [ "sublocality_level_1", "sublocality", "political" ]
         },
         {
            "long_name" : "Toronto",
            "short_name" : "Toronto",
            "types" : [ "locality", "political" ]
         },
         {
            "long_name" : "Toronto Division",
            "short_name" : "Toronto Division",
            "types" : [ "administrative_area_level_2", "political" ]
         },
         {
            "long_name" : "Ontario",
            "short_name" : "ON",
            "types" : [ "administrative_area_level_1", "political" ]
         },
         {
            "long_name" : "Canada",
            "short_name" : "CA",
            "types" : [ "country", "political" ]
         },
         {
            "long_name" : "M5V 3L9",
            "short_name" : "M5V 3L9",
            "types" : [ "postal_code" ]
         }
      ],
      "adr_address" : "\u003cspan class=\"street-address\"\u003e290 Bremner Blvd\u003c/span\u003e, \u003cspan class=\"locality\"\u003eToronto\u003c/span\u003e, \u003cspan class=\"region\"\u003eON\u003c/span\u003e \u003cspan class=\"postal-code\"\u003eM5V 3L9\u003c/span\u003e, \u003cspan class=\"country-name\"\u003eCanada\u003c/span\u003e",
      "business_status" : "CLOSED_TEMPORARILY",
      "formatted_address" : "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
      "geometry" : {
         "location" : {
            "lat" : 43.6425662,
            "lng" : -79.3870568
         },
         "viewport" : {
            "northeast" : {
               "lat" : 43.64504389999998,
               "lng" : -79.38554840000002
            },
            "southwest" : {
               "lat" : 43.6405563,
               "lng" : -79.3899692
            }
         }
      },
      "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
      "name" : "CN Tower",
      "types" : [ "tourist_attraction", "point_of_interest", "establishment" ],
      "url" : "https://maps.google.com/?cid=1580157384328508801",
      "vicinity" : "290 Bremner Boulevard, Toronto"
   },
   "status" : "OK"
}
