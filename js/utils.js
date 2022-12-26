// Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Computer Science Engineering", "AWS Certified Cloud Practitioner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    function updateCounter(){
    	let url = "https://7qjgcnp7j0.execute-api.us-east-1.amazonaws.com/dev/counter"
    	  fetch(url)
    	    .then(response => response.json())
    	    .then(data=> {
    	    	let element = document.getElementById("counter")
    	    	element.innerHTML = `${data.body.visits}`
    	    	console.log(data); 
    	    })
    	    .catch(function(error) {
    	      console.log(error); 
    	    });  
    	  }
    