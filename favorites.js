import{r as i,g as n}from"./assets/favorites-BuY-F9_C.js";const r=document.querySelector(".favoritesList"),a=document.querySelector(".emptyMessage");function o(){const e=n();if(r.innerHTML="",e.length===0){a.classList.remove("isHidden");return}a.classList.add("isHidden"),e.forEach(t=>{const s=document.createElement("li");s.className="exerciseCard",s.innerHTML=`
      <h3>${t.name}</h3>
      <p><b>Body part:</b> ${t.bodyPart}</p>
      <p><b>Target:</b> ${t.target}</p>
      <p><b>Calories:</b> ${t.calories}</p>
      <button data-id="${t.id}" class="removeBtn">Remove</button>
    `,r.appendChild(s)})}r.addEventListener("click",e=>{e.target.classList.contains("removeBtn")&&(i(e.target.dataset.id),o())});o();
//# sourceMappingURL=favorites.js.map
