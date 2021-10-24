
function registroSpecialty(){
    var elemento={
        id:$("#miId").val(),
        name:$("#name").val(),
        description:$("#description").val(),
        doctors:$("#doctors").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:elemento,
        url:"https://144.22.228.37:8083/api/Specialty/save",
        type:'POST',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function obtenerItemsSpecialty(){

    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Specialty/all",
        type:'GET',

        success:function(response) {

            var misItems=response.items;

            for(i=0;i<misItems.length;i++){

                $("#miResultado").append("<tr>");
                $("#miResultado").append("<td>"+misItems[i].name+"</td>");
                $("#miResultado").append("<td>"+misItems[i].description+"</td>");
                $("#miResultado").append("<td>"+misItems[i].doctors+"</td>");
                $("#miResultado").append('<td><button onclick="borrarSpecialty('+misItems[i].id+')">Borrar</button></td>');
                $("#miResultado").append('<td><button onclick="obtenerItemEspecificoSpecialty('+misItems[i].id+')">Cargar</button></td>');
                $("#miResultado").append("</tr>");

            }

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}






function obtenerItemEspecificoSpecialty(idItem){
    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Specialty/"+idItem,
        type:'GET',
        success:function(response) {
            console.log(response);
            var item=response.items[0];

            $("#miId").val(item.id);
            $("#name").val(item.name);
            $("#description").val(item.description);
            $("#doctors").val(item.doctors);


        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}



function actualizarSpecialty(){
    var elemento={
        id:$("#miId").val(),
        name:$("#name").val(),
        description:$("#description").val(),
        doctors:$("#doctors").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://144.22.228.37:8083/api/Specialty/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function borrarSpecialty(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://144.22.228.37:8083/api/Specialty/"+idItem,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}

function registroDoctor(){
    var elemento={
        id:$("#miIdDoctor").val(),
        name:$("#nameDoctor").val(),
        department:$("#departmentDoctor").val(),
        year:$("#yearDoctor").val(),
        specialty:$("#specialtyDoctor").val(),
        messages:$("#messagesDoctor").val(),
        reservations:$("#reservationsDoctor").val(),

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

function obtenerItemsDoctor(){

    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Doctor/all",
        type:'GET',

        success:function(response) {

            var misItems=response.items;

            for(i=0;i<misItems.length;i++){

                $("#miResultado2").append("<tr>");
                $("#miResultado2").append("<td>"+misItems[i].name+"</td>");
                $("#miResultado2").append("<td>"+misItems[i].department+"</td>");
                $("#miResultado2").append("<td>"+misItems[i].year+"</td>");
                $("#miResultado2").append("<td>"+misItems[i].specialty+"</td>");
                $("#miResultado2").append("<td>"+misItems[i].messages+"</td>");
                $("#miResultado2").append("<td>"+misItems[i].reservations+"</td>");
                $("#miResultado2").append('<td><button onclick="borrarDoctor('+misItems[i].id+')">Borrar</button></td>');
                $("#miResultado2").append('<td><button onclick="obtenerItemEspecificoDoctor('+misItems[i].id+')">Cargar</button></td>');
                $("#miResultado2").append("</tr>");

            }

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}





function obtenerItemEspecificoDoctor(idItem){
    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Doctor/"+idItem,
        type:'GET',
        success:function(response) {
            console.log(response);
            var item=response.items[0];

            $("#miIdDoctor").val(item.id);
            $("#nameDoctor").val(item.name);
            $("#departmentDoctor").val(item.department);
            $("#yearDoctor").val(item.year);
            $("#specialtyDoctor").val(item.specialty);
            $("#messagesDoctor").val(item.messages);
            $("#reservationsDoctor").val(item.reservations);

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function borrarDoctor(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://144.22.228.37:8083/api/Doctor/"+idItem,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}


function actualizarDoctor(){
    var elemento={
        id:$("#miIdDoctor").val(),
        name:$("#nameDoctor").val(),
        department:$("#departmentDoctor").val(),
        year:$("#yearDoctor").val(),
        specialty:$("#specialtyDoctor").val(),
        messages:$("#messagesDoctor").val(),
        reservations:$("#reservationsDoctor").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://144.22.228.37:8083/api/Doctor/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function registroClient(){
    var elemento={
        id:$("#miIdClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        password:$("#passwordClient").val(),
        age:$("#ageClient").val(),
        messages:$("#messagesClient").val(),
        reservations:$("#reservationsClient").val(),
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

function obtenerItemsClient(){

    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Client/all",
        type:'GET',

        success:function(response) {

            var misItems=response.items;

            for(i=0;i<misItems.length;i++){

                $("#miResultado3").append("<tr>");
                $("#miResultado3").append("<td>"+misItems[i].name+"</td>");
                $("#miResultado3").append("<td>"+misItems[i].email+"</td>");
                $("#miResultado3").append("<td>"+misItems[i].password+"</td>");
                $("#miResultado3").append("<td>"+misItems[i].age+"</td>");
                $("#miResultado3").append("<td>"+misItems[i].messages+"</td>");
                $("#miResultado3").append("<td>"+misItems[i].reservations+"</td>");
                $("#miResultado3").append('<td><button onclick="borrarClient('+misItems[i].id+')">Borrar</button></td>');
                $("#miResultado3").append('<td><button onclick="obtenerItemEspecificoClient('+misItems[i].id+')">Cargar</button></td>');
                $("#miResultado3").append("</tr>");

            }

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}




function obtenerItemEspecificoClient(idItem){
    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Client/"+idItem,
        type:'GET',
        success:function(response) {
            console.log(response);
            var item=response.items[0];

            $("#miIdClient").val(item.id);
            $("#nameClient").val(item.name);
            $("#emailClient").val(item.email);
            $("#passwordClient").val(item.password);
            $("#ageClient").val(item.age);
            $("#messagesClient").val(item.messages);
            $("#reservationsClient").val(item.reservations)


        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function borrarClient(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://144.22.228.37:8083/api/Client/"+idItem,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}

function actualizarClient(){
    var elemento={
        id:$("#miIdClient").val(),
        name:$("#nameClient").val(),
        email:$("#emailClient").val(),
        password:$("#passwordClient").val(),
        age:$("#ageClient").val(),
        messages:$("#messagesClient").val(),
        reservations:$("#reservationsClient").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://144.22.228.37:8083/api/Client/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function registroMessage(){
    var elemento={
        id:$("#miIdMessage").val(),
        messagetext:$("#messagetextMessage").val(),
        client:$("#clientMessage").val(),
        doctor:$("#doctorMessage").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:elemento,
        url:"https://144.22.228.37:8083/api/Message/save",
        type:'POST',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function obtenerItemsMessage(){

    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Message/all",
        type:'GET',

        success:function(response) {

            var misItems=response.items;

            for(i=0;i<misItems.length;i++){

                $("#miResultado4").append("<tr>");
                $("#miResultado4").append("<td>"+misItems[i].messagetext+"</td>");
                $("#miResultado4").append("<td>"+misItems[i].client+"</td>");
                $("#miResultado4").append("<td>"+misItems[i].doctor+"</td>");
                $("#miResultado4").append('<td><button onclick="borrarMessage('+misItems[i].id+')">Borrar</button></td>');
                $("#miResultado4").append('<td><button onclick="obtenerItemEspecificoMessage('+misItems[i].id+')">Cargar</button></td>');
                $("#miResultado4").append("</tr>");

            }

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}




function obtenerItemEspecificoMessage(idItem){
    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Message/"+idItem,
        type:'GET',
        success:function(response) {
            console.log(response);
            var item=response.items[0];

            $("#miIdMessage").val(item.id);
            $("#messagetextMessage").val(item.messagetext);
            $("#clientMessage").val(item.client);
            $("#doctorMessage").val(item.doctor);


        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function actualizarMessage(){
    var elemento={
        id:$("#miIdMessage").val(),
        messagetext:$("#messagetextMessage").val(),
        client:$("#clientMessage").val(),
        doctor:$("#doctorMessage").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://144.22.228.37:8083/api/Message/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function borrarMessage(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://144.22.228.37:8083/api/Message/"+idItem,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}


function registroReservations(){
    var elemento={
        id:$("#miIdReservations").val(),
        startDate:$("#startDateReservations").val(),
        devolutionDate:$("#devolutionDateReservations").val(),
        client:$("#clientReservations").val(),
        doctor:$("#doctorReservations").val(),
        score:$("#scoreReservations").val(),
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

function obtenerItemsReservations(){

    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Reservation/all",
        type:'GET',

        success:function(response) {

            var misItems=response.items;

            for(i=0;i<misItems.length;i++){

                $("#miResultado5").append("<tr>");
                $("#miResultado5").append("<td>"+misItems[i].startDate+"</td>");
                $("#miResultado5").append("<td>"+misItems[i].devolutionDate+"</td>");
                $("#miResultado5").append("<td>"+misItems[i].client+"</td>");
                $("#miResultado5").append("<td>"+misItems[i].doctor+"</td>");
                $("#miResultado5").append("<td>"+misItems[i].score+"</td>");
                $("#miResultado5").append('<td><button onclick="borrarReservations('+misItems[i].id+')">Borrar</button></td>');
                $("#miResultado5").append('<td><button onclick="obtenerItemEspecificoReservations('+misItems[i].id+')">Cargar</button></td>');
                $("#miResultado5").append("</tr>");

            }

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}






function obtenerItemEspecificoReservations(idItem){
    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Reservation/"+idItem,
        type:'GET',
        success:function(response) {
            console.log(response);
            var item=response.items[0];

            $("#miIdReservations").val(item.id);
            $("#startDateReservations").val(item.startDate);
            $("#devolutionDateReservations").val(item.devolutionDate);
            $("#clientReservations").val(item.client);
            $("#doctorReservations").val(item.doctor);
            $("#scoreReservations").val(item.score);

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function borrarReservations(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://144.22.228.37:8083/api/Reservation/"+idItem,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}


function actualizarReservations(){
    var elemento={
        id:$("#miIdReservations").val(),
        startDate:$("#startDateReservations").val(),
        devolutionDate:$("#devolutionDateReservations").val(),
        client:$("#clientReservations").val(),
        doctor:$("#doctorReservations").val(),
        score:$("#scoreReservations").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://144.22.228.37:8083/api/Reservation/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function registroScore(){
    var elemento={
        id:$("#miIdScore").val(),
        score:$("#scoreScore").val(),
        messageScore:$("#messageScoreScore").val(),
        reservation:$("#reservationScore").val(),
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

function obtenerItemsScore(){

    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Score/all",
        type:'GET',

        success:function(response) {

            var misItems=response.items;

            for(i=0;i<misItems.length;i++){

                $("#miResultado6").append("<tr>");
                $("#miResultado6").append("<td>"+misItems[i].score+"</td>");
                $("#miResultado6").append("<td>"+misItems[i].messageScore+"</td>");
                $("#miResultado6").append("<td>"+misItems[i].reservation+"</td>");
                $("#miResultado6").append('<td><button onclick="borrarScore('+misItems[i].id+')">Borrar</button></td>');
                $("#miResultado6").append('<td><button onclick="obtenerItemEspecificoScore('+misItems[i].id+')">Cargar</button></td>');
                $("#miResultado6").append("</tr>");

            }

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}






function obtenerItemEspecificoScore(idItem){
    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Score/"+idItem,
        type:'GET',
        success:function(response) {
            console.log(response);
            var item=response.items[0];

            $("#miIdScore").val(item.id);
            $("#scoreScore").val(item.score);
            $("#messageScoreScore").val(item.messageScore);
            $("#reservationScore").val(item.reservation);


        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizarScore(){
    var elemento={
        id:$("#miIdScore").val(),
        score:$("#scoreScore").val(),
        messageScore:$("#messageScoreScore").val(),
        reservation:$("#reservationScore").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://144.22.228.37:8083/api/Score/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function borrarScore(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://144.22.228.37:8083/api/Score/"+idItem,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}



function registroAdmin(){
    var elemento={
        id:$("#miIdAdmin").val(),
        name:$("#nameAdmin").val(),
        email:$("#emailAdmin").val(),
        password:$("#passwordAdmin").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:elemento,
        url:"https://144.22.228.37:8083/api/Admin/save",
        type:'POST',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function obtenerItemsAdmin(){

    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Admin/all",
        type:'GET',

        success:function(response) {

            var misItems=response.items;

            for(i=0;i<misItems.length;i++){

                $("#miResultado7").append("<tr>");
                $("#miResultado7").append("<td>"+misItems[i].name+"</td>");
                $("#miResultado7").append("<td>"+misItems[i].email+"</td>");
                $("#miResultado7").append("<td>"+misItems[i].password+"</td>");
                $("#miResultado7").append('<td><button onclick="borrarAdmin('+misItems[i].id+')">Borrar</button></td>');
                $("#miResultado7").append('<td><button onclick="obtenerItemEspecificoAdmin('+misItems[i].id+')">Cargar</button></td>');
                $("#miResultado7").append("</tr>");

            }

        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}



function borrarAdmin(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"https://144.22.228.37:8083/api/Admin/"+idItem,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
}

function actualizarAdmin(){
    var elemento={
        id:$("#miIdAdmin").val(),
        name:$("#nameAdmin").val(),
        email:$("#emailAdmin").val(),
        password:$("#passwordAdmin").val(),
    }


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"https://144.22.228.37:8083/api/Admin/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}


function obtenerItemEspecificoAdmin(idItem){
    $.ajax({
        dataType: 'json',
        url:"https://144.22.228.37:8083/api/Admin/"+idItem,
        type:'GET',
        success:function(response) {
            console.log(response);
            var item=response.items[0];

            $("#miIdAdmin").val(item.id);
            $("#nameAdmin").val(item.name);
            $("#emailAdmin").val(item.email);
            $("#passwordAdmin").val(item.password);


        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}











