function change(index) {
  //   const p = document.getElementById('show');
  const p = document.querySelector('#show');
  console.log('p', p);
  switch (index) {
    case 1:
      p.innerHTML = '<iframe width=100% height=100% src="./w01/index.html" />';
      break;
    case 2:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w01/pokemon.html" />';
      break;
    case 3:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w02-imgGallery/imgGallery.html" />';
      break;
    case 4:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w02-blog/blog.html" />';
      break;
    case 5:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w03-div/div.html" />';
      break;
    case 6:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w04-tku60-js/div_tku60.html" />';
      break;  
      case 7:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w07-nav/nav.html" />';
      break;
    case 8:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w07-ms-clone/index.html" />';
      break;
      case 9:
        p.innerHTML =
          '<iframe width=100% height=100% src="./w08-school timetable/myclass_54.html" />';
        break;

        case 10:
          p.innerHTML =
            '<iframe width=100% height=100% src="./w09-resume/resume_54.html" />';
          break;

          case 11:
            p.innerHTML =
              '<iframe width=100% height=100% src="./w10-text/text.html" />';
            break;
    }
   
}
