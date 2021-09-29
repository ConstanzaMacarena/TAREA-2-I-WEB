import jquery=require('jquery');
const $:JQueryStatic=jquery;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    $('#clean').on('click', function (event:any) {
      //clean all inputs form
      event.preventDefault();
      $('.container').find('form').trigger('reset');
    })
    //checkbox otro
    $('#flexCheckDefaultOtro').on('change', function () {
      if($(this).is(":checked")){
          $('.div_otro').removeClass('d-none'); 
          $("#otro").prop('required',true);
      }else{
        $('.div_otro').addClass('d-none');
        $("#otro").prop('required',false);
        $('#otro').val("");
      }
  });

  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {

          //checkbox lenguajes
          if ($('input[name=lenguajes]:checked').length === 0) {
            event.preventDefault();
            $('.invalid-checkbox').removeClass('d-none');
          }else{
            $('.invalid-checkbox').addClass('d-none');
          }
          //checkbox nivel
          if ($('input[name=flexRadioDefault]:checked').length === 0) {
            event.preventDefault();
            $('.invalid-checkbox-nivel').removeClass('d-none');
          }else{
            $('.invalid-checkbox-nivel').addClass('d-none');
          }
          //checkbox-dificultad
          if ($('input[name=dificultad]:checked').length === 0) {
            event.preventDefault();
            $('.invalid-checkbox-dificultad').removeClass('d-none');
          }else{
            $('.invalid-checkbox-dificultad').addClass('d-none');
          }
 

      
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            event.preventDefault()
            event.stopPropagation()
            $('.container-success').removeClass('d-none');
            $('.container').addClass('d-none')
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()