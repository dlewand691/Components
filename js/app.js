// @codekit-prepend "js/cognizant-framework-2020.js"
// @codekit-prepend "../bower_components/rellax/rellax.min.js"

// var rellax = new Rellax('.rellax');

// Set wrapper to .custom-element instead of the body
// var rellax = new Rellax('.rellax', {
//   wrapper: '.bg-parallax'
// });

// =============================================================================================
// AOS- ANIMATE ON SCROLL
// =============================================================================================

// $(document).ready(function() {
//   AOS.init({
//       // startEvent: 'load'
//   });
// });

// -----  End of AOS- ANIMATE ON SCROLL  ---------------------------------------------

// function removeAOS() {
//     $('#pardotModal .column').removeClass('aos-animate');
// }
$('[data-reveal]').on('closeme.zf.reveal', function() {
    $('#pardotModal *').removeClass('aos-animate');
});

// $('[data-reveal]').on('closeme.zf.reveal', function() {
//      setTimeout(function() {
//          $('#pardotModal *').removeClass('aos-animate');
//      }, 100);
// });

// $('[data-reveal]').on('closeme.zf.reveal', function() {
//     var modal = $(this);
//     console.log(modal);
//     setTimeout(function() {
//         console.log('aos refresh')
//         // AOS.refreshHard({});
//     }, 600);
// });
// AOS.init({
// });
// document.addEventListener("aos:in:super-duper", ({ detail }) => {
//     console.log("animated in", detail);
// });
// 
// document.addEventListener("aos:out:super-duper", ({ detail }) => {
//     console.log("animated out", detail);
// });
