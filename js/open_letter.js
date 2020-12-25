const d = document,
      b = document.body;
export default function openLt(styleCss){
    d.addEventListener('click', e =>{
        console.log(e.target)
        if(e.target.matches('#btnLt')){
            // div y su clase ,boton close card , crear un const para el contenido html
            // Mas otra para su contenido css
            const $rmContent = document.querySelector('.ctn-sections'),
                  $addContent = document.querySelector('.ctn-time'),
                  $linkcss = d.querySelector('link').setAttribute('href' , styleCss)
            $rmContent.remove()
            $addContent.innerHTML = `<div class="ctn-letter">
            <button class="btn-back">❌</button>
            <div class="ctn-textCard">
            <h1>🎄🦌🎅🎄🥛🍪🤶🎁🧦🎅🍪🥛❄️🤶🎁🧦🎅🍪🥛❄️🤶🎄🦌🎄</h1>
            <hr>
            <p>✨Esta Carta La Escribo Hoy 23 De Diciembre con Mucho Cariño Para Ti Que La Estas Viendo, 
                Antes Que Todo Te Deseo Nuevamente Una Feliz Navidad.🤶🎅 
                <br>
                <br>
                ✨✨Ha Llegado Diciembre Epoca Donde Todos Nuestro Seres Queridos Nos reunimos
                Por Razones Este Año Es Diferente , Por Ese Motivo Me Eh Tomado El Tiempo Para Hacer 
                Este Medio Para Decirte Que Eres Un Ser Especial Para Mi , Para Toda Tu Familia 
                Y Sobre Todo Para Dios.🙏 
                <br>
                <br>
                ✨✨✨Todos Estamos Orgulloso de Que seas Parte de Nuestras Vidas
                Gracias Por Ser Parte De Mi Vida , Ya Sean Momentos Fugaz o Unicos Me Han Hecho Sentir Comodo
                Sin Mas Nada Que decir Te Deseo Mucho Exito y Bendiciones En Tu Vida , Hasta Luego 
                </p>
                🦌🎄🦌🎄🎅🥛🍪🤶🎁🧦🎅🍪🥛❄️🤶🎁🧦🎅🍪🥛❄️🤶🎄🦌🎄
            <br>
            <br>
            <hr>
            <h1>🎄De: Jorge Quintero🧑‍💻</h1>
            <h1>🎄🎁Para: Ti💖</h1>
            </div>
           </div>
    `
        }
        
        if(e.target.matches('btn-back')){

        }
    })
}
/*  const $head = d.querySelector('head'),
 $cssStyle = d.createElement('link')
 $cssStyle.setAttribute('href', ltcss)
 $head.appendChild($cssStyle)
 b.innerHTML = `
  */