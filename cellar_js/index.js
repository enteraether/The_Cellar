const BASEURL = "http://localhost:3000/"
const WINESURL = "http://localhost:3000/api/v1/wines"

document.addEventListener('DOMContentLoaded', () => {
    
    loadBasePage()
    // listenForHmpgClicks()
    ////////
    
})

function loadBasePage(){
    fetch(WINESURL)
    .then(resp=>resp.json())
    .then(filterWines)
}

function filterWines(wines){
    wines.filter(function(wine){
    if (wine.wineType === 'Red'){
        let 
    }
    })}

    let winesByType =  wines.filter(function(wine){  
    switch (wine.wineType) {
           case "Red":
               let redsList = (return wine.wineType === 'Red')
               return redsList
               debugger
            //  listenForHmpgClicks(redsList)
            break;
       
            // case "White":
            
            // break;

            // case "Sparkling":
               
            //     break;
        
            //  case "Rose":
             
            //  break;
       }
   })
}

// function listenForHmpgClicks(){
//     document.addEventListener('click', function(e){
//     if(e.target.id === 'red-btn'){
//         loadReds()
//     }
// })}

// function loadReds(){
//     let redsList = document.getElementById('welcome-image')
//     let redDiv = document.createElement('div')

//     redDiv.className = 'reds-list'
//     redDiv.innerHTML = `
    
//     `
//     redsList.append(redDiv)
// }
