const changeWord = (what) =>{
    if(window.localStorage){
        if(what){
            localStorage.setItem('color',what)
        }

    if(localStorage.getItem('word')){
        document.getElementsByTagName('body')[0].style.backgroundColor = localStorage.getItem('color')
    }
    }else{
        
    }
}

const clearWord22544 = ()=>{
    localStorage.removeItem('color')
    document.getElementsByTagName('body')[0].style.backgroundColor = ''
}