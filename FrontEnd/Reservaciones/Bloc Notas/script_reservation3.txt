
function registro(){
var elemento={
  id:$("#miId").val(),
  startDate:$("#startDate").val(),
  devolutionDate:$("#devolutionDate").val(),
  client:$("#client").val(),
  doctor:$("#doctor").val(),
  score:$("#score").val(),
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:elemento,
      url:"https://144.22.228.37:8083/api/Reservation/save",
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
      url:"https://144.22.228.37:8083/api/Reservation/all",
      type:'GET',
      
      success:function(response) {
       
        var misItems=response.items;

        for(i=0;i<misItems.length;i++){
         
          $("#miResultado").append("<tr>");
          $("#miResultado").append("<td>"+misItems[i].startDate+"</td>");
          $("#miResultado").append("<td>"+misItems[i].devolutionDate+"</td>");
          $("#miResultado").append("<td>"+misItems[i].client+"</td>");
          $("#miResultado").append("<td>"+misItems[i].doctor+"</td>");
          $("#miResultado").append("<td>"+misItems[i].score+"</td>");
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
      url:"https://144.22.228.37:8083/api/Reservation/"+idItem,
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#miId").val(item.id);
        $("#startDate").val(item.startDate);
        $("#devolutionDate").val(item.devolutionDate);
        $("#client").val(item.client);
        $("#doctor").val(item.doctor);
        $("#score").val(item.score);

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}




