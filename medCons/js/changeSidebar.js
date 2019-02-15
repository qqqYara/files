$(document).on('mouseover', 'div', 
	function(event) {
			   		console.log(
			   			$(event.target).attr('data_id')
			   		);
});

// function hoverObj() { 
// 	var profileDataId = document.getElementByTagName("div")[0].getAttribute("data_id");
// 	console.log(profileDataId)
// }

// function hoverObj()	{
// 	document.onmouseover = function(e) {
//     	console.log(e.target.id);
// 	};
// };

// if(element.style.className.hovered === true) {do something}

// $(document).ready(function(){
//      $("#profileOne").mouseover(function(){
//          $("sideBar_ProfileOne").css("display", "block");
//      });
//      $("#profileTwo").mouseover(function(){
//          $("#sideBar_ProfileTwo").css("display", "block");
//      });
     
// });