// Block form submission if there are required fields.
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("eloquaForm");
    if (!form) return;

    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // After field validation, check for reCaptcha Validation Client Side
        grecaptcha.execute();
        var response = grecaptcha.getResponse();

        if( response === '' || response === null || response === undefined ) {
            event.preventDefault();
            event.stopPropagation();
        }

        // After field validation, check for reCaptcha Validation Server Side
        onSubmit();
      }

      // Add a class when we attempt to validate so we can scope CSS to this state.
      // Otherwise, browsers load with the `:invalid` state applied.
      form.classList.add("validated");
    }, false);
  }, false);
}());
    }, false);
  }, false);
}());
