const API = "https://smarterp-enterprise.onrender.com";
const pageTitle = document.getElementById("pageTitle");
const content = document.getElementById("contentArea");

// ---------------- Dashboard ----------------

document.getElementById("dashboardBtn").onclick = async () => {

pageTitle.innerHTML = "Dashboard";

const response = await fetch(API + "/dashboard/");
const data = await response.json();

content.innerHTML = `

<div class="row mt-4">

<div class="col-md-3">
<div class="card dashboard-card">
<h5>Total Customers</h5>
<h2>${data.customers}</h2>
</div>
</div>

<div class="col-md-3">
<div class="card dashboard-card">
<h5>Total Suppliers</h5>
<h2>${data.suppliers}</h2>
</div>
</div>

<div class="col-md-3">
<div class="card dashboard-card">
<h5>Stock Items</h5>
<h2>${data.items}</h2>
</div>
</div>

<div class="col-md-3">
<div class="card dashboard-card">
<h5>Total Sales</h5>
<h2>₹${data.total_sales}</h2>
</div>
</div>

</div>

<div class="row mt-4">

<div class="col-md-6">

<div class="card p-4">

<h4>Total Purchase</h4>

<h2>₹${data.total_purchase}</h2>

</div>

</div>

<div class="col-md-6">

<div class="card p-4">

<h4>SmartERP Enterprise</h4>

<p>

Billing • Inventory • Accounting Management System

</p>

<p>

Backend : FastAPI <br>
Database : SQLite <br>
Frontend : HTML • CSS • JavaScript

</p>

</div>

</div>

</div>

`;

};

// ---------------- Customers ----------------

document.getElementById("customersBtn").onclick = () => {

pageTitle.innerHTML = "Customer Management";

content.innerHTML = `

<div class="card p-4">

<h3>Add Customer</h3>

<div class="row">

<div class="col-md-4">
<input id="customerName" class="form-control" placeholder="Customer Name">
</div>

<div class="col-md-4">
<input id="customerPhone" class="form-control" placeholder="Phone">
</div>

<div class="col-md-4">
<input id="customerAddress" class="form-control" placeholder="Address">
</div>

</div>

<button onclick="addCustomer()" class="btn btn-primary mt-3">

Add Customer

</button>

<hr>

<h4 class="mt-4">Customer List</h4>

<table class="table table-bordered mt-3">

<thead>

<tr>

<th>Name</th>
<th>Phone</th>
<th>Outstanding</th>

</tr>

</thead>

<tbody id="customerTable">

</tbody>

</table>

</div>

`;

loadCustomers();

};

// ---------------- Suppliers ----------------

document.getElementById("suppliersBtn").onclick = () => {

pageTitle.innerHTML = "Supplier Management";

content.innerHTML = `

<div class="card p-4">

<h3>Add Supplier</h3>

<div class="row">

<div class="col-md-4">
<input id="supplierName" class="form-control" placeholder="Supplier Name">
</div>

<div class="col-md-4">
<input id="supplierGST" class="form-control" placeholder="GST Number">
</div>

<div class="col-md-4">
<input id="supplierPhone" class="form-control" placeholder="Phone">
</div>

</div>

<button onclick="addSupplier()" class="btn btn-success mt-3">

Add Supplier

</button>

<hr>

<h4 class="mt-4">Supplier List</h4>

<table class="table table-bordered">

<thead>

<tr>

<th>Name</th>

<th>GST</th>

<th>Phone</th>

<th>Outstanding</th>

</tr>

</thead>

<tbody id="supplierTable">

</tbody>

</table>

</div>

`;

loadSuppliers();

};

// ---------------- Items ----------------

document.getElementById("itemsBtn").onclick = () => {

pageTitle.innerHTML = "Stock Items";

content.innerHTML = `

<div class="card p-4">

<h3>Add Stock Item</h3>

<div class="row">

<div class="col-md-2">
<input id="itemSKU" class="form-control" placeholder="SKU">
</div>

<div class="col-md-3">
<input id="itemName" class="form-control" placeholder="Item Name">
</div>

<div class="col-md-2">
<input id="purchasePrice" class="form-control" placeholder="Purchase Price">
</div>

<div class="col-md-2">
<input id="sellingPrice" class="form-control" placeholder="Selling Price">
</div>

<div class="col-md-2">
<input id="itemQuantity" class="form-control" placeholder="Quantity">
</div>

</div>

<button onclick="addItem()" class="btn btn-warning mt-3">

Add Item

</button>

<hr>

<h4>Stock Items</h4>

<table class="table table-bordered">

<thead>

<tr>

<th>SKU</th>
<th>Name</th>
<th>Purchase</th>
<th>Selling</th>
<th>Quantity</th>

</tr>

</thead>

<tbody id="itemTable">

</tbody>

</table>

</div>

`;

loadItems();

};


// ---------------- Purchase ----------------

document.getElementById("purchaseBtn").onclick = () => {

pageTitle.innerHTML = "Purchase Voucher";

content.innerHTML = `

<div class="card p-4">

<h3>Create Purchase Voucher</h3>

<div class="row">

<div class="col-md-6">
<input id="purchaseSupplier" class="form-control mb-3" placeholder="Supplier Name">
</div>

<div class="col-md-6">
<input id="purchaseItem" class="form-control mb-3" placeholder="Item Name">
</div>

<div class="col-md-6">
<input id="purchaseQty" class="form-control mb-3" placeholder="Quantity">
</div>

<div class="col-md-6">
<input id="purchasePrice" class="form-control mb-3" placeholder="Purchase Price">
</div>

</div>

<button onclick="createPurchase()" class="btn btn-primary">

Create Purchase

</button>

</div>

`;

};

