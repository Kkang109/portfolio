document.addEventListener('DOMContentLoaded', () => {
	
	// 1. 아코디언 기능 구현
	const accordionHeaders = document.querySelectorAll('.accordion-header');
	
	accordionHeaders.forEach(header => {
		header.addEventListener('click', () => {
			const currentItem = header.parentElement;
			
			// 다른 아코디언 접고 싶을 경우 아래 주석 해제
			/*
			document.querySelectorAll('.accordion-item').forEach(item => {
				if(item !== currentItem) item.classList.remove('active');
			});
			*/
			
			currentItem.classList.toggle('active');
		});
	});
	
	// 2. 트랙리스트 클릭 시 정보 변경 기능
	const tracks = document.querySelectorAll('.track');
	const currentArt = document.querySelector('.album-art');
	const currentTitle = document.getElementById('current-title');
	
	tracks.forEach(track => {
		track.addEventListener('click', () => {
			// 활성화 효과 변경
			tracks.forEach(t => t.classList.remove('active'));
			track.classList.add('active');
			
			// 정보 가져오기
			const title = track.getAttribute('data-title');
			const img = track.getAttribute('data-img');
			
			// 정보 반영
			currentTitle.innerText = title;
			currentArt.style.backgroundImage = `url('${img}')`;
		});
	});
});