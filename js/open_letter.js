const d = document;
export default function openLt(){
    d.addEventListener('click', e =>{
        console.log(e.target)
        if(e.target.matches('#btnLt')){
            alert('papurri')
        }
    })
}