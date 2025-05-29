import{a as f,S as d,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="41767782-13727767f44f3e84ebf7a04b0",m="https://pixabay.com/api/";async function c(o){const s={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20};try{return(await f.get(m,{params:s})).data}catch(e){throw console.error("Error fetching images:",e),e}}const y=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(e=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
              />
            </a>
            <div class="info">
              <p><b>Likes:</b> ${e.likes}</p>
              <p><b>Views:</b> ${e.views}</p>
              <p><b>Comments:</b> ${e.comments}</p>
              <p><b>Downloads:</b> ${e.downloads}</p>
            </div>
          </li>
        `).join("");y.insertAdjacentHTML("beforeend",s),g.refresh()}function b(){const o=document.querySelector(".gallery");o.innerHTML=""}function L(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),S=u.elements["search-text"];u.addEventListener("submit",v);async function v(o){o.preventDefault();const s=S.value.trim();if(s===""){n.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}b(),L();try{const e=await c(s);if(e.hits.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits)}catch(e){n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error(e)}finally{w()}}async function P(){const o=await c(searchQuery);console.log("DATA:",o)}P();
//# sourceMappingURL=index.js.map
