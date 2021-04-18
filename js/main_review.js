$(document).ready(function(){
	loadReview();
	$(".btn__submit").click(
		function(){
				var name = document.getElementById('name').value;

				var email = document.getElementById('email').value;

				var text = document.getElementById('text').value;

				sendForm(name, email, text);
			return false; 
		});
});

function sendForm(name, email, text){
	$.post("php/add_review.php", {name: name, email: email, text: text} ,  successAdd);
}

function successAdd(data){
	alert('Обзор добавлен!');
	document.review__form.reset();
	commentClear();
	loadReview();
}
function commentClear(){
    document.getElementById('place__for__review').innerHTML = '';
}
function loadReview(){
	$.ajax ({
				url: "php/get_review.php",
				type: "POST",
				data: ({}),
				dataType: "html",
				success: successLoadReview
			});
}

function successLoadReview(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let review = 
			`<div class="review__place">
				<div class="review__block">
					<div class="review__person__name">
						${data[i].name}
					</div>
					<div class="review__person__email">
						${data[i].email}
					</div>
					<div class="review__person__text">
						${data[i].text}
					</div>
				</div>
			</div>`;
			document.getElementById("place__for__review").insertAdjacentHTML('afterbegin', review);
		}}