// ---------------- Sales ----------------

document.getElementById("salesBtn").onclick = () => {

pageTitle.innerHTML = "Sales Voucher";

content.innerHTML = `

<div class="card p-4">

<h3>Create Sales Voucher</h3>

<div class="row">

<div class="col-md-6">
<input id="saleCustomer" class="form-control mb-3" placeholder="Customer Name">
</div>

<div class="col-md-6">
<input id="saleItem" class="form-control mb-3" placeholder="Item Name">
</div>

<div class="col-md-6">
<input id="saleQty" class="form-control mb-3" placeholder="Quantity">
</div>

<div class="col-md-6">
<input id="salePrice" class="form-control mb-3" placeholder="Selling Price">
</div>

</div>

<button onclick="createSale()" class="btn btn-success">

Generate Sales Voucher

</button>

</div>

`;

};

// ---------------- Invoice ----------------

document.getElementById("invoiceBtn").onclick = () => {

pageTitle.innerHTML = "Invoice";

content.innerHTML = `

<div class="card p-4">

<h2>Generate Invoice</h2>

<div class="row">

<div class="col-md-6">

<input id="invoiceSaleId" class="form-control" placeholder="Enter Sale ID">

</div>

<div class="col-md-6">

<button onclick="loadInvoice()" class="btn btn-dark">

Load Invoice

</button>

</div>

</div>

<hr>

<div id="invoiceArea">

</div>

</div>

`;

};


async function addCustomer(){

const name=document.getElementById("customerName").value;

const phone=document.getElementById("customerPhone").value;

const address=document.getElementById("customerAddress").value;

const response=await fetch(API+"/customers/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name,

phone:phone,

address:address

})

});

const data=await response.json();

alert("Customer Added Successfully");

console.log(data);
loadCustomers();

}

async function loadCustomers() {

    const response = await fetch(API + "/customers/");
    const customers = await response.json();

    const table = document.getElementById("customerTable");

    table.innerHTML = "";

    customers.forEach(customer => {

        table.innerHTML += `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>₹${customer.outstanding}</td>
            </tr>
        `;

        async function addSupplier(){

const name=document.getElementById("supplierName").value;
const gst=document.getElementById("supplierGST").value;
const phone=document.getElementById("supplierPhone").value;

const response=await fetch(API+"/suppliers/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name,
gst:gst,
phone:phone

})

});

const data=await response.json();

alert(data.message);

loadSuppliers();

async function addItem(){

const sku=document.getElementById("itemSKU").value;
const name=document.getElementById("itemName").value;
const purchase_price=parseFloat(document.getElementById("purchasePrice").value);
const selling_price=parseFloat(document.getElementById("sellingPrice").value);
const quantity=parseInt(document.getElementById("itemQuantity").value);

const response=await fetch(API+"/items/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

sku,
name,
purchase_price,
selling_price,
quantity

})

});

const data=await response.json();

alert(data.message);

loadItems();

}

}

async function loadSuppliers(){

const response=await fetch(API+"/suppliers/");

const suppliers=await response.json();

const table=document.getElementById("supplierTable");

table.innerHTML="";

suppliers.forEach(supplier=>{

table.innerHTML+=`

<tr>

<td>${supplier.name}</td>

<td>${supplier.gst}</td>

<td>${supplier.phone}</td>

<td>₹${supplier.outstanding}</td>

</tr>

`;

});

}

    });

}
async function loadItems(){

const response=await fetch(API+"/items/");

const items=await response.json();

const table=document.getElementById("itemTable");

table.innerHTML="";

items.forEach(item=>{

table.innerHTML+=`

<tr>

<td>${item.sku}</td>

<td>${item.name}</td>

<td>${item.purchase_price}</td>

<td>${item.selling_price}</td>

<td>${item.quantity}</td>

</tr>

`;

});

}
async function createPurchase(){

const supplier_name=document.getElementById("purchaseSupplier").value;

const item_name=document.getElementById("purchaseItem").value;

const quantity=parseInt(document.getElementById("purchaseQty").value);

const purchase_price=parseFloat(document.getElementById("purchasePrice").value);

const response=await fetch(API+"/purchase/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

supplier_name,
item_name,
quantity,
purchase_price

})

});

const data=await response.json();

alert(data.message);

}
async function createSale(){

const customer_name=document.getElementById("saleCustomer").value;

const item_name=document.getElementById("saleItem").value;

const quantity=parseInt(document.getElementById("saleQty").value);

const selling_price=parseFloat(document.getElementById("salePrice").value);

const response=await fetch(API+"/sales/",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

customer_name,
item_name,
quantity,
selling_price

})

});

const data=await response.json();

if(response.ok){

alert(data.message);

}else{

alert(data.detail);

}

}

async function loadInvoice(){

const saleId=document.getElementById("invoiceSaleId").value;

const response=await fetch(API+"/invoice/"+saleId);

const data=await response.json();

if(!response.ok){

alert(data.detail);

return;

}

document.getElementById("invoiceArea").innerHTML=`

<div class="card p-4 mt-3">

<h3>SmartERP Enterprise</h3>

<hr>

<p><strong>Invoice No :</strong> ${data["Invoice No"]}</p>

<p><strong>Customer :</strong> ${data["Customer"]}</p>

<p><strong>Item :</strong> ${data["Item"]}</p>

<p><strong>Quantity :</strong> ${data["Quantity"]}</p>

<p><strong>Price :</strong> ₹${data["Price"]}</p>

<h4>Total : ₹${data["Total"]}</h4>

</div>

`;

}