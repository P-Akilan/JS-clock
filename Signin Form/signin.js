function myFunction() {
   let a = document.getElementById("exampleInputEmail1").value;
   let regexp = /[a-z0-9.!#$%&'+/=?^_`{|}~-]+@[a-z0-9]+(?:\.[a-z0-9-]+)$/g;
   let b = regexp.test(a);
   if (b == true) {
      let color1 = "<span style='color:green'>" + "your email is valid" + "</span>";
      document.getElementById("justify").innerHTML = color1;
      setTimeout(() => {
         const hide = document.getElementById("justify");
         hide.style.visibility = "hidden";
      }, 5000);

   }
   else {
      let color2 = "<span style='color:red'>" + "your email is not valid" + "</span>";
      document.getElementById("justify").innerHTML = color2;
      setTimeout(() => {
         const hide = document.getElementById("justify");
         hide.style.visibility = "hidden";
      }, 5000)

   }
}
function myFunction1() {
   let c = document.getElementById("exampleInputPassword1").value;
   console.log(c);
   let regexp = /[A-z0-9.!#$%&'+/=?^_`{|}~-]+/g;
   let d = c.search(regexp);
   let x = c.length;
   if (d = regexp && x <= 6) {

      let color3 = "<span style='color:green'>" + "your password is valid" + "</span>";
      document.getElementById("justify").innerHTML = color3;
      setTimeout(() => {
         const hide = document.getElementById("justify");
         hide.style.visibility = "hidden";
      }, 5000);
   }
   else {
      let color4 = "<span style='color:red'>" + "your password is not valid! your password must to be minimum 6 digits" + "</span>";
      document.getElementById("justify").innerHTML = color4;
      setTimeout(() => {
         const hide = document.getElementById("justify");
         hide.style.visibility = "hidden";
      }, 5000);

   }
}