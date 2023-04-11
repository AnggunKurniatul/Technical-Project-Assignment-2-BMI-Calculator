document.getElementById('calculate').addEventListener('click', function(event){
    event.preventDefault()

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    document.getElementById('output').innerHTML = 
    '<p> Your BMI is <strong id="result"></strong> Your category is <strong id="category"></strong></p>';

    const total = document.getElementById('result');
    const category = document.getElementById('category');

    const bmiCalculator = weight/(height/100)**2;

    total.innerText = bmiCalculator.toFixed(1);
    console.log(bmiCalculator);

    if(bmiCalculator < 18.5){
        category.innerText = 'Underweight'
    }else if(bmiCalculator <= 24.9){
        category.innerText = 'Normal weight'
    }else if(bmiCalculator <= 29.9){
        category.innerText = 'Overweight'
    }else if(bmiCalculator > 29.9){
        category.innerText = 'Obesity'
    }else{
        alert('Enter your weight and height')
        document.getElementById('output').innerHTML =""
    }
});

document.getElementById('reset').addEventListener('click', function(event){
    form.reset()
})