document.getElementById('calculate').addEventListener('click', function(event){
    event.preventDefault()

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    document.getElementById('output').innerHTML = 
    '<p> Your BMI is <strong id="result"></strong> Your category is <strong id="category"></strong></p><p id="desc"></p>';

    const total = document.getElementById('result');
    const category = document.getElementById('category');

    const bmiCalculator = weight/(height/100)**2;

    total.innerText = bmiCalculator.toFixed(1);
    console.log(bmiCalculator);

    if(bmiCalculator < 18.5){
        category.innerText = 'Underweight'
        document.getElementById('desc').innerHTML = '<br><p>Wow, your weight is below the normal weight limit, buddy! Now you have to start managing your diet. You need to increase your calorie consumption by 2800-3000 in one day. Eat more, buddy!!</p>'
    }else if(bmiCalculator <= 24.9){
        category.innerText = 'Normal weight'
        document.getElementById('desc').innerHTML = '<br><p>Wow, your weight is normal, buddy!! Maintain your ideal body weight by consuming 2500 calories in one day, friends!!</p>'
    }else if(bmiCalculator <= 29.9){
        category.innerText = 'Overweight'
        document.getElementById('desc').innerHTML = '<br><p>Wow, your weight has exceeded the normal weight limit, friend!! Now you have to start managing your diet. You need to consume 1100-1600 calories in one day. Dont get too many calories.</p>'
    }else if(bmiCalculator > 29.9){
        category.innerText = 'Obesity'
        document.getElementById('desc').innerHTML = '<br><p>Wow, your weight has exceeded the normal weight limit, friend!! Now you have to start managing your diet. You need to consume 1100-1600 calories in one day. Dont get too many calories.</p>'
    }else{
        alert('Enter your weight and height')
        document.getElementById('output').innerHTML =""
        var x = document.getElementById('output');
        x.style.display = 'none';
    }

    var x = document.getElementById('output');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
        x.style.margin = '20px 300px';
        x.style.padding = '50px';
        x.style.borderRadius = '30px';
        x.style.backgroundColor = '#E3E3E3';
    }
});

document.getElementById('reset').addEventListener('click', function(event){
    form.reset()
})