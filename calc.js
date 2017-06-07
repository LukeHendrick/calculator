$(document).ready(function() {
  var temp = ''
  var newExp = ''
  $('.btn').on('click',function() {
    function evalbtn() {
      return eval(newExp);
    }
    var a = $(this).html();
    if (a !== '=') {
    newExp += a;
    }
    if (a == '=') {
      var tot = evalbtn();
      $('.main').html(tot);
      $('.adding').html(newExp);
      temp = newExp = String(tot);
    } else if (a == "AC") {
      $('.main').html(null);
      $('.adding').html(null);
      disp = disp2 = newExp = ''
      temp = '';
    } else if (a == "CE") {
      $('.main').html('<br>');
      newExp = newExp.slice(0,newExp.indexOf(temp));
      $('.adding').html(newExp);
      disp = null
      temp = newExp[newExp.length-1];
    } else {
      $('.main').html(a);
      $('.adding').html(newExp);
      temp = a
    }
  })
});
