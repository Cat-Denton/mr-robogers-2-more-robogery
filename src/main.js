import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import roboRoger from './js/roboRoger.js';

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    
    const num = $("input#number").val();

    const story = roboRoger(parseInt(num));
    

    if (story === "Mr. roboRogers doesn't have all day! Input a smaller number so they don't get angry!") {
      document.getElementById("roboRogerTalk").style.color = "red";
      $("#roboRogersPic").show();
    }

    document.getElementById("roboRogerTalk").style.color = "black";

    $("#roboRogersPic").hide();

    $("#roboRogerTalk").text(story);

    $("#firstButton").hide();

    $("#repeatButton").show();
    
    event.preventDefault();
  });
});
