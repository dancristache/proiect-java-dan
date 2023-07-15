window.addEventListener("load",()=>{
  let stocare=JSON.parse(localStorage.getItem("savelocalstorage"))
  let log=JSON.parse(localStorage.getItem("log"))
  for(let user of stocare){
    if(user.username==log){
      let shifts=user.shift;
      for (let shift of shifts){
        var table =document.getElementsByTagName('table')[0]
        var newRow=table.insertRow(1);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
        var cel7 = newRow.insertCell(6);
        cel1.innerHTML = shift.date;
        cel2.innerHTML = shift.shiftslug;
        cel3.innerHTML = shift.workplace;
        cel4.innerHTML = shift.hourstart;
        cel5.innerHTML = shift.hourend;
        cel6.innerHTML = shift.totalhourwage;
        cel7.innerHTML = shift.comments;
        // table.innerHTML=""; 
      }
      }
  }
})

let search = document.getElementById("search");
search.addEventListener("click", ()=>{
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let stocare=JSON.parse(localStorage.getItem("savelocalstorage"))
  let log=JSON.parse(localStorage.getItem("log"))
  let fdate=Date.parse(from);
  let tdate=Date.parse(to);
  console.log(fdate+";"+tdate);
  var table =document.getElementsByTagName('table')[0]
  console.log(table.rows);
  for(let user of stocare){
    if(user.username==log){
      let shifts =[];
      for (let shift of user.shift){
       
        let sdate=Date.parse(shift.date);
        
        if (sdate){
          //console.log (sdate)
        
      
        if(sdate>=fdate && sdate<=tdate)
        {
          shifts.push(shift);
          console.log(shifts);
        }
      
      }
      }  
        
        // table.innerHTML=""; 

      let len=table.rows.length;
      console.log(len)
        for (let i=len; i>1; i--){
          console.log(i);
          if (i!=0){
            console.log(table.rows[i-1]);
            table.deleteRow(i-1);
          }
        }
        console.log()
      for (let shift of shifts){
        console.log("dsadas")
        var newRow=table.insertRow(1);
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);
        var cel6 = newRow.insertCell(5);
        var cel7 = newRow.insertCell(6);
        cel1.innerHTML = shift.date;
        cel2.innerHTML = shift.shiftslug;
        cel3.innerHTML = shift.workplace;
        cel4.innerHTML = shift.hourstart;
        cel5.innerHTML = shift.hourend;
        cel6.innerHTML = shift.totalhourwage;
        cel7.innerHTML = shift.comments;
        // table.innerHTML=""; 
      }
      console.log (shifts)
      

    }
  }
})


function addRow(){
  // get input values
  var date = document.getElementById('date').value;
  var shiftslug = document.getElementById('shiftslug').value;
  var workplace = document.getElementById('workplace').value;
  var hourstart = document.getElementById('hourstart').value;
  var hourend = document.getElementById('hourend').value;
  var totalhourwage = document.getElementById('totalhourwage').value;
  var comments = document.getElementById('comments').value;

  // get html table
  // 0= the firt table
  var table =document.getElementsByTagName('table')[0]

  // add new emty row yo the table
  // 0 = in the top
  // table.row.length= the end
  var newRow=table.insertRow(1);

  // add cells to the row
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  var cel4 = newRow.insertCell(3);
  var cel5 = newRow.insertCell(4);
  var cel6 = newRow.insertCell(5);
  var cel7 = newRow.insertCell(6);
  
// add value to the cells
  cel1.innerHTML = date;
  cel2.innerHTML = shiftslug;
  cel3.innerHTML = workplace;
  cel4.innerHTML = hourstart;
  cel5.innerHTML = hourend;
  cel6.innerHTML = totalhourwage;
  cel7.innerHTML = comments;
  let stocare=JSON.parse(localStorage.getItem("savelocalstorage"))
  let log=JSON.parse(localStorage.getItem("log"))
  for(let user of stocare){
    if(user.username==log){
      let shifts =[];
      let shift = {

        date:"",
        shiftslug:"",
        workplace:"",
        hourstart:"",
        hourend:"",
        totalhourwage:"",
        comments:""
      }
      shift.date=date;
      shift.shiftslug=shiftslug;
      shift.workplace=workplace;
      shift.hourstart=hourstart;
      shift.totalhourwage=totalhourwage;
      shift.hourend=hourend;
      shift.comments=comments;
      
user.shift.push(shift);
localStorage.setItem("savelocalstorage",JSON.stringify(stocare));
    }
  }
}