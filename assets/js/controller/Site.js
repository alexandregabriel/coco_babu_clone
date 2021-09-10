class Site {
    constructor(topInfos){


        this.closeInfo(topInfos);   
    }    
    
    closeInfo(value){
        for(let info of value){
            info.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('icon__alertClose')){
                    info.style.display = 'none';
                }
            })
        }
    }


}