const d = document;
export default function openVid(){
    d.addEventListener('click', e =>{
        console.log(e.target)
        if(e.target.matches('#btnVideo')){
            alert('papurri')
        }
    })
}