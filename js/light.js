//document.addEventListener('DOMContentLoaded', function() {
	const container = document.querySelector('.nos-solutionsimg');
	const ovalCount = 6;
	const radius = 150;
	const centerX = container.offsetWidth / 2.1;
	const centerY = container.offsetHeight / 2;
	let currentOval = 0;
  
	function createOval() {
	  const angle = (Math.PI / (ovalCount - 1)) * currentOval;
	  const x = centerX + radius * Math.cos(angle) - 15;
	  const y = centerY - radius * Math.sin(angle) - 7.5;
	  const rotation = Math.atan2(centerY - y, centerX - x) * (180 / Math.PI);
  
	  const oval = document.createElement('div');
	  oval.className = 'oval';
	  oval.style.left = `${x}px`;
	  oval.style.top = `${y}px`;
	  oval.style.transform = `rotate(${rotation}deg)`;
	  container.appendChild(oval);
	  currentOval++;
  
	  if (currentOval < ovalCount) {
		setTimeout(createOval, 200);
	  } else {
		setTimeout(blinkOvals, 1000);
	  }
	}
  
	function blinkOvals() {
	  const ovals = document.querySelectorAll('.oval');
	  ovals.forEach(oval => oval.style.animation = 'blink 0.5s infinite alternate');
  
	  setTimeout(function() {
		ovals.forEach(oval => oval.style.animation = 'none');
		setTimeout(fadeOutOvals, 1000);
	  }, 2000);
	}
  
	function fadeOutOvals() {
	  const ovals = document.querySelectorAll('.oval');
	  ovals.forEach(oval => oval.style.animation = 'fadeOut 1s forwards');
  
	  setTimeout(function() {
		ovals.forEach(oval => oval.remove());
		currentOval = 0;
		createOval();
	  }, 1000);
	}
  
	createOval();
  //});
  