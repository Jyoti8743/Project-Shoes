
// let url = "https://kontests.net/api/v1/all"
// let response = fetch(url)
// response.then((v) => {
//     return v.json()
// }).then ((contests)=>{
//     console.log(contests)
//     ihtml = ""
//     for (item in contests) {
//         console.log(contests[item])
//         ihtml +=
//             <div class="card" style="width: 18rem;">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_UJr_uqIIdXYJZu3g37xZeDsd_6rjfxOvA&usqp=CAU" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${contests[item].name}</h5>
//                         <p class="card-text"><a href="${contests[item].url">Visit Here</a></p>
//                         <p>Starts at: {contests[item].start_time}</p>
//                         <p>Starts at: {contests[item].end_time}</p>
//                         <a href="#" class="btn btn-primary">Click Here</a>
//                     </div>
//                 </div>

//     }
//         cardContainer.innerHTML = ihtml
// }) 