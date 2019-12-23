document.addEventListener('click',function () {
	document.getElementById('loading').style.display="block";
	var myInit = {method:'GET',headers:{'Content-Type':'application'},mode:'cors',cache:'default'};
	let myRequest = new Request("https://www.youtube.com/watch?v=q0hyYWKXF0Q&list=RDMMq0hyYWKXF0Q&start_radio=1",myInit);
    fetch(myRequest)
      .then(function(resp) {
        return resp;
     })
      .then(function(data){
         document.getElementById('loading').style.display='none';
         document.getElementById('cards').appendChild(data);
         
})
  });