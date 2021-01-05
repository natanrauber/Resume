$(function () {
  $(".home").click(function () {
    $(".home").addClass("active");
    $(".experience, .education, .skills, .contact").removeClass("active");
    $(".navigation-tab-overlay").css({
      top: "0px"
    });
    document.getElementById('home').scrollIntoView();
  });
});

$(function () {
  $(".experience").click(function () {
    $(".experience").addClass("active");
    $(".home, .education, .skills, .contact").removeClass("active");
    $(".navigation-tab-overlay").css({
      top: "50px"
    });
    document.getElementById('experience').scrollIntoView();
  });
});

$(function () {
  $(".education").click(function () {
    $(".education").addClass("active");
    $(".home, .experience, .skills, .contact").removeClass("active");
    $(".navigation-tab-overlay").css({
      top: "100px"
    });
    document.getElementById('education').scrollIntoView();
  });
});

$(function () {
  $(".skills").click(function () {
    $(".skills").addClass("active");
    $(".home, .experience, .education, .contact").removeClass("active");
    $(".navigation-tab-overlay").css({
      top: "150px"
    });
    document.getElementById('skills').scrollIntoView();
  });
});

$(function () {
  $(".contact").click(function () {
    $(".contact").addClass("active");
    $(".home, .experience, .education, .skills").removeClass("active");
    $(".navigation-tab-overlay").css({
      top: "200px"
    });
    document.getElementById('contact').scrollIntoView();
  });
});