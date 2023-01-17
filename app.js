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
        let count = 0;
        $.each(data , function(key , value){
            user_info += '<tr>';
            user_info += '<td>'+value.firstName+'</td>';
            user_info += '<td>'+value.lastName+'</td>';
            user_info += '<td class = "delete">'+value.del+'</td>';
            user_info += '<td><input type = "checkbox" name = "record"></td>';
            user_info += '</tr>';
        });
        $(".delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
        $(".table").append(user_info);
        
        $('.delete').click(function(){
            $('.delete').parent('tr').remove();
        });
    });
});