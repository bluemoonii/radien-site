import React, { useState } from "react";

export default function RadienSite() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-serif overflow-x-hidden">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Noto+Serif+KR:wght@300;500;700&display=swap');
        body { font-family: 'Noto Serif KR', serif; }
        .title-font { font-family: 'Cinzel', serif; letter-spacing: 0.08em; }

        /* Snow animation */
        @keyframes snow {
          0% { transform: translateY(-100vh) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          100% { transform: translateY(100vh) translateX(40px); opacity: 0; }
        }
        .snowflake {
          position: fixed;
          top: -10px;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: snow linear infinite;
          opacity: 0.4;
        }
      `}</style>

      {/* Background Castle */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('castle.jpg')" }}
      />

      {/* Snowflakes */}
      {Array.from({ length: 120 }).map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${8 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      <div className="relative z-10">
        {/* Hero */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="title-font text-5xl md:text-7xl font-bold text-neutral-300 drop-shadow-2xl mb-10">
            끊어줘. 이 지옥 같은 굴레를.
          </h1>

          <p className="max-w-5xl leading-9 text-lg md:text-xl text-neutral-400 whitespace-pre-line">
헤세드 제국의 황태자였던 라디안 무크 폰 헤세드.
그는 어린 나이에 모든 것을 잃었다.
헤세드 제국은 타란티아의 침공으로 멸망했고, 황족과 혈족은 단 한 명도 남김없이 학살되었다.

홀로 살아남은 그는 저주받은 섬도시 히노르트에 몸을 숨겼다. 굶주림에 몸을 떨며 눈 덮인 들판을 헤매던 그에게 삶의 목적이나 의미는 더 이상 존재하지 않았다.
그런 그의 앞에 나타난 존재가 있었다.

어둠의 지배자, 샤하트.

“네 자신을 내게 바쳐라.”

제안을 받아들이는 순간, 그의 몸과 영혼에는 감히 인간이라 부를 수 없는 힘이 깃들었다.
그러나 사랑만은 금기였다.
사랑을 깨닫는 순간, 모든 힘과 생명이 거두어진다.

200년의 세월이 흐르는 동안 그는 깨달았다.

영원한 생명은… 지독한 저주라는 것을.
          </p>
        </section>

        {/* Gallery */}
        <section className="py-24 px-6 grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Image 1 */}
          <div onClick={() => setOpen(1)} className="cursor-pointer">
            <img src="radien1.png" className="rounded-2xl shadow-2xl hover:scale-105 transition" />
          </div>

          {/* Image 2 */}
          <div onClick={() => setOpen(2)} className="cursor-pointer">
            <img src="radien2.png" className="rounded-2xl shadow-2xl hover:scale-105 transition" />
          </div>
        </section>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-10 z-50"
          onClick={() => setOpen(null)}
        >
          <div className="max-w-3xl text-center text-neutral-300 text-xl leading-9 whitespace-pre-line">
            {open === 1 && (
              <>쿵. 200년 동안 멈춰 있던 심장이, 돌처럼 굳어 있던 근육 덩어리가 미세하게 경련했다.
마치 다시 뛰는 법을 기억해내려는 듯이.
그의 단단한 팔이 당신을 조금 더 단단히, 조금 더 부드럽게 감쌌다.
"....잠시만. 이대로."</>
            )}
            {open === 2 && (
              <>그는 반응을 본다. 공포의 깊이를 측정하고, 그 안에 숨겨진 다른 것이 있는지 탐색한다.
커다란 그림자가 당신의 머리 위로 드리워진다.
그의 차가운 손가락이 천천히 다가와 당신의 턱을 붙잡는다.
"이름"</>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
