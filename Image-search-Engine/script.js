const searchFrom=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");
const searchBtn=document.getElementById("search-btn");


const apiKey="MFkMGCj9bOG4yLAy3T9SAj-FzV-Le3ri_Wo7lTqJ6Ac";
let keyword=""
let page=1;
async function ImageSearch() {
    keyword=searchBox.value;
    if(page==1){
        searchResult.innerHTML="";
    }
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data)
    const results=data.results;
    

    results.map((result)=>{
        const img=document.createElement("img");
        img.src=result.urls.small;
        const ImageLink=document.createElement("a");
        ImageLink.href=result.links.html;
        ImageLink.target="_blank";
        ImageLink.appendChild(img);
        searchResult.appendChild(ImageLink);
    })
}

searchFrom.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    ImageSearch();
})


showMoreBtn.addEventListener("click",()=>{
    page+=1 ;
    ImageSearch();
})