
const num = document.querySelectorAll('.number');
for (let i = 0; i < num.length; i++)
{
    num[i].innerHTML = Math.floor(Math.random() * 10);
}
//document.getElementById('number').innerHTML = Math.floor(Math.random() * 10);


