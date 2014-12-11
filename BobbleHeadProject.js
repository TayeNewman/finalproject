<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>



      $(function() {
  <!-- // Document is ready! All your code goes inside.
  // You only need one of these per page -->


<form>
  <input type="button" value="Input Button">
  <input type="checkbox">
  <input type="file">
  <input type="hidden">
  <input type="image">
  <input type="password">
  <input type="radio">
  <input type="reset">
  <input type="submit">
  <input type="text">
  <select>
    <option>Option</option>
  </select>
  <textarea></textarea>
  <button>Button</button>
</form>
<div></div>
 
<script>
var input = $( "input:password" ).css({
  background: "yellow",
  border: "3px red solid"
});
$( "div" )
  .text( "For this type jQuery found " + input.length + "." )
  .css( "color", "red" );
 
// Prevent form submission
$( "form" ).submit(function() {
  return false;
});








}); 

