$(document).ready(function(){
    openTooltip('#btn', '#tooltip_layer');
  });
  
  function openTooltip(selector, layer) {
        
    var $layer = $(layer);
  
    // 툴팁버튼 처리
    $(selector).on('click', function() {
      $layer.toggleClass('on');
    });
    
    function overTooltip() {
      
      var $this = $(selector);
      
      // 마우스 오버시 툴팁 레이어 노출
      $this.on('mouseover focusin', function() {
        $(this).next(layer).show(); 
      })  
      // 마우스 떠날시 툴팁 레이어 숨김
      $this.on('mouseleave focusout', function() {
        if(!$layer.hasClass('on')) {
            $(this).next(layer).hide();
          }
      })
    }
    overTooltip();
  }

function changeImage() {
    document.getElementById('cat').src = "피아노샴.gif";
}

function changeImages() {
    document.getElementById('cat2').src = "페르시안2.gif";
}


