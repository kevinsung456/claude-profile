# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 프로젝트 개요

HTML, CSS, JavaScript, Tailwind CSS로 만드는 **1페이지 개발자 웹 이력서** 프로젝트입니다.
빌드 도구나 프레임워크 없이 정적 파일 기반으로 동작합니다.

전체 개발 계획과 단계별 체크리스트는 `ROADMAP.md`에 정의되어 있습니다. 작업 진행 시 ROADMAP의 Phase 순서를 기준으로 삼습니다.

## 현재 상태

프로젝트 초기 단계로, 아직 소스 코드가 작성되지 않았습니다 (`ROADMAP.md`만 존재).
빌드 / 테스트 / 린트 도구는 아직 설정되지 않았으며, 필요 시 ROADMAP의 Phase 6에서 도입합니다.

## 기술 스택 및 아키텍처

- **Tailwind CSS**: 초기에는 CDN(`https://cdn.tailwindcss.com`) 방식으로 시작하고, 최적화가 필요한 시점(ROADMAP Phase 6 이후)에 CLI 빌드 환경으로 전환합니다.
- **JavaScript**: Vanilla JS만 사용합니다. 다크모드 토글, 부드러운 스크롤, 스크롤 페이드인, 모바일 메뉴 토글 등 DOM 인터랙션을 담당합니다.
- **CSS**: Tailwind로 표현하기 어려운 커스텀 애니메이션 / CSS 변수만 `css/style.css`에 보완적으로 작성합니다.
- **HTML**: 시맨틱 태그(`header`, `section`, `footer`) 기반의 단일 `index.html`로 구성합니다.

### 계획된 디렉터리 구조

```
resume/
├── index.html          # 메인 페이지 (단일 페이지)
├── css/style.css       # Tailwind 보완용 커스텀 스타일
├── js/main.js          # 인터랙션 로직
└── assets/             # 이미지, 다운로드용 PDF
```

## 실행 방법

별도 빌드 과정이 없으므로 `index.html`을 브라우저에서 직접 열거나, 로컬 정적 서버로 확인합니다.

```bash
# 정적 서버 예시 (Python 사용 시)
python3 -m http.server 8000
```

## 개발 원칙

- **반응형**: 모바일 우선(Mobile First)으로 설계하고 Tailwind 브레이크포인트(`sm`, `md`, `lg`)를 사용합니다.
- **디자인 일관성**: 메인 1색 + 강조 1색 + 중립 톤, 폰트 2종 이내로 제한합니다.
- 새 섹션/기능을 추가할 때는 `ROADMAP.md`의 해당 체크리스트 항목을 갱신합니다.
