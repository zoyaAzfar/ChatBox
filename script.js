
//use strict
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("profile-icon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

               var modl = document.getElementById("modal");

// Get the button that opens the modal
var bt = document.getElementById("paperclip");

// Get the <span> element that closes the modal
var spn = document.getElementsByClassName("X")[0];

// When the user clicks on the button, open the modal
bt.onclick = function() {
  modl.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spn.onclick = function() {
  modl.style.display = "none";
}



            function changePage(pageNum) {
                var page = document.getElementsByClassName('page');
                for(var i = 0; i < page.length; i++) {
                    page[i].style.display = 'none';
                }
                page[pageNum - 1].style.display = 'block';
                window.scroll(0, 2);
                
                
                var appli = document.getElementById("result");
                appli.style.display = "none";
                
            }
            changePage(2);
            
            function collapseNav() {
        var navBar = document.getElementById("responsive-nav");
        var dropdownIcon = document.getElementsByClassName("dropdown-icon");
        if (navBar.className === "navbar") {
          navBar.className += " responsive";
          for (var i = 0; i < dropdownIcon.length; i++) {
            dropdownIcon[i].innerHTML = '<span class="material-icons">close</span>'
          }
        } else {
          navBar.className = "navbar";
          for (var i = 0; i < dropdownIcon.length; i++) {
            dropdownIcon[i].innerHTML = '<span class="material-icons">menu</span>'
          }
        }
        
      }    
    
          
            function create_thoughts(thought, item) {
                    
                        var today = new Date();
                        var time = today.getHours() + ":" + today.getMinutes();
                var thoughtsDiv = document.createElement("div");
                thoughtsDiv.innerHTML = "<img src = \"https://cdn.kastatic.org/third_party/javascript-khansrc/live-editor/build/images/avatars/starky-sapling.png\" style = \" float:right; margin-right:10px;\"><br><br><div class=\"text-message-me\"> <div class = \"text-mio\"><p style \"float:right;\">" + thought + "</p><p id ='sub-title'>⋮" + time + "</p></div></div> <br><br><br><br><br><br>";
                var thoughtsDivWrapper = document.getElementById(item);
                thoughtsDivWrapper.appendChild(thoughtsDiv);
               
                 
                
            }
            
                
            function get_thought() {
               var th = document.getElementById("chatter").value; 
                
                create_thoughts(th,"thoughts");
                
                document.getElementById("chatter").value = "";
                window.scroll(0, 100000000000000000);
                
                
            }
            
            
            
            function create(thought, item) {
                    
                        var today = new Date();
                        var time = today.getHours() + ":" + today.getMinutes();
                var thoughtsDiv = document.createElement("div");
                thoughtsDiv.innerHTML = "<br><br><br><div class=\"text-message-me\" > <div class = \"text-mio\"><p style \"float:right;\">" + thought + "</p><p id ='sub-title'>⋮" + time + "</p></div></div> <br><br><br><br><br><br>";
                var thoughtsDivWrapper = document.getElementById(item);
                thoughtsDivWrapper.appendChild(thoughtsDiv);
                
                
             
            }
            
            function addLink () {
               
                
                var linkData = document.getElementById("linkDataInput").value;
                 
                  var Div = document.createElement("div");
                Div.innerHTML = "<br><br><img src ='" + linkData+ "' style = 'float:right; background:none; display:block;'><br><br><br><br>";
                var DivWrapper = document.getElementById("res");
                DivWrapper.appendChild(Div);
            };
            
            
            function goToHEll() {
            var t = document.getElementById("chatty").value;
                create(t,"res");
                
                document.getElementById("chatty").value = "";
                window.scroll(0, 100000000000000000);
            }
            
            function sad_face() {
            var t = document.getElementById("chatFACE").value;
                create_thoughts(t,"r");
                
                document.getElementById("chatty").value = "";
                window.scroll(0, 100000000000000000);
            }
           
