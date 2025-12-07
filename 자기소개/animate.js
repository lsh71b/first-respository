// 타이핑 애니메이션 - 문자열을 쪼개서 각 글자에 애니메이션 적용
const animateElements = document.querySelectorAll('.animate-text');

// 한글 자음과 모음
const consonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const vowels = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅝ', 'ㅞ', 'ㅢ'];

// 랜덤 한글 조합 생성
const generateRandomKorean = () => {
  const types = [
    () => consonants[Math.floor(Math.random() * consonants.length)] + vowels[Math.floor(Math.random() * vowels.length)], // 자+모
    () => vowels[Math.floor(Math.random() * vowels.length)] + consonants[Math.floor(Math.random() * consonants.length)], // 모+자
    () => consonants[Math.floor(Math.random() * consonants.length)], // 자만
    () => vowels[Math.floor(Math.random() * vowels.length)] // 모만
  ];
  const randomType = Math.floor(Math.random() * types.length);
  return types[randomType]();
};

// 각 요소별로 처리
animateElements.forEach((element) => {
  const originalText = element.textContent;
  const chars = originalText.split('');

  // HTML 초기화 - span으로 감싼 글자들로 변환
  element.innerHTML = chars.map(char => `<span class="typing-char">${char}</span>`).join('');

  // 각 글자의 애니메이션 실행
  const charSpans = element.querySelectorAll('.typing-char');
  charSpans.forEach((charSpan, index) => {
    const targetChar = charSpan.textContent;
    const duration = Math.random() * 2000 + 1000; // 1~3초
    const startTime = Date.now();
    const updateInterval = Math.random() * 200 + 100; // 0.1~0.3초

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        // 진행 중: 랜덤 한글 조합으로 표시
        charSpan.textContent = generateRandomKorean();
        setTimeout(animate, updateInterval);
      } else {
        // 완료: 최종 글자로 표시
        charSpan.textContent = targetChar;
      }
    };

    animate();
  });
});
