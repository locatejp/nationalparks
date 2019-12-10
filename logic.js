$(document).ready(function () {
    parksArr.sort();
    let parksDropDown = createDropDown(parksArr);
    let selectPark = $("#selectPark");
    selectPark.append(parksDropDown);
    //parksDropDown.forEach(item, () => selectPark.append(parksDropDown));

    // Event listeners
    $("#nParkFormSubmit").on("click", (e) => {
        e.preventDefault();
        console.log(e);
        let visitedParks = [];
        $.each($("input:checked"), function () {
            visitedParks.push($(this).val());
            console.log(this);
        });
        console.log(visitedParks);
        if (visitedParks.length > 0) {
            let parkElems = $("<div>");
            visitedParks.forEach(park => {
                let entry = $("<h1>").text(park);
                parkElems.append(entry);
            });
            $("#data").empty().append(parkElems);
        }
    })

});

// Variables
// https://www.nationalpark-adventures.com/united-states-national-parks.html
let parksArr = ["Denali", "Gates of the Arctic", "Glacier Bay",
    "Katmai", "Kenai Fjords", "Kobuk Valley", "Lake Clark", "Wrangell - St. Elias",
    "American Samoa", "Grand Canyon", "Petrified Forest", "Saguaro", "Hot Springs",
    "Channel Islands", "Death Valley", "Joshua Tree", "Kings Canyon",
    "Lassen Volcanic", "Redwood", "Sequoia", "Yosemite", "Black Canyon of the Gunnison",
    "Great Sand Dunes", "Mesa Verde", "Rocky Mountain", "Biscayne", "Dry Tortugas",
    "Everglades", "Haleakala", "Hawaii Volcanoes",
    "Mammoth Cave", "Acadia", "Isle Royale", "Voyageurs", "Glacier",
    "Yellowstone", "Great Basin", "Carlsbad Caverns", "Great Smoky Mountains",
    "Theodore Roosevelt", "Cuyahoga Valley", "Crater Lake", "Congaree", "Badlands",
    "Wind Cave", "Great Smoky Mountains", "Big Bend", "Guadalupe Mountains",
    "Virgin Islands", "Arches", "Bryce Canyon", "Capitol Reef", "Canyonlands",
    "Zion", "Shenandoah", "Mount Rainier", "North Cascades", "Olympic", "Grand Teton"];

function createDropDown(parksArr) {
    let parksDropDown = "";

    for (let i in parksArr) {
        // let elem = $('<label>').html(parksArr[i]).append($('<input>').attr({type: "checkbox", value: parksArr[i].replace(/\s/g, "")}));
        // console.log(elem)
        // parksDropDown.append(elem);
        parksDropDown += "<label><input type=\"checkbox\" name=" + parksArr[i].replace(/\s/g, "") + " " +
            "value=" + parksArr[i].replace(/\s/g, "") + ">" + parksArr[i] + "</label><br>";
    }
    return parksDropDown;
}