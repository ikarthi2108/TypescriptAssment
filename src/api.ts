interface getApi{
    id:number;
    pname:string;
    pdescription:string;
    price:number;
}

function Api():Promise<getApi[]>{
    return fetch ('/api.json')
    .then(res=>res.json())
    .then(res=>{return res as getApi[]})
}
Api()
.then(pro=>{
   console.log(pro.map(u => "id" +" " +u.id  +"pname:" +u.pname  +"pdescription"  +u.pdescription  +"price"  +u.price).toString())
})