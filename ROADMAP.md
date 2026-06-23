# 개발자 웹 이력서 ROADMAP

HTML, CSS, JavaScript, Tailwind CSS로 만드는 1페이지 개발자 웹 이력서 개발 로드맵입니다.

## 기술 스택

| 분류 | 기술 | 용도 |
|------|------|------|
| 마크업 | HTML5 | 시맨틱 구조 |
| 스타일 | Tailwind CSS | 유틸리티 기반 스타일링 |
| 스타일 보조 | CSS | 커스텀 애니메이션 / 변수 |
| 동작 | JavaScript (Vanilla) | 인터랙션, 다크모드, 스크롤 효과 |

---

## 프로젝트 구조

```
resume/
├── index.html          # 메인 페이지
├── css/
│   └── style.css       # 커스텀 스타일 (Tailwind 보완)
├── js/
│   └── main.js         # 인터랙션 로직
├── assets/
│   ├── images/         # 프로필 사진, 아이콘
│   └── resume.pdf      # 다운로드용 이력서(선택)
└── README.md
```

---

## 이력서 섹션 구성 (콘텐츠)

간단하고 일반적인 구성입니다.

1. **Header / Hero** — 이름, 직무(예: Frontend Developer), 한 줄 소개
2. **About Me** — 자기소개 2~3문장
3. **Skills** — 기술 스택 뱃지 (HTML, CSS, JS, React 등)
4. **Experience** — 경력 / 프로젝트 타임라인
5. **Projects** — 대표 프로젝트 카드 2~3개
6. **Education** — 학력 / 교육 이력
7. **Contact** — 이메일, GitHub, LinkedIn 링크
8. **Footer** — 저작권 표시

---

## 개발 단계 (Phase)

### Phase 1. 환경 설정
- [x] 프로젝트 폴더 및 파일 구조 생성
- [x] Tailwind CSS 적용 (CDN 방식으로 시작 → 추후 빌드 전환)
- [x] 기본 `index.html` 보일러플레이트 작성
- [x] 폰트(Google Fonts) 및 컬러 팔레트 결정

> **Tailwind CDN 빠른 시작**
> ```html
> <script src="https://cdn.tailwindcss.com"></script>
> ```

### Phase 2. 레이아웃 마크업
- [x] 시맨틱 태그(`header`, `section`, `footer`)로 골격 작성
- [x] 각 섹션별 컨테이너 및 반응형 그리드 배치
- [x] 네비게이션 바(앵커 링크) 구성

### Phase 3. 스타일링 (Tailwind)
- [x] Hero 섹션 디자인 (배경, 타이포그래피)
- [x] Skills 뱃지 / 카드 컴포넌트 스타일
- [x] Projects 카드 hover 효과
- [x] 반응형 처리 (`sm`, `md`, `lg` 브레이크포인트)
- [x] 일관된 spacing / color 시스템 적용

### Phase 4. 인터랙션 (JavaScript)
- [x] 다크모드 토글
- [x] 부드러운 스크롤 (앵커 이동)
- [x] 스크롤 시 섹션 페이드인 애니메이션
- [x] 모바일 햄버거 메뉴 토글
- [ ] (선택) 타이핑 애니메이션 효과

### Phase 5. 콘텐츠 채우기
- [x] 자기소개 / 경력 / 프로젝트 내용 입력 (가상 예시 데이터)
- [x] 프로필 이미지 및 아이콘 추가 (인라인 SVG)
- [ ] 이력서 PDF 다운로드 버튼 연결 (선택)

### Phase 6. 마무리 & 배포
- [ ] 반응형 / 크로스 브라우저 점검
- [x] 접근성(장식 요소 `aria-hidden`, 프로필 SVG `role`/`aria-label`, `prefers-reduced-motion`) 점검
- [x] SEO 메타 태그 (`title`, `description`, OG·Twitter 카드, favicon, `theme-color`, `canonical`)
- [x] Lighthouse 성능 점검 → 실측 **Perf 99 · A11y 100 · Best Practices 100 · SEO 100** (Tailwind CDN→CLI 전환으로 렌더 차단 제거, 대비 AA 통과)
- [x] GitHub Pages 배포 (Actions 워크플로) → <https://kevinsung456.github.io/claude-profile/> · SEO 메타 URL 실제 도메인 반영 완료

---

## 디자인 가이드

- **컬러**: 메인 1색 + 강조 1색 + 중립(회색) 톤
- **폰트**: 제목용 / 본문용 2종 이내
- **여백**: 충분한 패딩으로 가독성 확보
- **반응형**: 모바일 우선(Mobile First) 설계

---

## 확장 아이디어 (선택)

- [ ] 다국어 지원 (한/영 토글)
- [ ] 방문자 통계 / 조회수
- [ ] 블로그 / 포스트 섹션 연동
- [x] Tailwind CLI 빌드 환경으로 전환 (CDN → 최적화) — `npm run build:css` 로 `css/tailwind.css` 생성
- [ ] 간단한 애니메이션 라이브러리(AOS) 적용

---

## 참고 자료

- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Fonts](https://fonts.google.com/)
- [Heroicons (아이콘)](https://heroicons.com/)
