document.getElementById('generate_btn').addEventListener('click', ()=>{
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => 
            {
                const user =data.results[0];
                console.log(user)
                displayUser(user)
            })
        .catch(error => alert(error));
})
const displayUser=(user)=>{
    console.log(user);
 const userDiv = document.getElementById('user_div');
 userDiv.innerHTML=`
 <div class="card bg-white shadow-xl py-12">
 <div class="avatar">
     <div class="w-24 rounded-full absolute -top-20 right-10">
       <img src=${user.picture.large} />
     </div>
   </div>
 <div class="card-body items-center text-center">
   <h2 class="card-title"></h2>
   <div class="flex gap-8">
     <div class="flex flex-col">
         <span class="text-xl font-bold">${user.location.street.number}</span><span>Street Address</span>
     </div>
     <div class="flex flex-col">
         <span class="text-xl font-bold">${user.location.postcode}</span><span>Postcode</span>
     </div>
     <div class="flex flex-col">
         <span class="text-xl font-bold">${user.location.street.name}</span><span>Street Name</span>
     </div>
   </div>

   <div class="py-4">
     <div class = "user-name text-2xl font-bold py-2">
         <span >${user.name.title}.</span>
         <span>${user.name.first} ${user.name.last},</span>
         <span>${user.dob.age}</span>
     </div>

     <div>
         <span>${user.location.city}, ${user.location.state}, ${user.location.country}Kouvola, Satakunta, Finland</span>
     </div>
   </div>

   <div class="divider"></div> 

 <div class="flex gap-8">
    <div class="flex"> <span>
     <i class = "fas fa-phone text-pink-600 me-2"></i>  ${user.phone}
 </span></div>
     <div class="flex"><span>
         <i class = "text-pink-600 fa-solid fa-mobile-button me-2"></i>  ${user.cell}
     </span></div>
 </div>
   
 </div>
</div> 
 `
}