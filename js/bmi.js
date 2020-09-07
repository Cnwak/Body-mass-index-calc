//SELECTING FORM

document.querySelector('form').addEventListener('submit', function (e) {
  //HIDE RESULTS
  document.getElementById('result').style.display = 'none';

  //SHOW RESULTS AND LOADER
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1000);
  e.preventDefault();
});

function calculateResults() {
  console.log('Calculating...');

  const weight = document.getElementById('weight');

  const height = document.getElementById('height');

  const BMI = document.getElementById('BMI');

  const heightMeters = parseFloat(height.value) / 100;

  const weightParse = parseFloat(weight.value);

  const heightSq = Math.pow(heightMeters, 2);

  const result = weightParse / heightSq;

  if (result >= 18.5 && result <= 24.9) {
    BMI.value = `${result.toFixed(2)} : Normal/Healthy Weight. Good Job! `;
    document.getElementById('result').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else if (isFinite(result) && result < 18.5) {
    BMI.value = `${result.toFixed(2)} : Underweight `;
    document.getElementById('result').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else if (result >= 25.0 && result <= 29.9) {
    BMI.value = `${result.toFixed(2)} : Overweight `;
    document.getElementById('result').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else if (result >= 30.0 && result <= 70.0) {
    BMI.value = `${result.toFixed(2)} : Obese `;
    document.getElementById('result').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else {
    M.toast({
      html:
        '<h4 class="red-text"> Please check your numbers <i class="material-icons">error</i></h4>',
    });
    document.getElementById('result').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
  }
}
