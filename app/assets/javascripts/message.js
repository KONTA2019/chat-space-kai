$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="chat-main__message-list" data-message-id=${message.id}>
         <div class="chat-main__message-list__name">
            ${message.user_name}        
            <div class="chat-main__message-list__name__date">
              ${message.created_at}
            </div>
         </div>
         <div class="chat-main__message-list__comment">
           <p class="chat-main__message-list__comment__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
     `<div class="chat-main__message-list" data-message-id=${message.id}>
        <div class="chat-main__message-list__name">
            ${message.user_name}        
            <div class="chat-main__message-list__name__date">
              ${message.created_at}
            </div>
        </div>
        <div class="chat-main__message-list__comment">
          <p class="chat-main__message-list__comment__content">
            ${message.content}
          </p>
        </div>
       </div>`
     return html;
   };
 }

 $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
   .done(function(data){
     var html = buildHTML(data);
     $('.messages').append(html);      
     $('form')[0].reset();
     $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
     $('.chat-main__message-form__new_message__send__btn').attr('disabled', false);
   })
})
});