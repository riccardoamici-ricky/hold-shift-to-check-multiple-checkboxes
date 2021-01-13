const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
	let inBetween = false;
	if(e.shiftKey && this.checked) {
		//loop over every single checkbox
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if(checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				console.log('starting to check them inbeetwen')
			}

			if(inBetween) {
				checkbox.checked = true;
			}
		})
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

