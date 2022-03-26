const categories = [
    {
        name: "უძრავი ქონება",
        id: 1
    },
    {
        name: "ბიზნესი",
        id: 2
    },
    {
        name: "მედია",
        id: 3
    }
]

const domainList = [
    {
        domainName: "example1",
        domainExtension: ".ge",
        price: 299,
        categories: [1,2]
    },
    {
        domainName: "example2",
        domainExtension: ".com.ge",
        price: 299,
        categories: [2,3]
    },
    {
        domainName: "example3",
        domainExtension: ".edu.ge",
        price: 299,
        categories: [2]
    },
    {
        domainName: "example4",
        domainExtension: ".ge",
        price: 299,
        categories: [3]
    },
    {
        domainName: "example5",
        domainExtension: ".org.ge",
        price: 299,
        categories: [1,3]
    }
]

const all_domain_number = document.querySelector('.all_domain_number')
for(let g=0; g < domainList.length; g++) {
    all_domain_number.innerText = domainList.length
}

const categories_title = document.getElementsByClassName('categories_title')
for(let v=0; v < categories_title.length; v++) {
    categories_title[v].setAttribute('id',categories[v].id)
    categories_title[v].addEventListener('click',(e) => {
        for(let n=0; n < domainList.length; n++){
            if(e.currentTarget.checked == true){
                e.currentTarget.style.pointerEvents = 'none'
                e.currentTarget.nextElementSibling.style.pointerEvents = 'none'
                if(domainList[n].categories.includes(parseInt(e.currentTarget.id))){
                    document.getElementById(domainList[n].domainName).style.display='flex'
                    document.querySelector('.result').style.opacity = '1'
                    let filter_box = document.querySelector('.filter_box')
    filter_box.classList.remove('filter_box_toggle')
                }
            }else {   
                domainList[n].domainName.style.display = 'none'
            }
           
        }
    })
}

const domain_list = document.getElementsByClassName('domain_list')
for(let a=0; a < domain_list.length; a++) {
    domain_list[a].addEventListener('click',(e) => {
        for(let m=0; m<domainList.length; m++){
            if(e.currentTarget.checked){
                e.currentTarget.style.pointerEvents = 'none'
                e.currentTarget.nextElementSibling.style.pointerEvents = 'none'
                if(e.currentTarget.id === domainList[m].domainExtension){
                    document.getElementById(domainList[m].domainName).style.display = 'flex'
                    document.querySelector('.result').style.opacity = '1'
                    let filter_box = document.querySelector('.filter_box')
    filter_box.classList.remove('filter_box_toggle')
                }
            }
        }
    })
}

// Selectors
const resultDiv = document.querySelector('.result')
const itemImg = '<i class="fa-solid fa-angle-down"></i>'
const cartIcon = './assets/Fill 932 (1).svg'

for(let i=0 ; i < domainList.length; i++) {
    let crtItem = document.createElement('div')
    crtItem.setAttribute('class','item')
    crtItem.setAttribute('id',domainList[i].domainName)
    let crtLeftSide = document.createElement('div')
    crtLeftSide.setAttribute('class','left_side')
    crtItem.appendChild(crtLeftSide)
    let crtImg = document.createElement('span')
    crtImg.setAttribute('class','arrow')
    crtImg.innerHTML = itemImg
    crtLeftSide.appendChild(crtImg)
    let crtH1 = document.createElement('h1')
    crtH1.setAttribute('class','sort_title')
    crtH1.setAttribute('id',domainList[i].categories)
    crtH1.innerText = domainList[i].domainName + domainList[i].domainExtension
    crtLeftSide.appendChild(crtH1)
    let crtRightSide = document.createElement('div')
    crtRightSide.setAttribute('class','right_side')
    crtItem.appendChild(crtRightSide)
    let crtPriceTitle = document.createElement('h1')
    crtPriceTitle.setAttribute('class','sort_title')
    crtPriceTitle.innerText = domainList[i].price
    crtRightSide.appendChild(crtPriceTitle)
    let crtLariIcon = document.createElement('span')
    crtLariIcon.setAttribute('class','lari_icon')
    crtLariIcon.innerHTML = '<i class="fa-solid fa-lari-sign"></i>'
    crtRightSide.appendChild(crtLariIcon)
    let crtCartIconDiv = document.createElement('div')
    crtCartIconDiv.setAttribute('class','cart_icon')
    crtRightSide.appendChild(crtCartIconDiv)
    let crtIconText = document.createElement('h1')
    crtIconText.setAttribute('class','icon_text')
    crtIconText.innerText = 'დამატება'
    crtCartIconDiv.appendChild(crtIconText)
    let crtCartIcon = document.createElement('img')
    crtCartIcon.setAttribute('src', cartIcon)
    crtCartIcon.setAttribute('alt','cart')
    crtCartIconDiv.appendChild(crtCartIcon)
    resultDiv.appendChild(crtItem)
}


const item_arrow = document.getElementsByClassName('arrow')

