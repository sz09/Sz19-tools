var hideInput = '#linkToCopy';
function generate(){
  var text = $('#inputString').val();
  if(!text){
    return;
  }
  var value = text;
  setValueToHideInput(value);
  copyToClipboard();
}

function setValueToHideInput(value){
   $(hideInput).val(value);
}

funtion copyToClipboard(){
    $(hideInput).select();      
    document.execCommand("copy");
}
