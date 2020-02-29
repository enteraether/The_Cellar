
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
    .then(sortWines)
}

function sortWines(wines){
    // const wineCollection = document.getElementById('welcome-image')
    // let wineBox = document.createElement('div')
    // wineBox.className = "wine-box"
    // wineBox.innerHTML = `
    // <h4>Whites</h4>
    // `

   let winesByType =  wines.filter(function(wine){
       switch (wine.wineType) {
           case "Red":

                console.log(wine.wineType === 'Red')
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