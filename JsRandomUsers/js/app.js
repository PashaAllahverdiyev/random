let users = []
function getusers(){
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then( data => {
        let x = ''
        for(let user of data.results) {
            x += `
            <div class="col-lg-3">
                
                <div class="card">
                    <img src=${user.picture.medium} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                      <p class="card-text">Tel: ${user.phone}</p>
                      <p class="card-text">Email: ${user.email}</p>
                     
                    </div>
                  </div> 
               </div>
     
            `
            

        }
       document.querySelector('#list').innerHTML = x
    })
    .catch(err => console.log(err))
}

function sliders(){
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(data => {
        let z = ''
        for(let user of data.results){
         z+=`
         <img src="${user.picture.medium}" alt="">
         `

        }
        document.querySelector('.slider').innerHTML = z
    })
    .catch(err=>console.log(err))

setInterval(() => {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then (data => {
    let z = ''
    for(let user of data.results){
        z+= `
        <img src="${user.picture.medium}" alt="">

        `
    }
    document.querySelector('.slider').innerHTML = z
    })
    .catch(err => console.log(error))

},2000);
}
getusers()
sliders()