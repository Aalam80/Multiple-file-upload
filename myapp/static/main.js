
// const alertBox=document.getElementById('alert-box')

// const progresssBoX=document.getElementById('progress-box')
// const cancelBox=document.getElementById('cancel-box')




//     function uploadFile(){
//     var data =new FormData();

//     var url ='/multiple_upload/';
//     var files= $("input[id^='file']")[0].files;
    
//     if(files.length == 0)
//     {
//         alert('No File Selected');
//         return;
//     }
    
//     for (i=0;  i< files.length; i++){
//         data.append('files',files[i]);

//     }
//     data.append('csrfmiddlewaretoken',"{{ csrf_token }}");
//     $.ajax({
//         method:'POST',
//         url:url,
//         processData:false,
//         contentType:false,
//         mimeType:"multipart/form-data",
//         data:data,

//         xhr: function(){
//             const xhr = new window.XMLHttpRequest();
//             xhr.upload.addEventListener('progress', e=>{
//                 if (e.lengthComputable) {
//                     const percent = (e.loaded / e.total* 100|0) 
//                     console.log(percent)
//                     progresssBoX.innerHTML = `<div class="progress">
//                                                  <div class="progress-bar" role="progressbar" style="width: ${percent}%" aria-valuenow=" ${percent}" aria-valuemin="0" aria-valuemax="100"></div>
//                                                </div>
//                                                <p>${percent.toFixed(1)}%</p>`
//                 }

//             })
            
//             return xhr
//         },

        
        
        







    
//         success:function(res){
//             console.log(res)
//             alertBox.innerHTML = `<div class="alert alert-success" role="alert">
//                                       file upload successfully...
//                                  </div>`


        

            

//         },
//         error:function(error){
//             console.log(error)
//             alertBox.innerHTML = `<div class="alert alert-danger" role="alert">
//                                      something went wrong...
//                                 </div>`
//         }

        

        




//     });





// }