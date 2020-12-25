const d = document;
export default function openVid(){
    d.addEventListener('click', e =>{
        console.log(e.target)
        if(e.target.matches('#btnVideo')){

            let vid = '/asset/video/vid.mp4',
            video = d.createElement('video');
            video.src = vid;
            video.autoplay = true;
            video.setAttribute('id','Video');

            const $ctnVid = d.querySelector('.img-vid'),
            $rmbtnVid = d.querySelector('#btnVideo')
            $rmbtnVid.remove()
            $ctnVid.style.backgroundImage = 'none';
            $ctnVid.append(video)
            setTimeout(() => {
            let img = 'url(asset/img/previewVid.jpg)'
            const $rmbtnVideo = d.getElementById('Video')
            $rmbtnVideo.remove()
            $ctnVid.style.backgroundImage = img;
            let btn = d.createElement('button');
            btn.classList.add('btn-vid');
            btn.setAttribute('id','btnVideo');
            btn.innerHTML = `<h3>Ver</h3>`
            $ctnVid.append(btn)
            },61500);
        }
    })
}