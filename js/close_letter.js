const d = document,
      b = document.body;
export default function openLt(styleCss){
    d.addEventListener('click', e =>{
        console.log(e.target)
        if(e.target.matches('.btn-back')){
            const $rmContent = document.querySelector('.ctn-letter'),
            $addContent = document.querySelector('.ctn-time'),
            $linkcss = d.querySelector('link').setAttribute('href' , styleCss)
            $rmContent.remove()
            $addContent.innerHTML = ` 
            <div class="ctn-sections">
            <article class="ctn-left">
                <section class="ctn-previewCard">
                    <div class="info-left title-card">
                    <p>
                        Este año fue muy duro a nivel personal,social,familiar,economico y sobre todo emocional
                        por ese motivo te invito a abrir esta carta</p>
                    </div>
                    <div class="info-left btn-open-card"><button class="btn-vid" id="btnLt"><h3>Abrir</h3></div>
                </section>
        
            </article>
            <article class="ctn-right">
                <section class="ctn-info">
                    <div class="info-right"><img class="img-top"></div>
                    <div class="info-right img-vid">
                    <a href="https://vimeo.com/494539800">Ver Video</a>
                    </div>
                </section>
            </article>
            </div>
            <footer>
                <h1>Te Deseo Una Feliz <span>Navidad</span></h1>
            </footer>`
        }
    })
}
/*  const $head = d.querySelector('head'),
$cssStyle = d.createElement('link')
$cssStyle.setAttribute('href', ltcss)
$head.appendChild($cssStyle)
b.innerHTML = `
$addContent = document.querySelector('.ctn-time'),
$linkcss = d.querySelector('link').setAttribute('href' , styleCss)
  */