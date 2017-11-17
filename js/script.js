var i;var j;var k;i=0;j=0;k=0;
   $(document).ready(function(){
new Clipboard('#copytoclip');new Clipboard('#copyjson');
   	/////////////////////////////////////////////////
$("#submit").click(function(){
var url=$("input[name=url]").val().trim();
if(url==''){alert("Please Enter a Url");}
else{
if(i==0 && j==0 && k==0)
{
alert("Please Choose At Least One Element");
}
else
{

var thestring=genstring();
$('#output').css('visibility','visible');
var loc= window.location.href.split("/");
loc.splice(-1,1);
var loc = loc.join("/")+"/scrap.php?"+thestring; 
$('#outputtt').text(loc);
$('#textarea').css('visibility','visible');

$.ajax({
 method: 'GET',
url: "scrap.php",
data: thestring,
cache: false,
success: function(result){
	
var jsonout=JSON.stringify(result);
$('#textarea').val(jsonout);
$("#copyjson").attr("data-clipboard-text", jsonout);
$('#copyjson').css('visibility','visible');
},
error: function(result){
alert(result);
}

});


  $("#copytoclip").attr("data-clipboard-text", loc);

}   }
return false;
});
/////////////////////////////

$("#cla").click(function(){
 $('.ex').css('visibility','hidden');
$("#elem").append(' <div class="row">     <div class="input-field col s4"> <input type="text" class="validate" name="typeee'+i+'"> <label for="typeee'+i+'">type</label> </div>   <div class="input-field col s6"> <input type="text" class="validate" name="classs'+i+'"> <label for="classs'+i+'">position</label> </div> <div class="input-field col s2"> <a class="waves-effect waves-light btn-large ex'+' ex'+i+'" >X</a> </div> </div>'); 
	i=i+1;
});
$("#pos").click(function(){
$('.exx').css('visibility','hidden');
$("#elem").append(' <div class="row">   <div class="input-field col s2"> <input type="text" class="validate" name="ptype'+j+'"> <label for="ptype'+j+'">type</label> </div>       <div class="input-field col s4"> <input type="text" class="validate" name="pclass'+j+'"> <label for="pclass'+j+'">class</label> </div> <div class="input-field col s4"> <input type="text" class="validate" name="position'+j+'"> <label for="position'+j+'">position</label> </div> <div class="input-field col s2"> <a class="waves-effect waves-light btn-large exx'+' exx'+j+'">X</a> </div> </div>'); 
	j=j+1;
});
$("#posss").click(function(){
$('.exxx').css('visibility','hidden');
$("#elem").append(' <div class="row">   <div class="input-field col s4"> <input type="text" class="validate" name="psstype'+k+'"> <label for="psstype'+k+'">type</label> </div>       <div class="input-field col s6"> <input type="text" class="validate" name="pssclass'+k+'"> <label for="pssclass'+k+'">class</label> </div>  <div class="input-field col s2"> <a class="waves-effect waves-light btn-large exxx'+' exxx'+k+'">X</a> </div> </div>'); 
	k=k+1;
});

$("#elem").on('click', '.ex', function() {i=i-1; z=i-1;
 $('.ex'+z).css('visibility','visible');
	$(this).parent().parent().remove();
});
$("#elem").on('click', '.exx', function() {j=j-1;zz=j-1;
$('.exx'+zz).css('visibility','visible');
	$(this).parent().parent().remove();
});
$("#elem").on('click', '.exxx', function() {k=k-1;zzz=k-1;
$('.exxx'+zzz).css('visibility','visible');
	$(this).parent().parent().remove();
});


});


function genstring(){
	var url=$("input[name=url]").val().trim();
var dataString = 'url='+url+'&i='+i+'&j='+j+'&k='+k;

for (c = 0; c < i; c++) { if($("input[name=classs"+c+"]").val()==''){alert('classs'+c+'is empty!')}
			else if($("input[name=typeee"+c+"]").val()==''){alert('typeee'+c+'is empty!')}
  else{ dataString=dataString+"&classs["+c+"]="+ $("input[name=classs"+c+"]").val().trim();
 dataString=dataString+"&typeee["+c+"]="+ $("input[name=typeee"+c+"]").val().trim();}
} 
for (c = 0; c < j; c++) {if($("input[name=position"+c+"]").val()==''){alert('position'+c+'is empty!')}
	else if($("input[name=pclass"+c+"]").val()==''){alert('pclass'+c+'is empty!')}
		else if($("input[name=ptype"+c+"]").val()==''){alert('ptype'+c+'is empty!')}
 else{  dataString=dataString+"&pclass["+c+"]="+ $("input[name=pclass"+c+"]").val().trim();
     dataString=dataString+"&position["+c+"]="+ $("input[name=position"+c+"]").val().trim();
  dataString=dataString+"&ptype["+c+"]="+ $("input[name=ptype"+c+"]").val().trim();}
}
for (c = 0; c < k; c++) {if($("input[name=pssclass"+c+"]").val()==''){alert('pssclass'+c+'is empty!')}
		else if($("input[name=psstype"+c+"]").val()==''){alert('psstype'+c+'is empty!')}
 else{  dataString=dataString+"&pssclass["+c+"]="+ $("input[name=pssclass"+c+"]").val().trim();
  dataString=dataString+"&psstype["+c+"]="+ $("input[name=psstype"+c+"]").val().trim();}
} 

return dataString;
}