/*
let studentName = prompt("Student Name: ");
let studentEmail = prompt("Email: ");
let subject1 = prompt("Subject 1: ");
let grade1 = prompt("Grade 1: ");
let subject2 = prompt("Subject 2: ");
let grade2 = prompt("Grade 2: ");

console.log(studentName, studentEmail, subject1,grade1,subject2,grade2);
*/
/*
document.getElementById("StudentInformation").innerHTML=`<h2>Student Information</h2>
<p>Name: ${studentName}</p>
<p>Email: ${studentEmail}</p>
<h2>Grades</h2>
<p>Subject 1: ${subject1}</p>
<p>Grade 1: ${grade1}</p>
<p>Subject 2: ${subject2}</p>
<p>Grade 2: ${grade2}</p>

<p> id="gpa" class="red"><b>GPA: ${gpa}</b></p>`;

if(gpa<2){
    document.getElementById("gpa").classList.add("red");
    //document.getElementById("gpa").className = "red";

}else{
    document.getElementById("gpa").classList.remove("red");
    document.getElementById("gpa").classList.add("green");
}
*/

let productName = prompt("Product: ");
let productPrice = prompt("Price: ");
let productQuantity = prompt("Qty: ");
let subTotal = (productPrice*productQuantity);
let productTaxes = (subTotal*.1);
let totalCost = (subTotal+productTaxes).toFixed(2);

console.log(productName, productPrice, productQuantity,subTotal,productTaxes,totalCost);

document.getElementById("Items").innerHTML=`<h2>Items</h2>

<p>Product Name: ${productName}</p>
<p>Product Price:$ ${productPrice}</p>
<p>Product Quantity: ${productQuantity}</p>
<p>Sub Total:$ ${subTotal}</p>
<p>Taxes:$ ${productTaxes}</p>
<p>Total:$ ${totalCost}</p>

`