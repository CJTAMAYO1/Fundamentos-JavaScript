/////////////////////////////////////////////////// Variables//////////////////////////////////////////////////////////////////////
const catalogo = document.querySelector(`#lista-cursos`)
const table = document.querySelector('#carrito tbody')


const carrito=[];

function getProduct(e){
    e.preventDefault();
    if(e.target.classList.constains('agregar-carrito')){
       const item={}
       const cardParent= e.target.parentElement;
       item.id= e.target.getAttribute('data-id');
       item.name=cardParent.querySelector('h4').innerText;
       item.price = cardParent.querySelector('p span').innerText;
       item.image = cardParent.parentElement.querySelector('img').src;
       item.catity=1;

       addItem(item);
       clearTable();
       fillTable();

       }
    }

    function clearTable(){
        table.innerHTML='';
    }
     
    function addItem(item) {
        if (carrito.some(itemCarrito=>itemCarrito.id=== item.id)){
            // Incrementar cantidad de item
            carrito.forEach(itemCarrito=>{
                if(itemCarrito.id===item.id){
                    itemCarrito.cantity++;
                }
            });
        }else{
            carrito.push(item);
        }
        
    }

    
    console.log(carrito);

    function createRow(item){
        const row = document.createElement('tr');
        let htmlRow=''
        htmlRow+=`<td><img src="${ item.name }" width="100px"</td>`;
        htmlRow+=`<td>${ item.image }</td>`;
        htmlRow+=`<td>${ item.price }</td>`;
        htmlRow+=`<td>${ item.cantity }</td>`;
        row.innerHTML=htmlRow;
        return row;
    }

    function fillTable(){
        carrito.forEach(itemCarrito=>{
            table.appendChild(createRow(itemCarrito));
        });
    }

    catalogo.addEventListener(`click`, getProduct);