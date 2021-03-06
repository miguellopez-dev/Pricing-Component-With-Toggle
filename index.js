const annuallyMonthlyText = document.querySelectorAll('.top__selection p');
const check = document.getElementById('toggle');

const priceYear = document.querySelectorAll('.cards__yearly');
const priceMonth = document.querySelectorAll('.cards__monthly');

check.addEventListener('click', () => {
	if (check.checked) {
		// Removes Hide class from monthly and adds it to annually
		annuallyMonthlyText[0].classList.remove('top__dark');
		annuallyMonthlyText[1].classList.add('top__dark');

		// Changes the hide class on the prices
		priceYear.forEach(function (i) {
			i.classList.add('hide');
		});
		priceMonth.forEach(function (i) {
			i.classList.remove('hide');
		});
	} else {
		// Removes Hide class from annually and adds it monthly
		annuallyMonthlyText[0].classList.add('top__dark');
		annuallyMonthlyText[1].classList.remove('top__dark');

		// Changes the hide class on the prices
		priceYear.forEach(function (i) {
			i.classList.remove('hide');
		});
		priceMonth.forEach(function (i) {
			i.classList.add('hide');
		});
	}
});

// Defaults the checkbox to unchecked
if (check) {
	check.checked = false;
}
