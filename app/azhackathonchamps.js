$(document).ready(()=>{
  alert();
  $.get('http://localhost:5800/connect', (data)=>{
    console.log(data);
  })
})
