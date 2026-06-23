# 개발자 웹 이력서

HTML, CSS, JavaScript, Tailwind CSS로 만든 **1페이지 개발자 웹 이력서**입니다.
빌드 도구 없이 동작하는 정적 사이트로, 다크모드·반응형·스크롤 애니메이션을 지원합니다.

## 주요 기능

- 📱 모바일 우선 반응형 레이아웃
- 🌙 다크모드 토글 (선택값 `localStorage` 저장)
- ✨ 스크롤 시 섹션 페이드인 애니메이션
- 🍔 모바일 햄버거 메뉴
- 🎨 모던 미니멀 디자인 (Tailwind CSS)

## 파일 구조

```
.
├── index.html       # 메인 페이지 (8개 섹션)
├── css/style.css    # Tailwind 보완용 커스텀 스타일
├── js/main.js       # 다크모드 / 메뉴 / 스크롤 인터랙션
├── ROADMAP.md       # 개발 로드맵
└── CLAUDE.md        # Claude Code 작업 가이드
```

## 실행 방법

별도 빌드 과정이 없습니다. `index.html`을 브라우저에서 직접 열거나, 로컬 정적 서버로 확인하세요.

```bash
# Python 정적 서버 예시
python3 -m http.server 8000
# 이후 브라우저에서 http://localhost:8000 접속
```

## 콘텐츠 수정

현재 이력서 내용은 **가상 예시 데이터**(홍길동 / Frontend Developer)로 채워져 있습니다.
`index.html`의 텍스트와 소셜 링크(GitHub / LinkedIn / Instagram, 이메일) URL을 본인 정보로 교체하세요.

## 배포

정적 파일이므로 아래 서비스에 그대로 배포할 수 있습니다.

- **GitHub Pages**: 저장소 Settings → Pages에서 브랜치 지정
- **Netlify / Vercel**: 저장소 연결 후 빌드 명령 없이 배포

## 기술 스택

HTML5 · CSS3 · JavaScript (Vanilla) · Tailwind CSS (CDN)
