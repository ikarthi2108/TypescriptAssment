"use strict";
function Api() {
    return fetch('/api.json')
        .then(res => res.json())
        .then(res => { return res; });
}
Api()
    .then(pro => {
    console.log(pro.map(u => "id" + " " + u.id + "pname:" + u.pname + "pdescription" + u.pdescription + "price" + u.price).toString());
});
