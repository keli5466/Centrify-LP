
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
	var slider = document.querySelectorAll('.box-grid > div');
	console.log(slider);
	var controls = document.querySelector('.arrows');


	CreateControls();

	function CreateControls(){
		for (var i = 0; i < slider.length; i ++){
			var dot = document.createElement('li');
			dot.setAttribute('slide-index',i + 1);
			slider[i].setAttribute('slide-index',i + 1);
			controls.appendChild(dot).classList.add('dot');
		}
	}
	//create a click listerner when user clicks dots or arrows
	controls.addEventListener('click', function (e){
		var current = e.target;
		// if (e.target.classList.contains('prev-btn')){
		// 	moveSlides(slideIndex = slideIndex - 1);
		// }
		// if (e.target.classList.contains('next-btn')){
		// 	moveSlides(parseInt(slideIndex) + 1);
		// }
		if (e.target.classList.contains('dot')){
			var active = current.getAttribute('slide-index');
			console.log('click');
			moveSlides(active);
		}
	});


	function moveSlides(num) {
		slideIndex = num;
		removeClass();
		console.log(slideIndex);
		//Loops Slide
		if (num < 1){ slideIndex = slider.length; }
		else if (num > slider.length) { slideIndex = 1; }
		slider[slideIndex-1].classList.add('center');

		var dots = document.querySelectorAll('.dot');
		dots[slideIndex-1].classList.add('active');
		slider[slideIndex-1].classList.add('active');

		findCenter();
	}
	//
	// //create center card, and also the loop funcationality.
	function findCenter(){
		if (slideIndex < slider.length ){
			slider[slideIndex].classList.add('active');
			slider[slideIndex].classList.add('trailing');
		}

		if (slideIndex == 1){
			slider[slider.length - 1].classList.add('active');
			slider[slider.length - 1].classList.add('prev');
		}

		else if (slideIndex == slider.length){
			slider[0].classList.add('active');
			slider[0].classList.add('trailing');
			slider[slideIndex-2].classList.add('active');
			slider[slideIndex-2].classList.add('prev');
			console.log("work", slideIndex);
		}
		else{
			console.log('els');
			slider[slideIndex-2].classList.add('active');
			slider[slideIndex-2].classList.add('prev');
		}
	}
	//
	// //reset classes
	function removeClass(){
		var activeElements = document.querySelectorAll('.active');
		for (var i = 0; i < activeElements.length; i++){
			activeElements[i].classList.remove("active");
			activeElements[i].classList.remove("prev");
			activeElements[i].classList.remove("trailing");
			activeElements[i].classList.remove("center");
		}
	}


});
