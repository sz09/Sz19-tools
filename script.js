var hideInput = '#linkToCopy';
function generate(){
  var text = $('#inputString').val().trim();
  if(!text){
    return;
  }
  
  var value = getBranchName(text);
  value = keep1Underscore(value);
  setValueToHideInput(value);
  copyToClipboard();
  copiedToast(value);
}

function getBranchName(text){
  var regex = new RegExp(/[^a-zA-Z0-9#]/g);
  text = $('#type').val() + '/' + text.replace(regex, '_');
  return text;
}

function keep1Underscore(text){
  return text.replace(new RegExp(/[_]{2,}/g), '_');
}


function setValueToHideInput(value){
   $(hideInput).val(value);
}

function copyToClipboard(){
    $(hideInput).select();      
    document.execCommand("copy");
}

function copiedToast(value){
  successToast("Copied", value);
}

function successToast(title, value){
  $.Toast(title, value, "success", {
          has_icon:true,
          has_close_btn:true,
	  stack: true,
          fullscreen:false,
          timeout:4000,
          sticky:false,
          has_progress:true,
          rtl:false,
    });
}
