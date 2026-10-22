// 버튼 클릭 시 화면 전환
document.getElementById('open-btn').addEventListener('click', function() {
    document.getElementById('intro-screen').classList.remove('active');
    document.getElementById('letter-screen').classList.add('active');
    startFloatingEffect(); // 편지 열 때 효과 시작
});

// 배경 떠다니는 이모지 효과
const emojis = ['🌸', '✨', '💖', '🌷', '🎈'];

function createFloatingItem() {
    const item = document.createElement('div');
    item.classList.add('floating-item');
    item.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // 모바일에서도 자연스럽게 퍼지도록 설정
    item.style.left = Math.random() * 90 + 'vw';
    item.style.fontSize = (Math.random() * 1.2 + 1) + 'rem';
    item.style.animationDuration = (Math.random() * 5 + 6) + 's';
    
    document.getElementById('floating-container').appendChild(item);
    
    setTimeout(() => item.remove(), 10000);
}

function startFloatingEffect() {
    for(let i=0; i<8; i++) {
        setTimeout(createFloatingItem, Math.random() * 2000);
    }
    setInterval(createFloatingItem, 1500);
}