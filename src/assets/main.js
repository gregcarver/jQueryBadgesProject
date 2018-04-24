$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/gcarv.json',
    dataType: 'jsonp',
    success: function (result) {
      pop(result.courses.completed)
    }

  });
  function pop(courses) {
    courses.forEach(function (index) {

      var div = document.createElement('div')
      var h3 = document.createElement('h3')
      var img = document.createElement('img')
      var a = document.createElement('a')


      $('#badges').append(div)
      $(div).addClass('course')

      console.log(courses)
      console.log(index)
      $(h3).html(index.title)
      img.src = index.badge
      a.href = index.url
      $(a).html('Go to Course')
      $(a).attr('target','_blank')


      $(div).append(h3)
      $(div).append(img)
      $(div).append(a)


    })
  }

});
