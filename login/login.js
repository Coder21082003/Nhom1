$(document).ready(function () {

  $(".frame-signup").fadeOut();
  var position = $("#heading-page").position();
  var hd_top = position.top;

  // $(window).scrollTop(hd_top);
  setTimeout(() => $(window).scrollTop(hd_top - 50), 500);
  $(".frame .button-change-1").click(function () {
    if ($(this).text().toLowerCase() == "login") {
      $(".frame-signup").fadeOut("swing", function () {
        $(".frame-login").fadeIn();
      });
    } else {
      $(".frame-login").fadeOut("swing", function () {
        $(".frame-signup").fadeIn();
      });
    }
  });

  var CheckConfirmAdmin = function () {
    var is = false;
    $("input:checked").each(function () {
      if ($(this).attr("id").indexOf("confirm-admin") > -1) is = true;
    });
    return is;
  };
  
  $('input[type="checkbox"]').on("click", function () {
    console.log("checked");

    if (CheckConfirmAdmin()) {
        $(".frame-login .submit-btn").attr("href", "../admin/admin.html");
    } else {
        console.log("Not found");
    }
  });
});
