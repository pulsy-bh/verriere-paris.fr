// document.addEventListener("DOMContentLoaded", function () {
//   const tabLinks = document.querySelectorAll('.nav-tabs a');
//   const tabPanes = document.querySelectorAll('.tab-pane');

//   tabLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();

//       // Remove 'active' class from all tabs
//       tabLinks.forEach(l => l.parentElement.classList.remove('active'));
//       // Remove 'active in show fade' classes from all tab panes
//       tabPanes.forEach(pane => {
//         pane.classList.remove('active', 'in', 'show');
//       });

//       // Activate clicked tab
//       this.parentElement.classList.add('active');
      
//       // Get target pane
//       const targetSelector = this.getAttribute('href');
//       const targetPane = document.querySelector(targetSelector);

//       // Add 'active in show' classes to the selected pane
//       if (targetPane) {
//         targetPane.classList.add('active', 'in', 'show');
//       }
//     });
//   });
// });


// const nav = document.querySelector(".fixedNav");
// window.addEventListener("scroll", fixNav);

// function fixNav() {
//   if (window.scrollY > nav?.offsetHeight + 150) {
//     nav.classList.add("navbar-active");
//    nav.removeAttribute('clip-path');
//   } else {
//     nav.classList.remove("navbar-active");
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progres");

  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-value");
    bar.style.width = value;
    bar.classList.add("animate-progress");
  });
});




// if (matchMedia) {
//   var mq = window.matchMedia("(min-width: 768px)");
//   mq.addListener(WidthChange);
//   WidthChange(mq);
// }


$(window).scroll(function () {

  if ($(document).scrollTop() > 0) {
    $(".menu").animate({
    }, 1000);
    $(".menu").addClass('fixmenu');
  }
  else {
    $(".menu").animate({
    }, 1000);
    $(".menu").removeClass('fixmenu');
  }
});


$(document).ready(function () {
  var $lightbox = $('#lightbox');

  $('[data-target="#lightbox"]').on('click', function (event) {
    var $img = $(this).find('img'),
      src = $img.attr('src'),
      alt = $img.attr('alt'),
      css = {
        'maxWidth': $(window).width() - 100,
        'maxHeight': $(window).height() - 100
      };

    $lightbox.find('.close').addClass('hidden');
    $lightbox.find('img').attr('src', src);
    $lightbox.find('img').attr('alt', alt);
    $lightbox.find('img').css(css);
  });

  $lightbox.on('shown.bs.modal', function (e) {
    var $img = $lightbox.find('img');

    $lightbox.find('.modal-dialog').css({ 'width': $img.width() });
    $lightbox.find('.close').removeClass('hidden');
  });
});

var conf_name = "Verriere-paris";
var conf_email = "contact@verriere-paris.fr";
var modal_rgpd = '<div class="modal fade" id="modal-rgpd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
  '        <div class="modal-dialog" role="document">' +
  '            <div class="modal-content">' +
  '                <div class="modal-body">' +
  '                  * En cochant cette case, j’accepte que mes données personnelles soient collectées et traitées par le service commercial de ' + conf_name + '.' +
  '                   Leur traitement a pour finalité de traiter votre demande spécifique.<br>' +
  '                   Les données collectées sont conservées pour la durée de nos relations commerciales + 1 an. Conformément à la loi' +
  '                   « informatique et libertés », vous pouvez exercer votre droit d’accès aux données vous concernant et les faire rectifier' +
  '                   auprès de notre référent à <a href="mailto:"' + conf_email + '">' + conf_email + '</a>.<br>' +
  '                   Vous disposez également d’un droit de rectification, à l’oubli, à la portabilité, de limitation ou d’opposition auprès de notre référent à ' +
  '                   <a href="mailto:' + conf_email + '">' + conf_email + '</a>.<br><br>' +
  '                   En dernier recours, vous pouvez déposer une réclamation auprès de la CNIL.' +
  '                </div>' +
  '                <div class="modal-footer">' +
  '                    <div class="form-group text-center">' +
  '                        <button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Fermer</button>' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '        </div>' +
  '    </div>';
$(document).ready(function () {
  $(".info-rgpd label").after(function () {
    return '&nbsp;<a href="#" data-toggle="modal" data-target="#modal-rgpd"><i class="fa fa-info-circle"></i></a>' + modal_rgpd;
  });
});



$(window).scroll(function () {
  if ($(document).scrollTop() > 0) {
    $("#fixphone").slideDown(300);
  }
  else {
    $("#fixphone").slideUp(300);
  }
});




$('.bootstrap-datepicker input').datepicker({
  todayBtn: "linked",
  language: "fr",
  autoclose: true,
  todayHighlight: true
});

$('.clockpicker').clockpicker({
  autoclose: true
});

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $(document).ready(function () {
      $('.bxslider').bxSlider({
        minSlides: 3,
        auto: true,
        speed: 1800,
        pause: 5000,
        maxSlides: 3,
        slideWidth: 360,
        slideMargin: 10
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".custom-tabs a");
  const tabContents = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' class from all tabs and tab content
      tabs.forEach(t => t.parentElement.classList.remove("active"));
      tabContents.forEach(tc => {
        tc.classList.remove("in", "active", "show");
      });

      // Add 'active' to clicked tab
      this.parentElement.classList.add("active");

      // Get target content
      const targetId = this.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        targetContent.classList.add("in", "active", "show");
      }
    });
  });
});

grecaptcha.ready(() => {
  grecaptcha.execute("6Ldo2BErAAAAAIRIjKj6ds1XnwumkGKFvC8pWwms", { action: 'validate_captcha' }).then(token => {
      //console.log(token);
    document.querySelector('.recaptcha-token').value = token;
  });
});
