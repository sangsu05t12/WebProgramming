// 그림판
const canvas = document.getElementById("canvasMemo");
const ctx = canvas.getContext("2d");
const range = document.getElementById("width");

canvas.width = 500;
canvas.height = 300;

ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
if(range){
    range.addEventListener("input", handleRangeChange);
}
eraser.addEventListener("click", () => ctx.strokeStyle = "white");
pen.addEventListener("click", () => ctx.strokeStyle = "black");

// 계산기 합계
function updateAll() {
    var n1 = parseInt(document.getElementById("food11").value) || 0;
    var n2 = parseInt(document.getElementById("food22").value) || 0;
    var n3 = parseInt(document.getElementById("food33").value) || 0;
    var n4 = parseInt(document.getElementById("food44").value) || 0;
    var n5 = parseInt(document.getElementById("food55").value) || 0;

    var p1 = 17000 * n1;
    var p2 = 43000 * n2;
    var p3 = 38000 * n3;
    var p4 = 9000 * n4;
    var p5 = 100000 * n5;

    document.getElementById("food1Total").value = p1;
    document.getElementById("food2Total").value = p2;
    document.getElementById("food3Total").value = p3;
    document.getElementById("food4Total").value = p4;
    document.getElementById("food5Total").value = p5;

    var totalNumber = n1 + n2 + n3 + n4 + n5;
    document.getElementById("totalNumber").value = totalNumber;
    var totalPrice = p1 + p2 + p3 + p4 + p5;
    document.getElementById("totalPrice").value = totalPrice;
}

// 슬라이더 설정 및 css
        $(document).ready(function () {
            // 변수를 선언합니다.
            const width = 460;
            const height = 300;
            let current = 0;
            // 함수를 선언합니다.
            const moveTo = function () {
                $('.images').animate({
                    left: -current * width
                }, 1000);
            };
            const moveTo1 = function () {
                $('.cts').animate({
                    left: -current * width
                }, 1000);
            };
            // 슬라이더 내부의 이미지 개수를 확인합니다.
            const imageLength = $('.slider').find('.image').length;
            // 슬라이더 버튼을 추가합니다.
            for (let i = 0; i < imageLength; i++) {
                $('<button></button>')
                    .attr('data-position', i)
                    .text(i)
                    .click(function () {
                        current = $(this).attr('data-position');
                        moveTo();
                        moveTo1();
                    })
                    .insertBefore('.slider','.ct')
            }
            // 슬라이더 스타일을 설정합니다.
            $('.images').css({
                position: 'absolute',
                width: width * imageLength,
            });
            $('.cts').css({
                position: 'absolute',
                width: width * imageLength,
            });
            $('.con').css({
                margin: 0,
                padding: 0,
                width: width,
                height: 250,
                display: 'block',
                float: 'left',
                border:'none',
                resize:'none',
                spellcheck:'false',
                background:'#fff',
            });
        });