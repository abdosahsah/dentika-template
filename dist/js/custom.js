$(document).ready(function () {
  /* Apply fancybox to portfolio image gallery */
  $("a.portfolio-images").fancybox();

  // Make carousel for testimonial section using slick
  $(".dentika-testimonial-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
});
