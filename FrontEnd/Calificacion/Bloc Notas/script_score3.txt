
function registro(){
var elemento={
  id:$("#miId").val(),
  score:$("#score").val(),
  messageScore:$("#messageScore").val(),
  reservation:$("#reservation").val(),
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:elemento,
      url:"https://144.22.228.37:8083/api/Score/save",
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
      url:"https://144.22.228.37:8083/api/Score/all",
      type:'GET',
      
      success:function(response) {
       
        var misItems=response.items;

        for(i=0;i<misItems.length;i++){
         
          $("#miResultado").append("<tr>");
          $("#miResultado").append("<td>"+misItems[i].score+"</td>");
          $("#miResultado").append("<td>"+misItems[i].messageScore+"</td>");
          $("#miResultado").append("<td>"+misItems[i].reservation+"</td>");
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
      url:"https://144.22.228.37:8083/api/Score/"+idItem,
      type:'GET',
      success:function(response) {
        console.log(response);
        var item=response.items[0];

        $("#miId").val(item.id);
        $("#score").val(item.score);
        $("#messageScore").val(item.messageScore);
        $("#reservation").val(item.reservation);


      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}




