$(document).ready((direction) => {
  /*---Toggle navbar---*/
  $(".burger-nav").on("click", () => {
    $(".container div ul").toggleClass("open");
  });

  /*----------------Navbar link scrolling---------------*/

  /*---name fade up---*/
  $(".js--wp-home").waypoint(
    (direction) => {
      $(".js--wp-home").addClass("animated fadeInUp");
    },
    {
      offset: "80%",
    }
  );

  /*---description fade up---*/
  $(".js--wp-about").waypoint(
    (direction) => {
      $(".js--wp-about").addClass("animated fadeInUp");
    },
    {
      offset: "80%",
    }
  );

  $(".js--wp-about-pic").waypoint((direction)=>{
    $(".js--wp-about-pic").addClass("animated fadeInDown");
  },
  { 
    offset: "80%",
  }
  )
  /*---Skills panel flip---*/
  const panel = [1, 2, 3];

  panel.forEach((count) => {
    $(".js--wp-skills-" + count.toString()).waypoint(
      (direction) => {
        $(".js--wp-skills-" + count).addClass("animated fadeInRight");
      },
      {
        offset: "50%",
      }
    );
  });
  
  /*---projects fade up---*/
  $(".js--wp-projects").waypoint(
    (direction) => {
      $(".js--wp-projects").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  /*Adds black background to navbar when scrolling detected*/
  $(document).scroll((direction) => {
    var $nav = $("#mainnavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
