var hideInput = '#linkToCopy';
function generate(){
  var text = $('#inputString').val();
  if(!text){
    return;
  }
  
  var value = text;
  setValueToHideInput(value);
  copyToClipboard();
  successToast();
}

function successToast(){
  $.Toast("Information", "Copied to clipboard!", "success", {
          has_icon:true,
          has_close_btn:true,
					stack: true,
          fullscreen:true,
          timeout:4000,
          sticky:false,
          has_progress:true,
          rtl:false,
    });
}

function setValueToHideInput(value){
   $(hideInput).val(value);
}

function copyToClipboard(){
    $(hideInput).select();      
    document.execCommand("copy");
}
