/*objects:
declare var and assign and obect literal {} to it (var assistantMananger ={})
assign values to each of the objects keys using = operator
example:
setting numbers for movement range for a store manager character*/
var storeManagerMovement =4;
var storeManagerSocialSkills =50;
var storeManagerStreetSmarts =50;
var storeManagerHealth =30;
/*too long-let's tell Java they are related
objects are collections of related properties, 
each property represented as a key value pair
(var name becomes property key. var value becomes the value of the object)
empty object literal syntax {}*/
var storeManager ={}
    //building store manager with dot notation
    storeManager.rangeTilesPerTurn =4;
    storeManager.socialSkills =50;
    storeManager.streetSmarts =50;
    storeManager.health =30;
    storeManager.specialAbility ="finding business opportunities";
    storeManager.greeting ="let's make some money";
/*inside the object literal
an object with values assigned to the property
allows shorter names and all properties are connected to the same object
and is easily readable*/
var assistantManager ={
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}
//adding new properties can be done with dot notation
storeManager.nextAchievement ="open a new store";
assistantManager.nextAchievement ="get promoted"