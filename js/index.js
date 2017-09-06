window.onload=function(){
  var buttons=document.getElementById("chinese");
  var ul=document.getElementById("hover_ul");
  var isclick=true;
  buttons.onclick=function(){
      if(isclick){
          ul.style.display="block";
          isclick=false;
      }else{
          ul.style.display="none";
          isclick=true;
      }

  };
  var click=document.getElementsByTagName("button")[0];
  var main=document.getElementById("main");
  var main_val=getComputedStyle(main).top;
  console.log(main_val);
  click.onclick=function(){

      if(isclick){

          main_val="240px";
          main.style.top=main_val;
          isclick=false;
      }else{
          main_val="0px";
          main.style.top=main_val;
          isclick=true;
      }

  }
}
