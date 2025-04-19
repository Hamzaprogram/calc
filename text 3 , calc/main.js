const calc_cont = document.querySelector(".calc_cont")
const area = document.querySelector(".area")
calc_cont.addEventListener('click', (e) => {
    if(e.target.nodeName == "BUTTON"){
        switch(e.target.textContent){
            case "C":
                clear();
                break;
                case "DEL":
                    delet();
                break;
            case "=" :
                val();
                break;
            default :
            addToArea(e.target.textContent)
            break;
        }
    }
})
function clear(){
    area.textContent = ""
}

function addToArea(value){
    area.textContent += value
}
function delet (){
    cr = area.textContent;
    area.textContent = cr.substring(0 , cr.length - 1)
}

function val() {
    try {
        let calculation = math.evaluate(area.textContent)
        area.textContent = calculation;
    }catch (error){
        area.textContent ="invalid operator"
        console.error(error);
    }
}