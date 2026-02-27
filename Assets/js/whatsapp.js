// function sendToWhatsapp() {
//     let number = "+94774070817";

//     let fname = document.getElementById("fname").value;
//     let lname = document.getElementById("lname").value;
//     let townCity = document.getElementById("town-city").value;
//     let country = document.getElementById("country").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let adults = document.getElementById("adults").value;
//     let children = document.getElementById("children").value;

//     var url = "https://wa.me/" + number + "?text=" +
//         "First Name: " + fname + "%0a" +
//         "Last Name: " + lname + "%0a" +
//         "Town/City: " + townCity + "%0a" +
//         "Country: " + country + "%0a" +
//         "Email: " + email + "%0a" +
//         "Phone: " + phone + "%0a" +
//         "Number of Adults: " + adults + "%0a" +
//         "Number of Children: " + children;
//     window.open(url, "_blank"); focus();
// }
function sendToWhatsapp() {
    let number = "94774070817";

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let townCity = document.getElementById("town-city").value;
    let country = document.getElementById("country").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let adults = document.getElementById("adults").value;
    let children = document.getElementById("children").value;

    // Unicode encoded emojis
    let palmTree = "\uD83C\uDF34"; 
    let sparkle = "\u2728";
    let sunset = "\uD83C\uDF05";
    let crown = "\uD83D\uDC51";
    let child = "\uD83E\uDDD2";

    let message =
        palmTree + sparkle + " *TROPICAL HOLIDAYS – BESPOKE LUXURY TRAVEL REQUEST* " + sparkle + palmTree + "\n\n" +
        "Dear Tropical Holidays Concierge Team,\n\n" +
        "We are interested in curating a premium travel experience in Sri Lanka and would appreciate your exclusive recommendations.\n\n" +
        "👤 *Guest Name:* " + fname + " " + lname + "\n" +
        "🏙️ *City of Residence:* " + townCity + "\n" +
        "🌍 *Country:* " + country + "\n\n" +
        "📧 *Email:* " + email + "\n" +
        "📱 *Contact Number:* " + phone + "\n\n" +
        crown + " *Number of Adults:* " + adults + "\n" +
        child + " *Number of Children:* " + children + "\n\n" +
        "Kindly share your luxury resorts, private transfers, curated excursions, and tailor-made itineraries.\n\n" +
        "We look forward to an unforgettable tropical journey with Tropical Holidays. " + sunset + sparkle;

    let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}