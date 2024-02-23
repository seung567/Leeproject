/**
 * 
 */

$(function(){
	
		$('#slide_banner').bxSlider({

		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true,
		slideWidth: 750,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 10,
        autoDelay: 0, // 슬라이드가 자동으로 전환되는 간격의 지연 시간 (밀리초)
        pause: 2000 // 슬라이드가 자동으로 전환되는 간격 (밀리초)

	});
	
});

$(document).ready(function() {
	renderCurrentTime();
	renderQuote();
});


function renderCurrentTime() {
	let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
	fetch(url)
		.then(res => res.json()).then((data) => {
			let datetime = data['datetime'].substr(11, 5);
			$('#time').text(datetime);
		});
}


function renderQuote() {
	let url = `https://api.quotable.io/random`;
	fetch(url)
		.then(res => res.json()).then((data) => {
			let content = `" ${data['content']} "`;
			let author = `- ${data['author']} -`;
			$('#content').text(content);
			$('#author').text(author);
		});
}

$(document).on('click', '.success-secret', function() {
    var w = 600;
    var h = 600;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    window.open('./html/success-secret.html', '_blank', 'width='+w+', height='+h+', left='+left+', top='+top);
});
$(document).on('click', '.login', function() {
    var w = 600;
    var h = 400;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    window.open('./html/login.html', '_blank', 'width='+w+', height='+h+', left='+left+', top='+top);
});
$(document).on('click', '.sign-up', function() {
    var w = 600;
    var h = 1050;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    window.open('./html/sign-up.html', '_blank', 'width='+w+', height='+h+', left='+left+', top='+top);
});
$(document).on('click', '.my-info', function() {
    var w = 600;
    var h = 750;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    window.open('./html/my-info.html', '_blank', 'width='+w+', height='+h+', left='+left+', top='+top);
});
$(document).on('click', '.vision-board', function() {
	window.open('./html/vision-board.html', '_blank');
});
$(document).on('click', '.bucket-list', function() {
	window.open('./html/bucket-list.html', '_blank');
});
$(document).on('click', '.priority', function() {
	window.open('./html/priority.html', '_blank');
});
$(document).on('click', '.to-do', function() {
	window.open('./html/to-do.html', '_blank');
});
$(document).on('click', '.today', function() {
	window.open('./html/today.html', '_blank');
});
$(document).on('click', '.reflection', function() {
	window.open('./html/reflection.html', '_blank');
});
$(document).on('click', '.message', function() {
 	var w = 1000;
    var h = 1150;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    window.open('./html/motive.html', '_blank', 'width='+w+', height='+h+', left='+left+', top='+top);
});

