$(document).ready(function () {
    $("input").click(function(){
        x = this.value;
        // var no2 = null;
        //alert("hi"+x);
        $("#txtres").val(x);
        console.log(x);
    })  
    });

//     if (input) {
        
//     } else {
        
//     }
    

function calcNumbers(result){
  form.displayresult.value = form.displayresult.value+result;
}


//     $('.clear').on('click',function () {
//             reset()
//             displayresult(total);
//           });
// });

// $(function(){
//     $('input').on('click',function(){
//         $("#txtres").val( $("#txtres").val() + $(this).html() );
//     })
// })

// $(document).ready(function () {
//     var result;
//     var prevEntry = 0;
//     var operation = null;
//     var currentEntry='0';
//     // updatetxtres();

//     $('input').on('click', function (evt) {
//         var buttonPressed = $(this).html();
//         console.log(buttonPressed);
//     })
    
// })

// var num1 =null;
// var num2 =null;
// var operator =null;
// var total = 0;
// var screenDisplay ='';
// var numPeriod = 0;

// $(document).ready(function()
// {
//     $('.clear').on('click',function(){
//         reset()
//         displayScreen(total);
//     })
// })

// $('input').on('click', function(){
//     handleDigit(e);
// })

// function reset() {
//     num1 = null;
//     num2 = null;
//     operator = null;
//     numPeriod = 0;
// }