for(let x=0; x < item_arrow.length; x++) {
    item_arrow[x].addEventListener('click',(e) => {
        let itemArrow = e.currentTarget
        itemArrow.classList.toggle('arrow_toggle')
        let itemBox = itemArrow.parentElement.parentElement
        itemBox.classList.toggle('item_toggle')
        let addCartText = itemArrow.parentElement.parentElement.lastChild.lastChild.firstChild
        addCartText.classList.toggle('icon_text_toggle')
    })
}


const addCartIcon = document.getElementsByClassName('cart_icon')
const itemIsOnCartIcon = './assets/Group 4868.svg'
let itemNumber = 1
for(let y=0; y < addCartIcon.length; y++) {
    addCartIcon[y].addEventListener('click',(e) => {
        let add_cart_price = e.currentTarget.parentElement.firstChild
        add_cart_price.style.opacity = '0'
        let add_cart_lari = e.currentTarget.parentElement.firstChild.nextSibling
        add_cart_lari.style.opacity = '0'
        let add_cart_text = e.currentTarget.parentElement.lastChild.firstChild
        add_cart_text.style.display = 'flex'
        add_cart_text.innerText = 'კალათაშია'
        add_cart_text.style.color = '#696974'
        add_cart_text.style.marginLeft = '10px'
        let add_cart_icon = e.currentTarget.parentElement.lastChild.lastChild
        add_cart_icon.setAttribute('src',itemIsOnCartIcon)
        let successfully_added = e.currentTarget.parentElement.lastChild
        successfully_added.classList.add('added_on_cart')
        let add_cart_item = e.currentTarget.parentElement.parentElement
        add_cart_item.style.backgroundColor = 'transparent'
        let add_cart_arrow = e.currentTarget.parentElement.parentElement.firstChild.firstChild
        add_cart_arrow.style.pointerEvents = 'none'
        add_cart_arrow.setAttribute('class','arrow')
        let notificationNumber = document.querySelector('.notification_number')
        notificationNumber.style.opacity = '1'
        notificationNumber.innerText = `${itemNumber++}`
    })
}

// Search input 
const search_input = document.querySelector('.search_input')
for(let s=0; s < domainList.length; s++){
    search_input.addEventListener('keyup', (e) => {
        if(e.keyCode === 13){
            if(search_input.value == domainList[s].domainName || search_input.value == domainList[s].domainName + domainList[s].domainExtension || search_input.value == ''){
                document.getElementById(domainList[s].domainName).style.display='flex'
                document.querySelector('.result').style.opacity = '1'
                let filter_box = document.querySelector('.filter_box')
                filter_box.classList.remove('filter_box_toggle')
            }else{
                document.getElementById(domainList[s].domainName).style.display='none'
            }
        }
    })    
}


// MIN MAX Price Range
const min_price = document.querySelector('#min_price')
const max_price = document.querySelector('#max_price')
for(let q=0; q < domainList.length; q++) {
    max_price.addEventListener('keyup', (e) => {
        e.preventDefault()
        if(e.keyCode == 13) {
            if(min_price.value <= domainList[q].price && max_price.value >= domainList[q].price){
                document.getElementById(domainList[q].domainName).style.display='flex'
                document.querySelector('.result').style.opacity = '1'
                let filter_box = document.querySelector('.filter_box')
    filter_box.classList.remove('filter_box_toggle')
            }else{
                document.getElementById(domainList[q].domainName).style.display='none'
            }
        }
    })
}


// MIN MAX Symbols Range
const max_symbols = document.querySelector('#max_symbols')
const min_symbols = document.querySelector('#min_symbols')
for(let t=0; t < domainList.length; t++) {
    max_symbols.addEventListener('keyup', (e) => {
        e.preventDefault()
        if(e.keyCode == 13) {
            if(min_symbols.value <= domainList[t].domainName.length && max_symbols.value >= domainList[t].domainName.length ){
                document.getElementById(domainList[t].domainName).style.display='flex'
                document.querySelector('.result').style.opacity = '1'
                let filter_box = document.querySelector('.filter_box')
    filter_box.classList.remove('filter_box_toggle')
            }else if( min_symbols.value <= domainList[t].domainName.length + domainList[t].domainExtension.length && max_symbols.value >= domainList[t].domainName.length + domainList[t].domainExtension.length){
                document.getElementById(domainList[t].domainName).style.display='flex'
                document.querySelector('.result').style.opacity = '1'
                let filter_box = document.querySelector('.filter_box')
    filter_box.classList.remove('filter_box_toggle')
            }
            else{
                document.getElementById(domainList[t].domainName).style.display='none'
            }
        }
    })
}

// Reset Button
const reset_btn = document.querySelector('.reset_btn')

reset_btn.addEventListener('click',()=>{
    location.reload()
})


const logo = document.querySelector('.logo')

logo.addEventListener('click',() => {
    location.href = '/index.html'
})




const sort_icon = document.querySelector('.sort_icon')

sort_icon.addEventListener('click',()=>{
    let filter_box = document.querySelector('.filter_box')
    filter_box.classList.toggle('filter_box_toggle')
})


const close_button = document.querySelector('.close_button')

close_button.addEventListener('click', ()=> {
    let filter_box = document.querySelector('.filter_box')
    filter_box.classList.remove('filter_box_toggle')
})