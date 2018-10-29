var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", 
  function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      if (this.innerHTML==="- less"){
        this.innerHTML="+ more" ;
      }else{
        this.innerHTML="+" + this.innerHTML.substring(1) ;
      }
    } else {
      content.style.display = "block";
      if(this.innerHTML==="+ more"){
        this.innerHTML="- less" ;
      }else{
        this.innerHTML="-" + this.innerHTML.substring(1) ;
      }
    }
  });
}