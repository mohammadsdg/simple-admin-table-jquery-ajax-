// $(document).ready(function (){
//     $("button").click(function (){
//         $.get("test.txt" , function (data , status){
//             $("#test").html(data);
//             alert(status);
//         })
//     })
// })

// $(document).ready(function(){
//     let count = 0;
//     $("button").click(function(){
//      count++;
//      $(`.table`).append(`<tr class='newrow'><td class='name'>example name</td><td class='F_Name'>family name</td><td class='delete'>delete</td></tr>`)

//      $(`.delete`).click(function(){
//         $(`.newrow`).remove()
//      });
//             $.get("name.txt" , function (data){
//             $(".name").text(data);
//             });
//             $.get("Fname.txt" , function (data){
//                 $(".F_Name").text(data);
//                 })
//     });
// });

$(document).ready(function(){
    $.getJSON("users.json" , function(data){
        let user_info = '';
        $.each(data , function(key , value){
            user_info += '<tr>';
            user_info += '<td>'+value.firstName+'</td>';
            user_info += '<td>'+value.lastName+'</td>';
            user_info += '</tr>';
        });
        $(".table").append(user_info)
    });
});