function giveGroup(gbdate)
{
    var group = 1 + gbdate % 7;
    console.log("Je bent toegewezen aan groep " + group);
}
giveGroup(2015);