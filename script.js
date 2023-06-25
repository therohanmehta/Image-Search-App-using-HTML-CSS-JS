const fetchkey='cN17sOixCQwdIA85DVMGvSRKqIkvCxZ2ZQaRH7FliT4'
const formElem=document.querySelector('form')
const inputElem=document.getElementById("search-input")
const wrapperElem=document.getElementById("wrapper")
const showmore=document.getElementById('show-more-btn')

let inputdata=''
let pageNo=1

async function searchImage(){
    inputdata=inputElem.value
    const url=`https://api.unsplash.com/search/photos?page=${pageNo}&query=${inputdata}&client_id=${fetchkey}`

    const response= await fetch (url)
    const imagedata= await response.json()

    const results=imagedata.results

    if(pageNo===1){
        wrapperElem.innerHTML=''
    }


    results.map((ele)=>{
        const imagediv=document.createElement('div')
        imagediv.classList.add('image-div')
        const imagetag=document.createElement('img')
        imagetag.classList.add('image-tag')
        imagetag.src=ele.urls.small
        imagetag.alt=ele.alt_description
        const anchorTag=document.createElement('a')
        anchorTag.href=ele.links.html
        anchorTag.target='_blank'
        anchorTag.textContent=ele.alt_description

        wrapperElem.appendChild(imagediv)
        imagediv.appendChild(imagetag)
        imagediv.appendChild(anchorTag)
    })
    pageNo++
    if(pageNo>1){
        showmore.style.display='block'
    }
}




function handlesearch(){
    pageNo=1 
    searchImage()

}

function handleshowmore(){
    pageNo +=1
    searchImage()
}

