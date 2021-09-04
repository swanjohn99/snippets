//document.addEventListener('DOMContentLoaded', function() {
   // your code here

if(location.hostname.match('internationalsexguide')){
  [].forEach.call(document.querySelectorAll('.bbcode_container'), function (el) {
  el.style.visibility = 'hidden';
});
   
    [].forEach.call(document.querySelectorAll('.userinfo'|'.postfoot'), function (el) {
  el.style.visibility = 'hidden';
});
} // will return null if no match is found
//}, false);
