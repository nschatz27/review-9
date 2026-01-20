/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Noah Schatz
   Date:   01/20/26

*/

showClock;

var currentDay = new Date("May 19, 2018 9:31:27 a.m.");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

var currentDay = new Date();
document.getElementById ("dateNow").innerHTML = "<br /><span>date</span><span>time</span>"; 

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}