// Question 1

  function prime(){
    var prime = document.getElementById("prime").value;
    var array1 = Array.from(String(prime), Number);
    var i;
    var flag = true;

    n = array1[0] 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        }
    if (flag == true) 
    document.getElementById("Ans1").innerHTML = n + " is a Prime Number";
    else
    document.getElementById("Ans1").innerHTML = n + " is not a Prime Number"; 
}

  //  Question 2

   function frequent(){
    var array=document.getElementById("array").value;
    var maxFreq = 1;
    var count = 0;
    var item;
    for (var i=0; i<array.length; i++)
    {
            for (var j=i; j<array.length; j++)
            {
                    if (array[i] == array[j])
                    count++;
                    if (maxFreq<count)
                    {
                      maxFreq=count; 
                      item = array[i];
                    }
            }
            count=0;
    }
    
    document.getElementById("Ans2").innerHTML = "Item "+ item + " repeats "+ maxFreq + " times";
    }

   // Question 3
    function swapcase(){
        var str = document.getElementById("Caseswap").value;
        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var LOWER = 'abcdefghijklmnopqrstuvwxyz';
        var result = [];
          
          for(var x=0; x<str.length; x++)
          {
            if(UPPER.indexOf(str[x]) !== -1)
            {
              result.push(str[x].toLowerCase());
            }
            else if(LOWER.indexOf(str[x]) !== -1)
            {
              result.push(str[x].toUpperCase());
            }
            else 
            {
              result.push(str[x]);
            }
          }
        
        document.getElementById("Ans3").innerHTML = result.join('');
        }

    // Question 4

        function sum_square(){
            var sum_sq = document.getElementById("array-sumsquare").value;
            var array = Array.from(String(sum_square), Number);
            var sum = 0,
                i = array.length;
            while (i--) {
                sum += (array[i]*array[i]);
            }
            document.getElementById("Ans4").innerHTML = "Sum of Square of each elements is "+sum;
        }
        
    // Question 5
    
        function OddEven(){
            var print="";
        for (var x=0; x<=15; x++) {
            if (x === 0) {
                print = x + " is Even <br>";
            }
            else if (x % 2 === 0) {
                print += x + " is Even <br>";
            }
            else {
                print += x + " is Odd <br>";
            }
            }
           
            document.getElementById("Ans5").innerHTML = print;
        }
        
    // Question 6
        function truncate(){
          var str = document.getElementById("str").value;
          var length = document.getElementById("str_length").value;
         var Jtruncate = "";

          if(str.length > length){
          Jtruncate = str.substring(0, length);
          document.getElementById("Ans6").innerHTML = Jtruncate;
           }
          else{        
           document.getElementById("Ans6").innerHTML = str;
              }
        }
        function resetvalue(){
        document.getElementById("str").value = "";
        document.getElementById("str_length").value = "";
         }


   // Question 7
        function findLarge(){
            var int1 = document.getElementById("integer1").value;
            var int2 = document.getElementById("integer2").value;
            var larger = int1 && int2;
        
            if(larger && int1 === int2){
                document.getElementById("Ans7").innerHTML = "Both numbers are equal!";
            }
            else if(larger){
                document.getElementById("Ans7").innerHTML = "The larger number is " + Math.max(int1,int2);
            }
            else{
                document.getElementById("Ans7").innerHTML = "Please add an integer!";
            }
        }
        function resetthis(){
            document.getElementById("integer1").value = "";
            document.getElementById("integer2").value = "";
            }

 
           
   // Question 9
        function javascript(){
           let str = 'Javascript';
           var x = "";
           var y = "";

         for (let char of str) {
          x += char;
          y += x + "<br>";
          document.getElementById("Ans9").innerHTML = y;
               }
             }

