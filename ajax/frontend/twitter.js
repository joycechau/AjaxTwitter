let FollowToggle = require ("./follow_toggle.js");

$(function() {
  $("button.follow-toggle").each((index, element) => {
    const ft = new FollowToggle($(".follow-toggle"));
    $(".follow-toggle").on('click', event => {
      ft.toggleButton();
    });
  });


});
