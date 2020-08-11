(function ($) {
  "use strict";

  var objpeople = [
    {
      usernameText: "Wasil",
      passText: "wasil123",
    },
    {
      usernameText: "admin",
      passText: "admin",
    },
    {
      usernameText: "talal",
      passText: "Talal-69",
    },
  ];

  /*==================================================================
    [ Focus input ]*/
  $(".input100").each(function () {
    $(this).on("blur", function () {
      if ($(this).val().trim() != "") {
        $(this).addClass("has-val");
      } else {
        $(this).removeClass("has-val");
      }
    });
  });

  /*==================================================================
    [ Validate ]*/
  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }

  /*==================================================================
    [ Show pass ]*/
  var showPass = 0;
  $(".btn-show-pass").on("click", function () {
    if (showPass == 0) {
      $(this).next("input").attr("type", "text");
      $(this).addClass("active");

      showPass = 1;
    } else {
      $(this).next("input").attr("type", "password");
      $(this).removeClass("active");

      showPass = 0;
    }
  });

  $("#loginbtn").click(function () {
    var usernameText = $("#usernameText").val();
    var passText = $("#passText").val();

    for (var i = 0; i < objpeople.length; i++) {
      if (
        usernameText == objpeople[i].usernameText &&
        passText == objpeople[i].passText
      ) {
        window.open("index.pug");
        console.log(usernameText + " is logged in");
      }
    }
  });
})(jQuery);
