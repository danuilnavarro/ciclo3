
function registro(){
var elemento={
  id:$("#miId").val(),
  name:$("#name").val(),
  email:$("#email").val(),
  password:$("#password").val(),
  age:$("#age").val(),
  messages:$("#messages").val(),
  reservations:$("#reservations").val(),
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:elemento,
      url:"https://144.22.228.37:8083/api/Client/save",
      type:'POST',
      
      success:function(response) {
        console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function obtenerItems(){

  $.ajax({
      dataType: 'json',
      url:"https://144.22.228.37:8083/api/Client/all",
      type:'GET',
      
      success:function(response) {
       
        var misItems=response.items;

        for(i=0;i<misItems.length;i++){
         
          $("#miResultado").append("<tr>");
          $("#miResultado").append("<td>"+misItems[i].name+"</td>");
          $("#miResultado").append("<td>"+misItems[i].email+"</td>");
          $("#miResultado").append("<td>"+misItems[i].password+"</td>");
          $("#miResultado").append("<td>"+misItems[i].age+"</td>");
          $("#miResultado").append("<td>"+misItems[i].messages+"</td>");
          $("#miResultado").append("<td>"+misItems[i].reservations+"</td>");
          $("#miResultado").append('<td><button onclick="borrar('+misItems[i].id+')">Borrar</button></td>');
          $("#miResultado").append('<td><button onclick="obtenerItemEspecifico('+misItems[i].id+')">Cargar</button></td>');
          $("#miResultado").append("</tr>");

        }

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}




function obtenerItemEspecifico(idItem){
  $.ajax({
      dataType: 'json',
      url:"https://144.22.228.37:8083/api/Client/"+idItem,
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#miId").val(item.id);
        $("#name").val(item.name);
        $("#email").val(item.email);
        $("#password").val(item.password);
        $("#age").val(item.age);
        $("#messages").val(item.messages);
        $("#reservations").val(item.reservations)


      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}
