const d = document,
h = d.head;
export default function countDown (id,date,html,css){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(date).getTime(),
    $LinkCssPreview = css;

        

    let countDownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            day = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = 
            ('0' + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutes =
            ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
            seconds =
            ('0' + Math.floor(limitTime % (1000 * 60 ) / (1000))).slice(-2);

        $countdown.innerHTML= `<h2>Faltan: Dias ${day} Horas ${hours} Minutos ${minutes} Segundos ${seconds}</h2>`
        console.log(countdownDate,now,limitTime)
        
        if(limitTime <= 0 ){
            clearInterval(countDownTempo)
            let titlepass = $countdown.innerHTML = `<h3>Que Esperas?</h3>`
            const $inputLg = d.createElement('input')
            $inputLg.setAttribute('class','inputlg')
            $inputLg.setAttribute('maxlength','12')
            $inputLg.setAttribute('placeholder','Entrar')
            //$btnLg.setAttribute('type','submit')
            $inputLg.classList.add('pass-input')
            $countdown.appendChild($inputLg)
            
            d.addEventListener('input', e =>{
                if(e.target.matches('.inputlg')){
                    console.log($inputLg.value)
                    if($inputLg.value.toLowerCase() === 'infinito'){
                       const $linkcss = d.querySelector('link'),
                        $removetitlePrimary = d.querySelector('.title-section')
                       $linkcss.setAttribute('href' , $LinkCssPreview)
                        titlepass = $countdown.innerHTML = `
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
                                <div class="info-right img-vid"><button  class="btn-vid" id="btnVideo"><h3>Ver</h3></button></div>
                            </section>
                        </article>
                        </div>
                        <footer>
                            <h1>Te Deseo Una Feliz <span>Navidad</span></h1>
                        </footer>`
                    }        
                }
            })
        }

    },1000);
}
