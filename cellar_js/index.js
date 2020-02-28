
const BASEURL = "http://localhost:3000/"
const WINESURL = "http://localhost:3000/api/v1/wines"


document.addEventListener('DOMContentLoaded', () => {

    loadBasePage()
    ////////
})

function loadBasePage(){
    fetch(BASEURL)
    .then(resp=>resp.json())
    .then(renderHomePage)
}

function renderHomePage(wines){
    const wineCollection = document.getElementById('welcome-image')
    let whiteWineBox = document.createElement('div')
    whiteWineBox.className = "wWB"
    whiteWineBox.innerHTML = `
    <h4></
    `

   let winesByType =  wines.filter(function (e){
       switch (wineType) {
           case "Red":

                console.log("red")
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