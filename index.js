const tranFormEl=document.getElementById("transactionForm");
const btn=document.getElementById("earnBtn");

//const LStransactions = JSON.parse(localStorage.getItem("transactions")); 
//let transactions = localStorage.getItem("transactions")!=null ? LStransactions:[];

window.addEventListener('DOMContentLoaded', () => {

     axios.get("https://crudcrud.com/api/a6ea38c47d1f4dac8346a0c0559b0f19/appointment")
       .then((res)  => {
        //console.log(res);

         for(let i=0;i<res.data.length;i++)
         {
           showUser(res.data[i])
         }
       })
       .catch(err => {
        console.log(err)
       })
//   const localStorageObj=localStorage;
//   const localstoragekeys = Object.keys(localStorageObj)

//   for(var i=0;i<localstoragekeys.length;i++)
//   {
//     const key = localstoragekeys[i]
//     const userDetailsString = localStorageObj[key];
//     const userDetailsObj = JSON.parse(userDetailsString);
//     showUser(userDetailsObj)
//   }
})

  //let transactions = localStorage.getItem("transactions")!=null ? LStransactions:[];


// let transactions=dummyTran; //using of let means baad emin change krne ki jarroort ho skti ahi
  //empty array generatec

function addTransaction(e){
    e.preventDefault();
    const txt=document.getElementById("text").value;
    const amt=document.getElementById("amount").value;

    let details={
      //id:generateId(),
      text:txt, 
      amount:+amt
    };
    //transactions.push(details);
    //showUser(details);

    axios.post("https://crudcrud.com/api/a6ea38c47d1f4dac8346a0c0559b0f19/appointment",details)
       .then((res) => {
        //console.log(res.data);
        showUser(res.data)   //to call function showUser and pass the data to that
        //console.log(response)
       })
       .catch((err) => {
        console.log(err)
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
       })
    //let stor=JSON.parse(localStorage.getItem("detail_amount"));
    //if(stor){stor.forEach((st) => addTransaction(st))};

    //text.value = "";
    //amount.value="";  
}

////function generateId()
//{
 //    return Math.floor(Math.random()*10000000000);
//}


//The problem is only here you ahve to specify both ed and del button independently and differently
function showUser(details)
{
    const parentEl=document.getElementById('addTran');
    //const childEl= `<p id-${details.email}> ${details.text}- ${details.amount}
                 //   </p>`
    let childEl=document.createElement('p');
    childEl.textContent=details.text+'-'+details.amount;

    let delbtn=document.createElement('button');
    delbtn.style.backgroundColor='crimson';
    delbtn.appendChild(document.createTextNode('DEL'));
       
    const edbtn=document.createElement('button');
    edbtn.style.backgroundColor='chartreuse';
    edbtn.style.color='black';
    edbtn.appendChild(document.createTextNode('EDIT'));


    childEl.appendChild(delbtn);
    childEl.appendChild(edbtn);
    


    delbtn.innerHTML=`<p id=${details._id}><button onclick= deleteUser('${details._id}')>Del</button></p>`
    
    parentEl.appendChild(childEl);
    // edbtn.onclick = () => {
    //     //const conv=JSON.parse(localStorage.getItem(student.email));
    //     //console.log(conv.email);
    //     localStorage.removeItem(details.amount);
    //     parentEl.removeChild(childEl);
    //     document.getElementById('text').value=details.text;
    //     document.getElementById('amount').value=details.amount;

        
    //   }
    //delbtn.onclick = deleteUser(`${details._id}`);
    
    
    //updateLS(details);

}

function deleteUser(userId)
{
      // if(confirm("are You sure?"))
      // {
        axios.delete(`https://crudcrud.com/api/a6ea38c47d1f4dac8346a0c0559b0f19/appointment/${userId}`)
             .then((res) => {
              console.log(res);
              removeUser(userId)
              // parentEl.removeChild(childEl)
             })
             .catch((err) => {
                console.log(err)
             })
       //transactions = transactions.filter(transaction => transaction.id!==id);
         //localStorage.removeItem(details.amount);
          //parentEl.removeChild(childEl);     
      // }
       
}

function removeUser(userId){
  const parentNode = document.getElementById('addTran')
  const childNode = document.getElementById(userId);
  console.log(childNode);
  if(childNode){
    parentNode.removeChild(childNode)
  }
}

tranFormEl.addEventListener('submit',addTransaction);

// function updateLS(details){  //Ab ye jo local storage isko aur bhi jagah par updated rakhna padega like in remove wwale mei bhi
  
//   axios.post("https://crudcrud.com/api/4c53cc4ba9644250a7676b5bc2949b6f/appointment",details)
//        .then((res) => {
//         //console.log(res.data);
//         showUser(res.data)   //to call function showUser and pass the data to that
//         //console.log(response)
//        })
//        .catch((err) => {
//         console.log(err)
//         document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
//        })
//   //localStorage.setItem("transactions",JSON.stringify(transactions));
// }
