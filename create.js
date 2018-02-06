import {Observable} from 'rxjs';

var getText=()=>{
Observable.fromPromise(fetch('name.txt')
.then((res)=>res.text())
).subscribe((data)=>{
 document.getElementById('put').innerHTML=data;
})
}
document.getElementById("btn").addEventListener('click',getText);

var getJson=()=>
{ 
  Observable.fromPromise(fetch('readme.json')
  .then((res)=>res.json())
  ).subscribe((data)=>{
    
    var output=`<h1> user data</h1>`;
    data.forEach((user)=> {
      output+=`
      <ul>
      <li>id: ${user.id}</li>
      <li>name:${user.name}</li>
      <li>email:${user.email}</li>
      </ul>
      `     
    });
    document.getElementById('put').innerHTML=output;
  });
}
document.getElementById("btnJson").addEventListener('click',getJson);

var getOnline=()=>
{
  Observable.fromPromise(fetch('http://cricapi.com/api/matches/imNHt1HFajUpwOsrBUn4Ie4YKt62')
  .then((res)=>res.json())
  ).subscribe((data)=>{
    var output=`<table border="1" style="border-collapse:collapse; text-align:center">
    <th>date</th>
    <th>toss won by</th>
    <th>occurred or not</th>
    `
    data.matches.forEach((index)=>{
     output+=`
     <tr>
     <td>${index.date.split('T')[0]}</td>
     <td>${index.toss_winner_team}</td>
     <td>${index.matchStarted}</td>
     </tr>
     `
    });
    output+=`</table>`
    document.getElementById('put').innerHTML=output;
  })

}
document.getElementById("btnOnline").addEventListener('click',getOnline);


