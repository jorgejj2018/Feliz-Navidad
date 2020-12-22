const d = document;

export default function countDown (id,date,textTime){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(date).getTime();

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

        $countdown.innerHTML= `<h2>Faltan: Dias${day} Horas${hours} Minutos${minutes} Segundos${seconds}</h2>`
        console.log(countdownDate,now,limitTime)
        
        if(limitTime <= 0 ){
            clearInterval(countDownTempo)
            $countdown.innerHTML = `<h3>Que Esperas?</h3>`
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
                        $countdown.innerHTML = `<h3>CARTA</h3>`
                    }        
                }
            })
        }

    },1000);



}