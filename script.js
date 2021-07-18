let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

   btn.onclick = function() {
     sidebar.classList.toggle("active");
     if(btn.classList.contains("bx-menu")){
       btn.classList.replace("bx-menu" , "bx-menu-alt-right");
     }else{
       btn.classList.replace("bx-menu-alt-right", "bx-menu");
     }
   }
   searchBtn.onclick = function() {
     sidebar.classList.toggle("active");
   }






   let text = document.getElementById("text");
   let form = document.getElementById("form");
   
   form.addEventListener("submit", handelData)
    
   function handelData(e){
       e.preventDefault();
   
       let movieName = text.value;
   
       fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=bfd360a9&S=" + movieName + '"' )
       .then(res => res.json())
       .then(data => {
       
           handelResponse(data.Search);
       })
       .then(err => {});
   }
   
   
   
   
   function handelResponse(data){
   
       console.log(data)
   
      let dataContainer= document.getElementById("dataContainer");
   
      let output = "";
   
       for(var i = 0; i < data.length; i++){
   
           output += `
           
             <div class="group-container">
               <div class="image-container">
                 <img src=${data[i].Poster}>
               </div>
               <p class="p-handel">${data[i].Title} <span>${data[i].Year}</span></p>
             </div> 
           
           `;
       }
   
       dataContainer.innerHTML = output;
   }   