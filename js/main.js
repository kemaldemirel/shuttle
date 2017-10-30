window.onload = function(){
  var nav = document.querySelector('.main-nav');
  var body = document.querySelector('body');
  var goUp = document.querySelector('.go-up');

  this.addEventListener('scroll', function(){
    if(this.pageYOffset >= 100){
      nav.classList.add('fixed-nav');
      body.style = 'padding-top: ' + nav.offsetHeight + 'px';
    }else{
      nav.classList.remove('fixed-nav');
      body.style = '';
    }
  });

    this.addEventListener('scroll', function(){
      if(this.pageYOffset >= 200){
        goUp.style = 'display: block';
      }else {
        goUp.style = 'display: none';
      }
    });

    goUp.addEventListener('click', function(){
      window.scrollTo(0, 0);
    });
};
