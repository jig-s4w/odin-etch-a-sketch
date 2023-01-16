
document.body.onload = addGrid;
grid = document.querySelector("#grid")

defaultGridSize = 16
gridRefresh= document.querySelector("#gridRefresh")
gridRefresh.addEventListener('click',refreshGrid)

function addGrid(){
    let size = 360/defaultGridSize
    for(i=0;i<defaultGridSize;i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("gridbox")
        newDiv.style.width=`${size}px`
        newDiv.style.height=`${size}px`
        newDiv.addEventListener('mouseover',changeColor)
        for(j=0;j<defaultGridSize;j++){
            const innerDiv=document.createElement("div")
            innerDiv.classList.add("gridbox")
            innerDiv.style.width=`${size}px`
            innerDiv.style.height=`${size}px`
            innerDiv.addEventListener('mouseover',changeColor)
            newDiv.appendChild(innerDiv)
        }
        grid.appendChild(newDiv)
    }      
}

function refreshGrid(){
    let input = document.querySelector("#gridsize")
    let Gridsize = Number(input.value)
    if(!isNaN(Gridsize) && Gridsize <= 100 && Gridsize >0){
        grid.innerHTML=""
        grid.classList.remove("black")
        let size = 360/Gridsize
        for(i=0;i<Gridsize;i++){
            const newDiv = document.createElement("div")
            newDiv.classList.add("gridbox")
            newDiv.style.width=`${size}px`
            newDiv.style.height=`${size}px`
            newDiv.addEventListener('mouseover',changeColor)
            for(j=0;j<Gridsize;j++){
                const innerDiv=document.createElement("div")
                innerDiv.classList.add("gridbox")
                innerDiv.style.width=`${size}px`
                innerDiv.style.height=`${size}px`
                innerDiv.addEventListener('mouseover',changeColor)
                newDiv.appendChild(innerDiv)
            }
            grid.appendChild(newDiv)
        } 
    }
    else{
        alert("Please enter a valid Number")
        grid.innerHTML=""
        grid.classList.remove("black")
    }
}

// gridColor = document.querySelector("#grid")
// gridColor.addEventListener('mouseover',changeColor)



function changeColor(e){   
    if(e.target.id !== "grid"){ 
        e.target.classList.add("black")
    }  
}