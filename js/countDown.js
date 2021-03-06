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
            let titlepass = $countdown.innerHTML = `<h1>🎅Ready🤶</h1>`
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
                    if($inputLg.value.toLowerCase() === 'infinito' ||$inputLg.value.toLowerCase() === 'etereo'||$inputLg.value.toLowerCase() === 'inefable'||$inputLg.value.toLowerCase() === 'acendrado'||$inputLg.value.toLowerCase() === 'nefelibata'||$inputLg.value.toLowerCase() === 'serendipia'||$inputLg.value.toLowerCase() === 'petricor' ){
                       const $linkcss = d.querySelector('link');
                       $linkcss.setAttribute('href' , $LinkCssPreview)
                        $countdown.innerHTML = `
                        <div class="ctn-sections">
                        <article class="ctn-left">
                            <section class="ctn-previewCard">
                                <div class="info-left title-card">
                                <p>
                                    Este año Fue Muy Duro A Nivel Personal,Social,Familiar,Economico y Sobre Todo Emocional
                                    Por Ese Motivo Te Invito A Abrir Esta Carta</p>
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
                }
            })
        }

    },1000);
}
