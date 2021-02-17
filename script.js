$(".txtb").on("keyup", (e)=>{

   // 13 means Enter
   if(e.keyCode == 13 && $(".txtb").val() != "") {
      let task = $("<div class='task'></div>").text($(".txtb").val());
      let del = $("<i class='fas fa-trash-alt'></i>").click(function() {
         let p = $(this).parent();
         p.fadeOut(() => {
            p.remove();
         })
      })
      let check = $("<i class='fas fa-check'></i>'").click(function () {

         let p = $(this).parent();
         p.fadeOut(() => {
            $(".comp").append(p);
            p.fadeIn();
         });
         $(this).remove();
      });

      task.append(del,check);

      $(".notcomp").append(task);


      //clearing the input
      $(".txtb").val("")
   }
});