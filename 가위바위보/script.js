const EMOJI = { "가위": "✌️", "바위": "✊", "보": "✋", "랜덤": "❓" };
const CHOICES = ["가위", "바위", "보", "랜덤"];
const beats = { "가위": "보", "바위": "가위", "보": "바위"};

let userLocked = null;        // 사용자가 '현재' 선택해둔 값 (카운트다운 중 계속 바뀔 수 있음)
const score = [0, 0, 0];      // [나, 컴A, 컴B]
let counting = false;         // 카운트다운 중인지
let iv = null;                // 인터벌 핸들

function randomChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function setCard(id, choice) {
  // 공개 시점에만 이 함수로 최종 패를 보여준다
  $(`#${id}-hand`).text(choice ? EMOJI[choice] : "❔");
  $(`#${id}-label`).text(choice ? choice : (id === "p1" ? "선택 대기" : "선택 잠금됨"));
}

function setPreviewLabel(choice) {
  // 공개 전에는 손(이모지)은 숨기고, 라벨에만 "선택 중" 문구로 미리보기
  $("#p1-hand").text("❔");
  $("#p1-label").text(choice ? `선택 중: ${choice}` : "선택 중: (미선택)");
}

function clearHL() {
  $("#p1,#p2,#p3").removeClass("win lose neutral locked");
}

function judge(c1, c2, c3) {
  const set = new Set([c1, c2, c3]);
  if (set.size === 1) return { winners: [], text: "🤝 모두 같은 패 — 무승부!" };
  if (set.size === 3) return { winners: [], text: "🤝 모두 다른 패 — 무승부!" };

  const arr = [c1, c2, c3];
  const idxBy = {};
  arr.forEach((h, i) => { (idxBy[h] ??= []).push(i); });
  const [hA, hB] = Object.keys(idxBy);

  let winningHand = null;
  if (beats[hA] === hB) winningHand = hA;
  else if (beats[hB] === hA) winningHand = hB;

  if (!winningHand) return { winners: [], text: "🤝 상쇄 — 무승부!" };

  const winners = idxBy[winningHand];
  const names = ["나", "컴A", "컴B"];
  const crown = winners.length === 1 ? "👑" : "👑👑";
  return { winners, text: `${crown} 승자: ${winners.map(i => names[i]).join(", ")}` };
}

// ▶ 선택(카운트다운 중에도 변경 가능)
$(".choice").on("click", function () {
  // counting이든 아니든, 언제든지 선택 갱신 가능
  $(".choice").removeClass("active");
  $(this).addClass("active");
  userLocked = $(this).data("choice");

  // 공개 전에는 미리보기만(라벨), 손 이모지는 감춤
  if (counting) {
    setPreviewLabel(userLocked);
    $("#msg").text(`카운트다운 진행중… 현재 선택: ${userLocked}`);
  } else {
    // 대기 상태에서는 평소처럼 미리보기
    $("#p1").addClass("locked"); // 대기 중에도 락 배지로 "선택 중" 강조
    setPreviewLabel(userLocked);
    $("#msg").text(`선택 설정: ${userLocked}. "시작"을 누르면 카운트다운 동안에도 변경할 수 있어요.`);
  }
});

// ▶ 시작 (카운트다운)
$("#start").on("click", function () {
  if (counting) return;

  counting = true;
  clearHL();
  $("#p1,#p2,#p3").addClass("neutral");

  // 공개 전 UI: 전부 숨김(❔), 단 사용자 라벨은 "선택 중"으로 갱신
  $("#p2-hand").text("❔"); $("#p2-label").text("선택 잠금됨");
  $("#p3-hand").text("❔"); $("#p3-label").text("선택 잠금됨");
  setPreviewLabel(userLocked); // 현재 선택(없을 수도 있음)

  // 오버레이 켜고 카운트다운
  $("#overlay").css("display", "flex");
  let n = 3;
  $("#count").text(n);
  $("#msg").text("카운트다운 중입니다. 원하는 패로 계속 바꿀 수 있어요!");

  iv = setInterval(() => {
    n--;
    if (n > 0) {
      $("#count").text(n);
    } else {
      clearInterval(iv);
      iv = null;
      $("#overlay").hide();

      // 공개 시점에 최종 확정!
      const finalUser = userLocked ?? randomChoice(); // 미선택이면 랜덤
      const c2 = randomChoice();
      const c3 = randomChoice();

      // 최종 패 표시 & 락
      setCard("p1", finalUser);
      setCard("p2", c2);
      setCard("p3", c3);
      $("#p1,#p2,#p3").removeClass("neutral");
      $("#p1").addClass("locked");

      // 판정
      const { winners, text } = judge(finalUser, c2, c3);
      if (winners.length === 0) {
        $("#msg").text(text + " (점수 변화 없음)");
      } else {
        winners.forEach(i => {
          score[i] += 1;
          $(`#p${i + 1}`).addClass("win");
        });
        [0, 1, 2].forEach(i => {
          if (!winners.includes(i)) $(`#p${i + 1}`).addClass("lose");
        });
        $("#s1").text(score[0]);
        $("#s2").text(score[1]);
        $("#s3").text(score[2]);
        $("#msg").text(text + " (+1점)");
      }

      counting = false;
    }
  }, 700);
});

// ▶ 리셋
$("#reset").on("click", function () {
  if (counting) return;
  userLocked = null;
  score[0] = score[1] = score[2] = 0;
  $("#s1,#s2,#s3").text("0");
  $(".choice").removeClass("active");
  clearHL();
  setCard("p1", null);
  setCard("p2", null);
  setCard("p3", null);
  $("#msg").text("선택 후 “시작”을 누르세요. 카운트다운 중에도 변경 가능합니다.");
});
