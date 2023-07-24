var info = document.getElementById("info");
var ltp = document.getElementById("ltp");
var loc = document.getElementById("loc");
var tips = document.getElementById("tips");
var gallery = document.getElementById("gallery");
var reviews = document.getElementById("reviews");
var policy = document.getElementById("policy");

function enableINFORMATION() {
    info.style.visibility = "visible"
    info.style.display = "block";

    ltp.style.display = "none";
    loc.style.display = "none";
    tips.style.display = "none";
    gallery.style.display = "none";
    reviews.style.display = "none";
    policy.style.display = "none";
}

function enableLTP() {
    ltp.style.visibility = "visible"
    ltp.style.display = "block";

    info.style.display = "none";
    loc.style.display = "none";
    tips.style.display = "none";
    gallery.style.display = "none";
    reviews.style.display = "none";
    policy.style.display = "none";
}

function enableLOCATION() {
    loc.style.visibility = "visible"
    loc.style.display = "block";

    info.style.display = "none";
    ltp.style.display = "none";
    tips.style.display = "none";
    gallery.style.display = "none";
    reviews.style.display = "none";
    policy.style.display = "none";
}

function enableTIPS() {
    tips.style.visibility = "visible"
    tips.style.display = "block";

    info.style.display = "none";
    ltp.style.display = "none";
    loc.style.display = "none";
    gallery.style.display = "none";
    reviews.style.display = "none";
    policy.style.display = "none";
}

function enableGALLERY() {
    gallery.style.visibility = "visible"
    gallery.style.display = "block";

    info.style.display = "none";
    ltp.style.display = "none";
    loc.style.display = "none";
    tips.style.display = "none";
    reviews.style.display = "none";
    policy.style.display = "none";
}

function enableREVIEWS() {
    reviews.style.visibility = "visible"
    reviews.style.display = "block";

    info.style.display = "none";
    ltp.style.display = "none";
    loc.style.display = "none";
    tips.style.display = "none";
    gallery.style.display = "none";
    policy.style.display = "none";
}

function enablePOLICY() {
    policy.style.visibility = "visible"
    policy.style.display = "block";

    info.style.display = "none";
    ltp.style.display = "none";
    loc.style.display = "none";
    tips.style.display = "none";
    gallery.style.display = "none";
    reviews.style.display = "none";
}