//document.addEventListener('DOMContentLoaded', function() {
   // your code here

if(location.hostname.match('internationalsexguide')){
  //[].forEach.call(document.querySelectorAll('.bbcode_container,.userinfo,.postfoot,.isg_notice'), function (el) {
  [].forEach.call(document.querySelectorAll('.bbcode_container,.postfoot,.isg_notice,.options_block,.pagination_bottom,.pagination,.above_postlist'), function (el) {
  el.style.visibility = 'hidden';
});
   
} // will return null if no match is found
//}, false);
