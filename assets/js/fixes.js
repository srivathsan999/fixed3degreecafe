
document.addEventListener('DOMContentLoaded', function() {
  // Handle subscribe buttons
  document.querySelectorAll('.subscribe-now, .btn-subscribe').forEach(function(btn){
    btn.addEventListener('click', function(e){
      // Find nearest form to submit, else show a prompt
      var f = btn.closest('form');
      if(f) {
        if(typeof f.requestSubmit === 'function') f.requestSubmit();
        else f.submit();
      } else {
        alert('Subscribe clicked — no form found.'); 
      }
    });
  });

  // Replace broken images with placeholder and ensure alt text visible
  var placeholder = 'assets/images/placeholder.png';
  document.querySelectorAll('img').forEach(function(img){
    if(!img.getAttribute('alt') || img.getAttribute('alt').trim()==='') {
      img.setAttribute('alt','image');
    }
    img.addEventListener('error', function(){
      if(img.src.indexOf('placeholder.png')===-1) img.src = placeholder;
    });
    // If image has no src, set placeholder
    if(!img.src || img.src.trim()==='') img.src = placeholder;
  });
});
