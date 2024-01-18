import{S as f,i as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n=document.querySelector(".search-img-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){return fetch(s).then(r=>{if(r.ok)return r.json();throw new Error(r.status)})}function g(s){return s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${a}" alt="${e}" />
            <div class="image-info">
              <p class="likes">Likes ${t}</p>
              <p class="views">Views ${i}</p>
              <p class="comments">Comments ${u}</p>
              <p class="downloas">Downloas ${m}</p>
            </div>
          </a>
        </li>`).join("")}n.addEventListener("submit",s=>{s.preventDefault(),l.innerHTML="",c.classList.remove("hidden");const a=`https://pixabay.com/api/?${new URLSearchParams({key:"41836139-8e3290e3b09a716b148135a6e",q:n.elements.search.value,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;h(a).then(o=>{const e=o.hits;l.insertAdjacentHTML("afterbegin",g(e)),p.refresh(),e.length===0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>c.classList.add("hidden")),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
