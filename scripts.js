$(window).load(function() {
var videoHeight = $("#introVideo").height();
var navBarHeight = $("#navBar").height();
var skillsHeight = $("#skills").height() + videoHeight;
var quoteHeight = $("#quote").height();
var projectsHeight = $("#projects").height() + skillsHeight + quoteHeight;
var aboutHeight = $("#aboutMe").height() + projectsHeight;

});


// Background Video 
//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });

/////-------end video script

/////---------bubble fizz canvas
// window.requestAnimFrame = (function() {
//   return window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function(callback) {
//       window.setTimeout(callback, 1000 / 60);
//     };
// })();

// var num = 425,
//   rad = 20;

// var s = [20, 15, 10, 5, 3];

// function _S() {
//   var curr = s.length;
//   var cur_ = Math.floor(Math.random() * curr);
//   return s[cur_];
// }

// function FizzBuzz(c) {
//   this.c = c;
//   this.$ = c.getContext('2d');
//   this.b = {};
//   this.go();
// }

// FizzBuzz.prototype.go = function() {
//   this.x = this.b.x = Math.random() * (this.c.width - rad);
//   this.y = this.b.y = Math.random() * (this.c.width - rad);
//   this.radi = _S();
//   this.xPos = Math.random() * 9;

//   this.draw();
// };

// FizzBuzz.prototype.draw = function() {
//   this.$.globalCompositeOperation = 'source-over';
//   this.$.fillStyle = "rgba(240, 240, 240, .5)";
//   this.$.globalCompositeOperation = 'lighter';
//   this.$.save();
//   this.$.beginPath();
//   this.$.arc(this.x, this.y, this.radi, 0, Math.PI * 2, false);
//   this.$.fill();
//   this.$.restore();
// };

// FizzBuzz.prototype.disp = function() {
//   this.x = (Math.sin(this.xPos -= 0.35) * this.radi * 0.16 + 6) + this.b.x;
//   this.y -= this.radi * .10;
//   if (this.y <= -100) {
//     this.y = this.c.height + rad;
//   }
//   this.draw();
// };

// function Fizz(c) {
//   this.c = c;
//   this.$ = c.getContext('2d');
//   this.arr = [];
// }

// Fizz.prototype.add = function(buzz) {
//   this.arr.push(buzz);
// };

// Fizz.prototype.upd = function() {
//   this.$.clearRect(0, 0, this.c.width, this.c.height);

//   for (var i in this.arr) {
//     this.arr[i].disp();
//   }
// };

// window.addEventListener('load', function() {
//   var c = document.getElementById('canv');
//   var $ = c.getContext('2d');
//   var w = c.width = window.innerWidth;
//   var h = c.height = window.innerHeight;

//   var fb = new Fizz(c);
//   for (var i = 0, u = num; i < u; i++) {
//     var buzz = new FizzBuzz(c);
//     fb.add(buzz);
//   }
//   _t();

//   function _t() {
//     fb.upd();
//     window.requestAnimFrame(_t);
//   }
// }, false);

// window.addEventListener('resize', function() {
//   c.width = w = window.innerWidth;
//   c.height = h = window.innerHeight;
//   c.style.position = 'absolute';
//   c.style.left = (window.innerWidth - w) *
//     .01 + 'px';
//   c.style.top = (window.innerHeight - h) *
//     .01 + 'px';
// });


////----------end canvas(bubble fizz)
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

    var canvas = document.getElementById('canv'); 
    
    var context = canvas.getContext('2d');
    
var W = window.innerWidth, H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  var particle_count = 100,
    particles = [],
    // colors   = ["#04A2F7", "#0087D0", "#438AB0"];
    colors =["#fff", "#199FF4"];
    function Particle()
    {

        this.radius = Math.round((Math.random()*2)+2);
        this.x = Math.floor((Math.random() * canvas.width/2) + this.radius); 
        this.y =  Math.floor((Math.random() * canvas.height/2) + this.radius); 
        this.color = colors[Math.round(Math.random()*colors.length)];
        this.speedx = Math.round((Math.random()*201)+0)/100;
        this.speedy = Math.round((Math.random()*201)+0)/100;

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
////---------end canvaz(nodes)

} ////-----end document ready