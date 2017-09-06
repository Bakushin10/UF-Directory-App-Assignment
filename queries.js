/* Fill out these functions using Mongoose queries*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.findOne({'code':'LBW'}, function(err,listing){
     if(err){
       throw err;
     }
   });

   //display listing data
   console.log(Listing);
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOneAndRemove({'code':'CABL'},function(err,listing){
     if(err){
       throw err;
     }
     // displaying the content of the removed item
     console.log(Listing);
   })
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */

   Listing.findOneAndUpdate({'code' : 'PHL'}, {'address':'somewhere in UF Gainesville, FL 32611'},function(err,listing){
     if(err)
      throw err;

      console.log(Listing);
   })
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({},function(err,listing){
     if(err)
      throw err;

      console.log(Listing);
   })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
