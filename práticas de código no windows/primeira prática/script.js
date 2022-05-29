let h1title = document.createElement('h1');
h1title.innerHTML = 'Paleta de Cores';
h1title.id= 'title';
document.getElementById('titulo').appendChild(h1title)

//criar divs,atribuir classe color e ids com cores
function createPalette() {
    for(index = 0; index < 4; index +=1){
        let divid = ['black', 'blue', 'pink', 'green'] 
        let divs = document.createElement('div')
        for (color = 0; color < divid.length; color += 1){
            divs.id = divid[index]
        }
        divs.className = 'color'
        document.getElementById('color-palette').appendChild(divs)
    }
}
//atribuir cores a paleta de cores
function putcolors(){
    let colors = ['black', 'blue', 'pink', 'green']   
    for(index = 0; index < colors.length; index +=1){
        let selectedcolor = document.getElementById(colors[index])
        selectedcolor.style.backgroundColor = colors[index]
        }
        
    
}
function createPixelBoard (pixels){
    for(index = 0; index < 1; index += 1){
        let section = document.getElementById('pixel-board')
        let pixelLine = document.createElement('section')
        pixelLine.className = 'pixelLine'
        section.appendChild(pixelLine)
        for (i = 0; i < pixels; i += 1){
            let pixels = document.createElement('div')
            pixels.className = 'pixel'
            pixelLine.appendChild(pixels)
            
        }
    }
    for(index = 0; index < 1; index += 1){
        let section = document.getElementById('pixel-board')
        let pixelLine = document.createElement('section')
        pixelLine.className = 'pixelLine'
        section.appendChild(pixelLine)
        for (i = 0; i < pixels; i += 1){
            let pixels = document.createElement('div')
            pixels.className = 'pixel'
            pixelLine.appendChild(pixels)
            
        }
    }
    for(index = 0; index < 1; index += 1){
        let section = document.getElementById('pixel-board')
        let pixelLine = document.createElement('section')
        pixelLine.className = 'pixelLine'
        section.appendChild(pixelLine)
        for (i = 0; i < pixels; i += 1){
            let pixels = document.createElement('div')
            pixels.className = 'pixel'
            pixelLine.appendChild(pixels)
            
        }
    }
    for(index = 0; index < 1; index += 1){
        let section = document.getElementById('pixel-board')
        let pixelLine = document.createElement('section')
        pixelLine.className = 'pixelLine'
        section.appendChild(pixelLine)
        for (i = 0; i < pixels; i += 1){
            let pixels = document.createElement('div')
            pixels.className = 'pixel'
            pixelLine.appendChild(pixels)
            
        }
    }
    for(index = 0; index < 1; index += 1){
        let section = document.getElementById('pixel-board')
        let pixelLine = document.createElement('section')
        pixelLine.className = 'pixelLine'
        section.appendChild(pixelLine)
        for (i = 0; i < pixels; i += 1){
            let pixels = document.createElement('div')
            pixels.className = 'pixel'
            pixelLine.appendChild(pixels)
            
        }
    }
}
createPixelBoard(5)
createPalette()
putcolors()




