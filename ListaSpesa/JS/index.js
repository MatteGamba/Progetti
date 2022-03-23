$(function(){

    
    $("#addon-wrapping-two").click(function(){
        if($("#nameList").val() != ""){
            console.log($("#nameList").val());
            $(".liste").append(
                '<div class="accordion" id="accordionExample">' +
                    '<div class="accordion-item">'+
                        '<h2 class="accordion-header" id="headingOne">'+
                            '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' +
                            $("#nameList").val() +
                            '</button>'+
                        '</h2>'+
                        '<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
                            '<div class="accordion-body">'+
                                '<span id = "aggiungi">AGGIUNGI ELEMENTO:</span>'+
                                '<input type="text" id="nameProd" class="form-control shadow-none input-prod" placeholder="Prodotto" aria-label="Username" aria-describedby="addon-wrapping">'+
                                '<span class="input-group-text" id="addon-wrapping-tre"><i class="fa-solid fa-plus"></i></span>'+
                                '<div class="list-group"></div>' +
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'
            ) 
        }else {
            $("#pi").append("<p id='error'>Inserisci un nome per la tua lista</p>");
            $("#nameList").one("keypress", function(){
                $("#error").remove()
            })
        } 
          
        
        $("#addon-wrapping-tre").click(function(){
            $(".list-group").append(
                "<div  class='list-group-item'>" +
                    '<label>'+
                        '<input class="form-check-input me-1" type="checkbox" value="">'+
                        $("#nameProd").val() +
                    '</label>'+
                    '<span class="input-group-text" id="addon-wrapping-four"><i class="fa-solid fa-trash-can"></i></span>'+
                "</div>" 
            )
            $(document).on("click", "#addon-wrapping-four", function(){
                $(this.parentNode.remove())
            })
            $("#nameProd").val("")
        })
        

        
        $("#nameList").val("")
    })




})