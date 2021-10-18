
function registro(){
var elemento={
  id:$("#miId").val(),
  name:$("#name").val(),
  department:$("#department").val(),
  year:$("#year").val(),
  specialty:$("#specialty").val(),
  messages:$("#messages").val(),
  reservations:$("#reservations").val(),
  
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:elemento,
      url:"https://144.22.228.37:8083/api/Doctor/save",
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
      url:"https://144.22.228.37:8083/api/Doctor/all",
      type:'GET',
      
      success:function(response) {
       
        var misItems=response.items;

        for(i=0;i<misItems.length;i++){
         
          $("#miResultado").append("<tr>");
          $("#miResultado").append("<td>"+misItems[i].name+"</td>");
          $("#miResultado").append("<td>"+misItems[i].department+"</td>");
          $("#miResultado").append("<td>"+misItems[i].year+"</td>");
          $("#miResultado").append("<td>"+misItems[i].specialty+"</td>");
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
      url:"https://144.22.228.37:8083/api/Doctor/save"+idItem,
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#miId").val(item.id);
        $("#name").val(item.name);
        $("#department").val(item.department);
        $("#year").val(item.year);
        $("#specialty").val(item.specialty);
        $("#messages").val(item.messages);
        $("#reservations").val(item.reservations);

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}




