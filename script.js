function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src', 'menino.png')
      } else if (idade >= 10 && idade < 35) {
        //jovem
        img.setAttribute('src', 'homem_jovem.png')
      } else if (idade >= 35 && idade < 60) {
        //adulto
        img.setAttribute('src', 'homem_maduro.png')
      } else {
        //idoso
        img.setAttribute('src', 'homem_idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >=0 && idade < 10) {
        //criança
        img.setAttribute('src', 'menina.png')
      } else if (idade >= 10 && idade < 35) {
        //jovem
        img.setAttribute('src', 'mulher_jovem.png')
      } else if (idade >= 35 && idade < 60) {
        //adulto
        img.setAttribute('src', 'mulher_madura.png')
      } else {
        //idoso
        img.setAttribute('src', 'mulher_idosa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

  }


}