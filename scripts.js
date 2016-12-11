
// Background Video 
//jQuery is required to run this code
$( document ).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    //make sure screen is fully loaded before pre-load screen disappears
    setTimeout(function(){
        $('body').addClass('loaded');
        
    }, 1000);

    //Keep navbar from showing on Load
    $(window).bind('load', function() {
        $("#navBar").hide();
    });

});


/////-------end video script

////-----Nav Controls

var topAtLoad = (window.innerHeight);
$(window).bind('scroll', function() {
    console.log(innerHeight);

    if ($(window).scrollTop() > innerHeight) {
        $("#navBar").removeClass("navbar-top");
        $("#navBar").addClass("navbar-fixed-top");
        $("#navBar").fadeIn(2000).css("display", "visible");
    }
    else {
        $("#navBar").fadeOut(2000).hide(2000);
    }
})
////----end Nav Controls
///Project sliding tooltips
    $('[data-toggle="tooltip"]').tooltip();
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); //If you're reading this and it doesn't work, SCRIPTS MUST BE AT THE BOTTOM OF INDEX.HTML!!!!!! 
///end Projects

///Fix ugly response message
// $(function () {

//     $('#contact-form').validator();

//     $('#contact-form').on('submit', function (e) {
//         if (!e.isDefaultPrevented()) {

//             var url = "mail.php";

//             $.ajax({
//                 type: "POST",
//                 url: url,
//                 data: $(this).serialize(),
//                 success: function (data)
//                 {
//                     var messageAlert = 'alert-' + data.type;
//                     var messageText = data.message;

//                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
//                     if (messageAlert && messageText) {
//                         $('#contact-form').find('.messages').html(alertBox);
//                         $('#contact-form')[0].reset();
//                     }
//                 }
//             });

//             $('#myModal').modal('show');
//             $('#contact-form')[0].reset();
//             return false;
//         }
//     })
// });
///

////--------nodes canvas
  window.requestAnimFrame = function()
  {
    return (
      window.requestAnimationFrame       || 
      window.webkitRequestAnimationFrame || 
      window.mozRequestAnimationFrame    || 
      window.oRequestAnimationFrame      || 
      window.msRequestAnimationFrame     || 
      function(/* function */ callback){
        window.setTimeout(callback, 1000 / 60);
      }
    );
  }();

    var canvas = document.getElementById('canvas'); 
    
    var context = canvas.getContext('2d');
    
var W = window.innerWidth, H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  var particle_count = 60,
    particles = [],
    colors   = ["#4DA422", "#256E27", "#143234", "#15233E"];
    // colors =["#fff", "#84c341", "#C0C0C0"];
    function Particle()
    {

        this.radius = Math.round((Math.random()*4)+4);
        this.x = Math.floor((Math.random() * canvas.width/2) + this.radius); 
        this.y =  Math.floor((Math.random() * canvas.height/2) + this.radius); 
        this.color = colors[Math.round(Math.random()*colors.length)];
        this.speedx = Math.round((Math.random()*100)+0)/100;
        this.speedy = Math.round((Math.random()*100)+0)/100;

        switch (Math.round(Math.random()*colors.length))
        {
            case 1:
            this.speedx *= 1;
            this.speedy *= 1;
            break;
            case 2:
            this.speedx *= -1;
            this.speedy *= 1;
            break;
            case 3:
            this.speedx *= 1;
            this.speedy *= -1;
            break;
            case 4:
            this.speedx *= -1;
            this.speedy *= -1;
            break;
        }
            
        this.move = function()
        {
            
            context.beginPath();
            context.globalCompositeOperation = 'source-over';
            context.fillStyle   = this.color;
            context.globalAlpha = 1;
            context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            context.fill();
            context.closePath();

            this.x = this.x + this.speedx;
            this.y = this.y + this.speedy;
            
            if(this.x <= 0+this.radius)
            {
                this.speedx *= -1;
            }
            if(this.x >= canvas.width-this.radius)
            {
                this.speedx *= -1;
            }
            if(this.y <= 0+this.radius)
            {
                this.speedy *= -1;
            }
            if(this.y >= canvas.height-this.radius)
            {
                this.speedy *= -1;
            }

            for (var j = 0; j < particle_count; j++)
            {
                var particleActuelle = particles[j],
                    yd = particleActuelle.y - this.y,
                    xd = particleActuelle.x - this.x,
                    d  = Math.sqrt(xd * xd + yd * yd);

                if ( d < 200 )
                {
                    context.beginPath();
                    context.globalAlpha = (200 - d) / (200 - 0);
                    context.globalCompositeOperation = 'destination-over';
                    context.lineWidth = 1;
                    context.moveTo(this.x, this.y);
                    context.lineTo(particleActuelle.x, particleActuelle.y);
                    context.strokeStyle = this.color;
                    context.lineCap = "round";
                    context.stroke();
                    context.closePath();
                }
            }
        };
    };
    for (var i = 0; i < particle_count; i++)
    {
        var particle = new Particle();
        particles.push(particle);
    }


    function animate()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particle_count; i++)
        {
            particles[i].move();
        }
        requestAnimFrame(animate);
    }
   
    animate(); 
////---------end canvas(nodes)
$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {

            var url = "mail.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });

            $('#myModal').modal('show');
            $('#contact-form')[0].reset();
            return false;
        }
    })
});
   
