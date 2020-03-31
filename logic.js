
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
        $.each($("input:checked").parent(), function () {
            visitedParks.push($(this).text());
            console.log(this);
        });
        console.log(visitedParks);
        if (visitedParks.length > 0) {
            let parkElems = $("<div>");
            visitedParks.forEach(park => {
                let entry = $("<h1>").text(park)
                .addClass("hoverclick");
                parkElems.append(entry);
            });
            $("#data").empty().append(parkElems);
            $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        }
    });
    $("#data").on('click', '.hoverclick', (e) => {
        let clickedName = e.currentTarget.textContent;
        console.log(clickedName);
        let parkKey = false;
        for (var key in parkLib) {
            if (key.indexOf(clickedName) >= 0){
                parkKey = parkLib[key];
                break;
            }
        }
        parkKey ? fetchUrl(parkKey): alert("National Park not found in database :(");
    });

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
        parksDropDown += "<label class=\"checkbox-inline check-choice\"><input type=\"checkbox\" name=" + parksArr[i].replace(/\s/g, "") + " " +
            "value=" + parksArr[i].replace(/\s/g, "") +">" + parksArr[i] + "</label>";
    }
    return parksDropDown;
}

function fetchUrl(parkKey){
const url = "https://developer.nps.gov/api/v1/parks";
const api_key = "4pyAvwLGdhtnYuVqa2zyMdeF43XOqbsyCaO8AwsN";
const queryURL = url + "?parkCode=" + parkKey +
"&fields=entranceFees,images,standardHours&api_key=" + api_key + "&limit=1";
//const queryURL2 = `${url}?q=${parkName}&api_key=${api_key}`;
// https://developer.nps.gov/api/v1/parks?q=Denali&api_key=4pyAvwLGdhtnYuVqa2zyMdeF43XOqbsyCaO8AwsN
$.ajax({
    url: queryURL,
    method: "GET"
}).then(response => {
    
    if(response.status="OK"){
        console.log(response);
        console.log("Full name: " + response.data[0].fullName);
        console.log(response.data[0].images.length + " images available");
    } else {
        console.log("API call failed");
    }
});
}