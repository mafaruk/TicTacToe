var count = 0;
var arr = [[".",".","."],[".",".","."],[".",".","."]]
var xelem = document.getElementById("x");
var oelem = document.getElementById("o");
xelem.style.backgroundColor='rgb(175, 0, 175)';
document.getElementById("arr").innerHTML = "X's turn";
function setvalue(x){
  var res = x.split("_")
  if(count%2==0){
    if(arr[res[0]-1][res[1]-1]=="."){
      xelem.style.backgroundColor='rgb(102, 0, 102)';
      oelem.style.backgroundColor = 'rgb(175, 0, 175)';
      document.getElementById(x).innerText = "X";
      count++;
      arr[res[0]-1][res[1]-1]="X";
      document.getElementById("arr").innerHTML = "O's turn";
    }
    else{
      setvalue(res[0]+"_"+res[1]);
      document.getElementById("arr").innerHTML = "Wrong box, try another";
    }

  }
  else{
    if(arr[res[0]-1][res[1]-1]=="."){
      oelem.style.backgroundColor='rgb(102, 0, 102)';
      xelem.style.backgroundColor='rgb(175, 0, 175)';
      document.getElementById(x).innerText = "O";
      document.getElementById("arr").innerHTML = "X's turn";
      count++;
      arr[res[0]-1][res[1]-1]="O";
    }
    else{
      setvalue(res[0]+"_"+res[1]);
      document.getElementById("arr").innerHTML = "Wrong box, try another";
    }

  }
  result(arr);

}
function result(a){
  var j = 0;
  var i;
  for(i = 0; i<3; i++){
    if((a[i][j]=="X") && (a[i][j+1]=="X") && (a[i][j+2]=="X")){
        document.getElementById("arr").innerHTML = "X is winner";
        setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);

    }
    else if((a[i][j]=="O") && (a[i][j+1]=="O") && (a[i][j+2]=="O")){
        document.getElementById("arr").innerHTML = "O is winner";
        setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
    else if((a[j][i]=="X") && (a[j+1][i]=="X") && (a[j+2][i]=="X")){
      document.getElementById("arr").innerHTML = "X is winner";
      setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
    else if((a[j][i]=="O") && (a[j+1][i]=="O") && (a[j+2][i]=="O")){
      document.getElementById("arr").innerHTML = "O is winner";
      setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
    else if((a[j][j]=="O") && (a[j+1][j+1]=="O") && (a[j+2][j+2]=="O")){
      document.getElementById("arr").innerHTML = "O is winner";
      setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
    else if((a[j][j]=="X") && (a[j+1][j+1]=="X") && (a[j+2][j+2]=="X")){
      document.getElementById("arr").innerHTML = "X is winner";
      setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
    else if((a[j][j]=="O") && (a[j+1][j+1]=="O") && (a[j+2][j+2]=="O")){
      document.getElementById("arr").innerHTML = "O is winner";
      setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
    else if((a[j][j+2]=="X") && (a[j+1][j+1]=="X") && (a[j+2][j]=="X")){
      document.getElementById("arr").innerHTML = "X is winner";
      setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
    else if((a[j][j+2]=="O") && (a[j+1][j+1]=="O") && (a[j+2][j]=="O")){
      document.getElementById("arr").innerHTML = "O is winner";
      setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
    else if(count==9){
        document.getElementById("arr").innerHTML = "Draw";
        setTimeout(function(){document.getElementById("bd").style.display = 'none';}, 1000);
    }
  }
}
