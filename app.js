// refresh page function 
function refreshPage(){location.reload()}
// underline
function underlining(){let getInput = document.getElementById('input').value;
 
       let display = document.getElementById('display');
       display.innerHTML = getInput;
       display.style.textDecoration = 'underline';
       
}
// increase font size

function fontsizing(){let get = document.getElementById('input').value;
  
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.fontSize = '50px'
}
// make bold text
function bolding(){let get = document.getElementById('input').value;
  
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.fontWeight = 'bold'}
    //  upperCase

     function uppercasing(){let get = document.getElementById('input').value;
  
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.textTransform = 'uppercase'}
    //  lowercase

     function lowercasing(){let get = document.getElementById('input').value;
  
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.textTransform = 'lowercase'}

// italicing
     function italicing(){let get = document.getElementById('input').value;
 
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.fontStyle = 'italic'}
// capitalizing

     function capitalizing(){let get = document.getElementById('input').value;
 
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.textTransform = 'capitalize'}
   //   red color
   function coloring(){let get = document.getElementById('input').value;
 
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.color = 'red'}
   //   blue
   function bluing(){let get = document.getElementById('input').value;
 
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.color = 'blue'}
   //   yellow
   function yellowing(){let get = document.getElementById('input').value;
 
     let show = document.getElementById('display');
     show.innerHTML = get;
     show.style.color = 'yellow'}