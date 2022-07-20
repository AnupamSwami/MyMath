    function add() {
      var add=
      Number(document.getElementById("firstno").value)+
      Number(document.getElementById("secondno").value);

      document.getElementById("lbad").innerHTML = add ;
    }

    function sub() {
      var sub=
      Number(document.getElementById("num1").value) -
      Number(document.getElementById("num2").value);

      document.getElementById("lbsub").innerHTML = sub ;
    }

    function mul() {
      var mul=
      Number(document.getElementById("mul1").value) *
      Number(document.getElementById("mul2").value);

      document.getElementById("lbmul").innerHTML = mul ;
    }
    
    function div() {
      var div=
      Number(document.getElementById("div1").value) /
      Number(document.getElementById("div2").value);

      document.getElementById("lbdiv").innerHTML = div ;
    }