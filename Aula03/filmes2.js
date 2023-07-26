var listaFilmes = ["https://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg", 'https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg','https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg', "https://upload.wikimedia.org/wikipedia/en/9/95/10_Things_I_Hate_About_You_film.jpg", "https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"]

/*listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg'
listaFilmes[1]='https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg'
listaFilmes[2]='https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg'*/

// i=i+1 ou i++
  
for (var i=0; i < listaFilmes.length; i++) {
  document.write('<img src=' + listaFilmes[i] + ">")
  //document.write(nomeFilmes[i])
}

