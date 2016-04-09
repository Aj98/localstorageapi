var seq = 1;
$(document).ready(function () {
	$("#user").val("");
	$("#age").val("");
	$("input:radio").attr("checked", false);
    $("#mobile").val("");
	$("#email").val("");
	$('#control').show();
	$('#db').show();
	$('h1').show();
    $('form').hide();
	for (var i = 0; i < localStorage.length; i++) {
		var user = localStorage.key(i);
        var jsonObj = JSON.parse(localStorage.getItem(user));
		$('tbody').append("<tr><td>"+seq+"</td><td>"+jsonObj.user+"</td><td>"+jsonObj.age+"</td><td>"+
		jsonObj.gender+"</td><td>"+jsonObj.mobile+"</td><td>"+jsonObj.email+"</td></tr>");
		seq++;
		}
});

$('form').on('submit', function(e) {
	e.preventDefault();
	var user = $("#user").val();
	var age = $("#age").val();
	var gender = $('input:radio[name=rating]:checked').val();
	var mobile = $("#mobile").val();
	var email = $("#email").val();
	if(user)
	{
		var jsonObj={"user":user,"age":age,"gender":gender,"mobile":mobile,"email":email};
	    localStorage.setItem(user,JSON.stringify(jsonObj));
	    var jsonObj = JSON.parse(localStorage.getItem(user));
	    $('tbody').append("<tr><td>"+seq+"</td><td>"+jsonObj.user+"</td><td>"+jsonObj.age+"</td><td>"+
		jsonObj.gender+"</td><td>"+jsonObj.mobile+"</td><td>"+jsonObj.email+"</td></tr>");
	    seq++;
		$('#control').show();
		$('#db').show();
		$('h1').show();
		$('form').hide();
		location.reload();
	}
 });
 
$('#showForm').on('click', function(){
    $('#control').hide();
	$('#db').hide();
	$('form').show();
	$('h1').hide();
});

$('#clearAll').on('click', function(){
    localStorage.clear();
	location.reload();
});