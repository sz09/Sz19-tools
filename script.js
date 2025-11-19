let timeout;
let hideInput = '#linkToCopy';
const regex = new RegExp(/[^a-zA-Z0-9#]/g);
function handleChange() {
  if(timeout){
    clearTimeout(timeout);
  }
  
  timeout = setTimeout(() => {
    generate();
  }, 300)
}
function generate(){
  let inputString = $('#inputString').val().trim();
  let sprint = $('#sprintString').val().trim();
  let user = $('#user').val().trim();
  let text = 'Sprint' + sprint + '/' + user + '/' + inputString;
  if(!text){
    return;
  }
  
  let value = getBranchName(text);
  
  value = keep1Underscore(value);
  setValueToHideInput(value);
  $('#outputString').text(value);
  copy();
}

function copy()
{
  copyToClipboard();
  copiedToast($(hideInput).val());
}
function getBranchName(text){
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