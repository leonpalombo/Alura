var listaFilmes = ['https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg','https://upload.wikimedia.org/wikipedia/pt/thumb/c/c0/Dune_2020.jpeg/230px-Dune_2020.jpeg','https://m.media-amazon.com/images/I/51MAuTMt+gL._AC_.jpg','https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg','https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080']
var nomeFilmes = ["Interestelar", "Bacurau", "Shrek 2", "Cidade de Deus", "Her", "Hereditário", "Ponyo", "Túmulo dos Vagalumes"]

document.write("<div class = 'imagens'>");

for (var i=0; i < listaFilmes.length; i++)

    document.write('<img src=' + listaFilmes[i] + ">")

