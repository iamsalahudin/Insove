let loader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    loader.style.display = 'none';
});


let pointer = document.querySelectorAll('.points');
let quote = document.querySelector('Q1');
let qNo = 1;
let qNoStr = 'Q' + qNo;
pointer.forEach(point => {
    point.addEventListener('click', () => {
        let i = 0;
        while (i < 10) {
            if (point.classList.contains(qNoStr) == true) {
                quote = document.querySelector('.' + qNoStr);
                break;
            }
            else {
                qNo = qNo + 1;
                qNoStr = 'Q' + qNo;
                i++;
                continue;
            }
        }
        console.log(qNoStr);
        if (point.classList.contains('active') == false) {
            point.classList.remove('inactive');
            quote.classList.remove('disableQuote');
            let enableQ = document.querySelector('.enableQuote');
            let activeP = document.querySelector('.active');
            activeP.classList.remove('active');
            enableQ.classList.remove('enableQuote');
            point.classList.add('active');
            quote.classList.add('enableQuote');
            activeP.classList.add('inactive');
            enableQ.classList.add('disableQuote');
        }
        else {
            console.log('already declared');
        }
        qNo = 1;
        qNoStr = 'Q' + qNo;
    });
});


let memberP = document.querySelectorAll('.memberPoints');

memberP.forEach(point => {
    point.addEventListener('click', () => {
        let activeM = document.querySelector('.Mactive');
        if (point.classList.contains('Mactive') == false && point.classList.contains('left') == true) {
            point.classList.add('Mactive');
            point.classList.remove('Minactive');
            activeM.classList.add('Minactive');
            activeM.classList.remove('Mactive');
            let enableLeft = document.querySelector('.disableSetLeft');
            let disableRight = document.querySelector('.enableSetRight');
            enableLeft.classList.add('enableSetLeft');
            enableLeft.classList.remove('disableSetLeft');
            disableRight.classList.add('disableSetRight');
            disableRight.classList.remove('enableSetRight');
        }
        else if (point.classList.contains('Mactive') == false && point.classList.contains('right') == true) {
            point.classList.add('Mactive');
            point.classList.remove('Minactive');
            activeM.classList.add('Minactive');
            activeM.classList.remove('Mactive');
            let disableLeft = document.querySelector('.enableSetLeft');
            let enableRight = document.querySelector('.disableSetRight');
            disableLeft.classList.add('disableSetLeft');
            disableLeft.classList.remove('enableSetLeft');
            enableRight.classList.add('enableSetRight');
            enableRight.classList.remove('disableSetRight');
        }
        else {
            console.log('Error in Member Set')
        }
    });
});

let plusNo = 1;
let plusValue = 'plus' + plusNo;
let minusValue = '.minus' + plusNo;
let ansValue = '.ans' + plusNo;
let quesValue = '.ques' + plusNo;
let pluses = document.querySelectorAll('.fa-plus');
pluses.forEach(plus => {
    plus.addEventListener('click', () => {
        var i = 1;
        plusNo = 1;
        plusValue = 'plus' + plusNo;
        minusValue = '.minus' + plusNo;
        ansValue = '.ans' + plusNo;
        quesValue = '.ques' + plusNo;
        while (i < 10) {
            if (plus.classList.contains(plusValue) == true) {
                plus.style.display = 'none';
                console.log('1. ' + minusValue + ' 2. ' + ansValue + ' 3. ' + quesValue);
                let minus = document.querySelector(minusValue);
                let answer = document.querySelector(ansValue);
                let question = document.querySelector(quesValue);
                minus.style.display = 'inline';
                answer.style.display = 'inline';
                question.style.borderBottom = '1px solid white';

                break;
            }
            else {
                plusNo = plusNo + 1;
                plusValue = 'plus' + plusNo;
                minusValue = '.minus' + plusNo;
                ansValue = '.ans' + plusNo;
                quesValue = '.ques' + plusNo;
                i++;
                continue;
            }
        }
    });
});

let minuses = document.querySelectorAll('.fa-minus');
minuses.forEach(minus => {
    minus.addEventListener('click', () => {
        console.log('minus clicked');
        var i = 1;
        plusNo = 1;
        plusValue = '.plus' + plusNo;
        minusValue = 'minus' + plusNo;
        ansValue = '.ans' + plusNo;
        quesValue = '.ques' + plusNo;
        while (i < 10) {
            if (minus.classList.contains(minusValue) == true) {
                minus.style.display = 'none';
                console.log('1. ' + minusValue + ' 2. ' + ansValue + ' 3. ' + quesValue);
                let plus = document.querySelector(plusValue);
                let answer = document.querySelector(ansValue);
                let question = document.querySelector(quesValue);
                plus.style.display = 'inline';
                answer.style.display = 'none';
                question.style.borderBottom = '1px solid #e2e2e2';
                break;
            }
            else {
                plusNo = plusNo + 1;
                plusValue = '.plus' + plusNo;
                minusValue = 'minus' + plusNo;
                ansValue = '.ans' + plusNo;
                quesValue = '.ques' + plusNo;
                i++;
                continue;
            }
        }
    });
});

let clinics = document.querySelectorAll('.clinicbtn');

clinics.forEach(clinic=>{
    clinic.addEventListener('click', ()=>{
        console.log('hello 1');
        if(clinic.classList.contains('clinicActive') == false){
            console.log('hello 2');
            let activeClinic = document.querySelector('.clinicActive');
            activeClinic.classList.remove('clinicActive');
            clinic.classList.add('clinicActive');
            console.log('hello 3');
            let no = 1;
            let clinicNo = 'clinic' + no;
            while(clinic.classList.contains(clinicNo) == false && no < 15){
                console.log('hello loop');
                no = no + 1;
                clinicNo = 'clinic' + no;
            }
            clinicNo = '.' + clinicNo;
            console.log('hello 4');
            let clinicPanel = document.querySelectorAll(clinicNo);
            let lastdisplay = document.querySelector('.d-inline');
            lastdisplay.classList.remove('d-inline');
            clinicPanel[1].classList.add('d-inline');
            console.log('hello 5');
        }
    });
});