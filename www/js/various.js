// JavaScript Document

// Football Random Loader
function randomFoot() {
var pagearray = new Array;
	pagearray[0] = "#foot1";
	pagearray[1] = "#foot2";
	pagearray[2] = "#foot3";
	pagearray[3] = "#foot4";
	pagearray[4] = "#foot5";

var index = [Math.floor(Math.random() * pagearray.length)];
var pageID = window.location.hash.substring(1);
var page = ("#" + pageID);

if (page == pagearray[index]) {
	randomFoot();
} else {
	location.href = pagearray[index];
}
}


// Basketball Random Loader
function randomBask() {
var pagearray = new Array;
	pagearray[0] = "#bask1";
	pagearray[1] = "#bask2";
	pagearray[2] = "#bask3";
	pagearray[3] = "#bask4";
	pagearray[4] = "#bask5";

var index = [Math.floor(Math.random() * pagearray.length)];
var pageID = window.location.hash.substring(1);
var page = ("#" + pageID);

if (page === pagearray[index]) {
	randomBask();
} else {
	location.href = pagearray[index];
}
}


// American Football Random Loader
function randomAf() {
var pagearray = new Array;
	pagearray[0] = "#af1";
	pagearray[1] = "#af2";
	pagearray[2] = "#af3";
	pagearray[3] = "#af4";
	pagearray[4] = "#af5";


var index = [Math.floor(Math.random() * pagearray.length)];
var pageID = window.location.hash.substring(1);
var page = ("#" + pageID);

if (page === pagearray[index]) {
	randomAf();
} else {
	location.href = pagearray[index];
}
}


// Rugby Random Loader
function randomRugby() {
var pagearray = new Array;
	pagearray[0] = "#rugby1";
	pagearray[1] = "#rugby2";
	pagearray[2] = "#rugby3";
	pagearray[3] = "#rugby4";
	pagearray[4] = "#rugby5";

var index = [Math.floor(Math.random() * pagearray.length)];
var pageID = window.location.hash.substring(1);
var page = ("#" + pageID);

if (page === pagearray[index]) {
	randomRugby();
} else {
	location.href = pagearray[index];
}
}


// Previous Page
function goBack() {
	history.go(-1);
	return false;
}