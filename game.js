const fruits = ["🍎", "🍎", "​🍑", "​🍑", "🍒", "🍒", "​​🍉", "​​🍉", "🍊", "🍊", "​🍇", "​🍇", "🍓", "🍓", "​​🍆", "​​🍆", "🍅​", "🍅​", "​🥝", "​🥝", "​🥕​", "​🥕​", "🥔​", "🥔​"];
var fruit_sira = fruits.sort(() => (Math.random() > .5) ? 3 : -1);
for (var i = 0; i < fruits.length; i++) {
    let kutu = document.createElement('div')
    kutu.className = 'item';
    kutu.innerHTML = fruit_sira[i]
    document.querySelector('.game').appendChild(kutu);
    kutu.onclick = function () {
        this.classList.add('kutuAc')
        setTimeout(function () {
            if (document.querySelectorAll('.kutuAc').length > 1) {
                if (document.querySelectorAll('.kutuAc')[0].innerHTML == document.querySelectorAll('.kutuAc')[1].innerHTML) {
                    document.querySelectorAll('.kutuAc')[0].classList.add('kutuEsle')
                    document.querySelectorAll('.kutuAc')[1].classList.add('kutuEsle')

                    document.querySelectorAll('.kutuAc')[1].classList.remove('kutuAc')
                    document.querySelectorAll('.kutuAc')[0].classList.remove('kutuAc')

                    if (document.querySelectorAll('.kutuEsle').length == fruits.length) {
                        document.querySelectorAll('.sonuc')[0].classList.add('goster')
                        document.getElementById('sonucDiv').innerHTML = "Tebrikler Kazandınız!"
                    }
                } else {
                    document.querySelectorAll('.kutuAc')[1].classList.remove('kutuAc')
                    document.querySelectorAll('.kutuAc')[0].classList.remove('kutuAc')
                }
            }
        }, 500)
    }
}
function yenile() { window.location.reload(); }
document.getElementById("resetBtn").addEventListener("click", yenile);