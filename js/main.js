$(document).ready(function(){
	loadContent();
	$('#load__more__persons').click(
		function (){
			var countOfPersons = document.getElementById('main__items').getElementsByClassName('person__cart__place').length;
			$.post("php/get_more_persons.php", {kol: 6, tek: countOfPersons}, successMorePersons);
		});
});

function loadContent(){
	$.post("php/get_content.php",{}, successLoad);
}

function successLoad(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let person = 
			`	<div class="person__cart__place">
					<div class="person__cart">
							<div class="image__box">
								<img src="${data[i].img}" alt="${data[i].name}">
							</div>

							<div class="person__cart__name">
								${data[i].name}
							</div>

							<div class="person__cart__group">
								${data[i].group}
							</div>

							<div class="person__cart__text">
								<p>
									${data[i].text_p1}
								</p>

								<p>
									${data[i].text_p2}
								</p>
							</div>
						</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', person);
		}}

function successMorePersons(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let person = 
			`	<div class="person__cart__place">
					<div class="person__cart">
							<div class="image__box">
								<img src="${data[i].img}" alt="${data[i].name}">
							</div>

							<div class="person__cart__name">
								${data[i].name}
							</div>

							<div class="person__cart__group">
								${data[i].group}
							</div>

							<div class="person__cart__text">
								<p>
									${data[i].text_p1}
								</p>

								<p>
									${data[i].text_p2}
								</p>
							</div>
						</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', person);
}}