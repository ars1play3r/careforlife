   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var welcomeCarousel = new bootstrap.Carousel('#welcomeCarousel', {interval: 6000, pause: false});
   });
   
   $(document).ready(function()
   {
      $("a[href*='#welcomeLayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_welcomeLayoutGrid').offset().top-68 }, 600, 'easeOutCirc');
      });
      $("a[href*='#quoteContainer']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#quoteContainer').offset().top-60 }, 600, 'easeInCubic');
      });
      $("a[href*='#aboutLayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_aboutLayoutGrid1').offset().top }, 600, 'easeOutCirc');
      });
      $("a[href*='#featuresLayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_featuresLayoutGrid').offset().top }, 600, 'easeInCubic');
      });
      $("a[href*='#newsletterContainer']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#newsletterContainer').offset().top-60 }, 600, 'easeOutCirc');
      });
      $('#headerMenu2-overlay').overlay({hideTransition:true});
      $('#headerMenu2').on('click', function(e)
      {
         $.overlay.toggle($('#headerMenu2-overlay'));
         return false;
      });
   });
