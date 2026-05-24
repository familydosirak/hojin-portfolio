import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Server,
  Monitor,
  Database,
  ShieldCheck,
  Map,
  Gamepad2,
  Users,
  X,
  ExternalLink,
  ChevronRight,
  Wrench,
  LayoutDashboard,
  Code2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Company Project",
    title: "지자체 영상반출시스템",
    subtitle: "서울 강남구·강북구 영상반출시스템 개발 및 유지보수",
    period: "GeomexSoft · 실무 프로젝트",
    summary:
      "월 약 2,000건 규모의 영상반출 신청이 발생하는 실서비스에서 신청 목록 처리 화면 제작, 문자 알림 기능, 오류 확인 및 유지보수를 담당했습니다.",
    overview:
      "서울 강남구·강북구 영상반출시스템의 개발 및 유지보수를 담당했습니다. 기존에 개발되어 있던 회사 솔루션을 고객 요구사항에 맞게 커스터마이징하고, 관리자가 영상반출 신청 목록을 확인하고 처리할 수 있는 화면 제작에 참여했습니다.",
    role: [
      "영상반출 신청 목록 및 처리 화면 제작",
      "영상반출 시 문자 알림 시스템 제작",
      "사용량, 다운로드 수, 각종 데이터를 확인할 수 있는 통계 페이지 추가",
      "신청 오류, 목록 조회 오류, 파일 다운로드 오류, 권한 문제 확인 및 대응",
      "로그 확인 및 DB 조회를 통한 오류 원인 파악",
      "고객 요구사항 기반 기능 수정 및 유지보수",
    ],
    features: [
      "영상반출 신청 목록 확인",
      "관리자 처리 화면",
      "문자 알림 기능",
      "통계 페이지",
      "권한 및 다운로드 오류 대응",
    ],
    problem:
      "운영 중 신청이 정상적으로 접수되지 않거나 목록 조회 오류, 파일 다운로드 오류, 권한 문제가 발생하는 경우가 있었습니다. 단순 화면 문제인지, 데이터 문제인지, 권한 문제인지 확인해야 했습니다.",
    solution:
      "로그와 DB를 확인하며 오류 발생 지점을 추적했고, 고객 요청사항을 바탕으로 필요한 화면과 기능을 수정했습니다. 특히 신청 목록을 확인하고 처리하는 관리자 화면과 문자 알림 기능처럼 실제 운영자가 사용하는 기능을 중심으로 개선했습니다.",
    result:
      "실제 운영 중인 시스템에서 오류 확인, 고객 요청 반영, 유지보수 흐름을 경험했습니다. 신청·권한·파일 처리처럼 여러 흐름이 연결된 서비스에서는 화면과 데이터, 권한 상태를 함께 확인해야 한다는 점을 배웠습니다.",
    tech: ["Java", "Spring", "JavaScript", "HTML", "CSS", "PostgreSQL"],
    icon: ShieldCheck,
  },
  {
    id: 2,
    category: "Company Project",
    title: "실시간 CCTV 통합플랫폼",
    subtitle: "지도 기반 CCTV 통합플랫폼 기능 개발 및 유지보수",
    period: "GeomexSoft · 실무 프로젝트",
    summary:
      "CCTV 통합플랫폼에서 지도 위에 선을 그리고, 저장된 선 정보를 다시 불러와 지도에 표시하는 기능 등 고객 요구사항 기반 커스터마이징을 수행했습니다.",
    overview:
      "실시간 CCTV 확인 및 관리 기능이 포함된 통합플랫폼에서 고객 요구사항에 맞춰 지도 기반 기능과 화면 기능을 개발·수정했습니다. 기존 솔루션 구조를 이해하고, 필요한 기능을 안정적으로 추가하는 업무를 수행했습니다.",
    role: [
      "CCTV 통합플랫폼 기능 개발 및 유지보수",
      "지도 위 선 그리기 기능 개발",
      "저장된 선 정보를 다시 불러와 지도에 표시하는 기능 구현",
      "고객 요구사항 기반 화면 및 기능 커스터마이징",
      "운영 중 발생하는 오류 확인 및 대응",
    ],
    features: [
      "지도 위 선 그리기",
      "그려진 선 정보 저장",
      "저장 데이터 재조회 및 지도 표시",
      "CCTV 통합플랫폼 화면 기능 수정",
    ],
    problem:
      "지도 기반 서비스에서는 사용자가 지도 위에서 입력한 정보를 단순히 화면에 표시하는 것에서 끝나지 않고, 저장 후 다시 불러왔을 때 동일하게 재현되어야 했습니다.",
    solution:
      "사용자가 지도 위에 그린 선 정보를 저장하고, 이후 조회 시 저장된 정보를 다시 지도 위에 표시하는 흐름을 구현했습니다. 지도 UI에서 사용자 입력값과 저장 데이터를 연결하는 방식으로 기능을 구성했습니다.",
    result:
      "지도 기반 UI에서 사용자 입력 정보를 저장하고 재표현하는 경험을 쌓았습니다. 공공기관 통합플랫폼은 고객 요구사항에 따라 기능이 달라질 수 있어, 기존 솔루션 구조를 이해하고 필요한 부분을 안정적으로 수정하는 것이 중요하다는 점을 배웠습니다.",
    tech: ["Java", "Spring", "JavaScript", "Vue.js", "PostgreSQL", "PostGIS"],
    icon: Monitor,
  },
  {
    id: 3,
    category: "Company Project",
    title: "공간데이터 기반 재난·관제 플랫폼",
    subtitle: "공공데이터 API와 CCTV·센서 데이터를 활용한 관제 대시보드",
    period: "GeomexSoft · 실무 프로젝트",
    summary:
      "공공데이터 포털의 날씨·재난 API, 센서·스위치·CCTV 데이터, 실시간 중계 연계를 활용해 관제 대시보드를 제작했습니다.",
    overview:
      "공공데이터 포털의 날씨 API와 재난 API, 센서·스위치·CCTV 데이터, 실시간 중계 연계를 활용한 관제 대시보드 제작에 참여했습니다. 여러 종류의 데이터를 한 화면에서 확인할 수 있도록 구성하고, 관제 상황에서 필요한 정보를 시각적으로 확인할 수 있는 화면을 개발했습니다. 또한 재난 상황시 좌표 정보를 지도 위에 표시하는 기능도 함께 구현했습니다.",
    role: [
      "공공데이터 포털 날씨 API 연계",
      "재난 관련 API 데이터 활용",
      "센서, 스위치, CCTV 데이터 연계 화면 구성",
      "실시간 중계 연계를 활용한 관제 대시보드 제작",
      "고객 요구사항 기반 화면 구성 및 유지보수",
    ],
    features: [
      "날씨 API 연계",
      "재난 API 연계",
      "센서·스위치 데이터 표시",
      "CCTV 데이터 및 실시간 중계 연계",
      "관제 대시보드 화면 구성",
    ],
    problem:
      "관제 대시보드는 다양한 출처의 데이터를 한 화면에서 확인해야 하므로, 데이터의 출처와 표시 방식, 사용자가 확인해야 하는 정보의 우선순위를 함께 고려해야 했습니다.",
    solution:
      "공공데이터 API와 내부 시스템 데이터를 조합해 관제 대시보드 화면을 구성했습니다. 날씨, 재난, 센서, 스위치, CCTV 등 서로 다른 성격의 데이터를 화면에서 확인할 수 있도록 연결하고 표시했습니다.",
    result:
      "여러 데이터 소스를 조합해 관제 화면을 구성하면서 백엔드 데이터 흐름과 프론트엔드 화면 구성을 함께 이해하는 경험을 쌓았습니다. 특히 공공기관 관제 시스템에서는 정보의 정확성과 화면 가독성이 중요하다는 점을 경험했습니다.",
    tech: ["Java", "Spring", "JavaScript", "HTML", "CSS", "PostgreSQL", "PostGIS"],
    icon: Map,
  },
  {
    id: 4,
    category: "Personal Project",
    title: "멘사코리아 연말파티 행사 방탈출 사이트",
    subtitle: "Firebase 기반 행사용 웹 방탈출 게임 플랫폼",
    period: "개인 프로젝트 · Firebase 기반 배포",
    summary:
      "참가자 확인, 닉네임 설정, 단계별 문제 풀이, 정답 검증 API, 진행 상태 저장, 관리자 통계 페이지까지 직접 구현한 웹 기반 방탈출 게임 사이트입니다.",
    overview:
      "멘사코리아 연말파티 행사에서 사용할 수 있는 웹 기반 방탈출 게임 사이트를 제작했습니다. 참가자는 참가자 확인과 닉네임 설정을 거쳐 게임을 시작하고, 단계별 문제를 풀며 다음 스테이지로 이동합니다. 관리자는 별도 관리자 페이지에서 참가자 진행 현황과 통계를 확인할 수 있도록 구성했습니다. 사이트는 재활용 할 수 있게 문제만 수정하거나 추가 할 수 있도록 제작했습니다.",
    role: [
      "Firebase Hosting 기반 웹사이트 배포",
      "Cloud Functions 기반 문제 조회 및 정답 검증 API 구성",
      "Firestore 기반 참가자 세션 및 진행 상태 저장",
      "localStorage를 활용한 세션, 스테이지 캐시, 도착 순위, 클리어 상태 저장",
      "오답 시 재시도 쿨타임 기능 구현",
      "참가자 확인 및 닉네임 설정 흐름 구현",
      "관리자 통계 페이지 및 진행 현황 확인 기능 구현",
      "다양한 문제를 포함한 단계별 게임 흐름 설계 및 구현",
    ],
    features: [
      "참가자 확인 후 게임 진입",
      "닉네임 설정 및 변경",
      "단계별 문제 조회",
      "정답 제출 및 서버 검증",
      "오답 시 쿨타임 적용",
      "클리어한 스테이지 캐시 저장",
      "스테이지별 도착 순위 표시",
      "관리자 페이지를 통한 진행 현황 확인",
    ],
    problem:
      "참가자가 새로고침하거나 다시 접속해도 진행 상태가 유지되어야 했고, 여러 참가자가 동시에 문제를 풀 때 각자의 세션과 현재 단계를 안정적으로 관리해야 했습니다.",
    solution:
      "브라우저에는 sessionId, 스테이지 캐시, 도착 순위, 쿨타임 정보를 localStorage에 저장하고, 서버에서는 Cloud Functions API로 문제 조회와 정답 검증을 처리하도록 구성했습니다. 또한 Firestore를 활용해 참가자 진행 상태와 통계 데이터를 관리했습니다.",
    result:
      "단순 정적 페이지가 아니라 참가자 상태 관리, 서버 API, 데이터 저장, 관리자 페이지, 배포까지 포함된 웹 서비스를 직접 구성했습니다. 사용자 화면과 운영자 화면을 함께 고려하며 실제 행사 운영에 필요한 흐름을 설계하는 경험을 쌓았습니다.",
    tech: ["Firebase Hosting", "Cloud Functions", "Firestore", "JavaScript", "HTML", "CSS"],
    links: [
      { label: "사이트 보기", url: "https://www.roomescape.site" },
      { label: "관리자 페이지", url: "https://www.roomescape.site/admin.html" },
    ],
    icon: Gamepad2,
  },
  {
    id: 5,
    category: "Personal Project",
    title: "팀메이커 프로젝트",
    subtitle: "점수·포지션·승패 기록 기반 팀 밸런싱 웹 서비스",
    period: "개인 프로젝트",
    summary:
      "친구들과 5:5 게임을 할 때 팀 밸런스를 맞추기 위해 제작한 팀 자동 편성 도구입니다. 점수, 포지션, 승패 기록을 고려해 팀을 구성합니다.",
    overview:
      "친구들과 5:5 게임을 할 때 팀 밸런스가 맞지 않으면 게임의 재미가 떨어지는 문제를 해결하기 위해 제작한 팀 자동 편성 웹 서비스입니다. 참가자별 점수와 포지션 정보를 기반으로 팀을 구성하고, 경기 결과에 따라 점수를 조정해 이후 팀 편성에 반영할 수 있도록 만들었습니다.",
    role: [
      "참가자 이름, 점수, 포지션 입력 및 관리 기능 구현",
      "선택된 인원을 기준으로 5:5 팀 자동 생성",
      "팀 평균 점수 표시",
      "포지션이 최대한 겹치지 않도록 팀 구성 로직 구현",
      "승패 결과 반영 및 점수 조정 기능 구현",
      "ELO 방식과 고정 점수 증감 방식을 선택할 수 있는 구조 구현",
      "이전 팀 구성과 동일한 편성이 반복되지 않도록 다양성 고려",
      "팀 결과 복사, 인원 저장/불러오기, XLSX 내보내기 기능 구현",
    ],
    features: [
      "참가자 추가, 삭제, 수정",
      "주 포지션 / 부 포지션 설정",
      "점수 기반 팀 자동 생성",
      "팀 평균 점수 비교",
      "승패 반영 후 개인 점수 업데이트",
      "승률, 승패, 게임 수 관리",
      "팀원 드래그 앤 드롭 이동",
      "팀 결과 텍스트 복사",
      "인원 목록 저장 및 불러오기",
      "XLSX 내보내기",
      "공유 링크를 통한 방 공유 기능",
    ],
    problem:
      "단순히 팀을 랜덤으로 나누는 것만으로는 충분하지 않았습니다. 점수가 비슷해도 포지션이 겹치면 실제 게임 밸런스가 맞지 않았고, 매번 비슷한 팀이 나오면 재미가 떨어질 수 있었습니다.",
    solution:
      "팀 평균 점수 차이, 포지션 커버, 주 포지션 배정, 이전 팀 구성과의 중복 정도를 함께 고려하는 방식으로 팀 생성 로직을 구성했습니다. 또한 경기 결과를 반영해 개인 점수를 조정하고, 이후 팀 생성에 다시 활용할 수 있도록 자체 레이팅 흐름을 만들었습니다.",
    result:
      "사용자가 실제로 겪는 불편을 기능으로 해결하는 과정을 경험했습니다. 단순한 랜덤 생성이 아니라 점수와 포지션, 이전 기록을 함께 고려해야 했기 때문에 팀 생성 로직을 여러 번 조정하며 균형과 사용 편의성을 함께 고민했습니다.",
    tech: ["JavaScript", "HTML", "CSS", "Firebase", "ELO Rating"],
    links: [{ label: "사이트 보기", url: "https://내전팀메이커.com" }],
    icon: Users,
  },
];

const skills = [
  {
    title: "Backend",
    icon: Server,
    items: ["Java/Spring 기능 개발", "API 연계", "오류 원인 확인", "운영 반영"],
    description:
      "공공기관 통합플랫폼과 영상반출시스템에서 고객 요구사항 기반 기능 수정과 운영 오류 대응을 경험했습니다.",
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: ["JavaScript", "Vue.js", "관리자 화면", "대시보드 UI"],
    description:
      "통계 페이지, 영상반출 처리 화면, 지도 기반 기능, 관제 대시보드 등 실제 사용자가 보는 화면 개발을 경험했습니다.",
  },
  {
    title: "Data / GIS",
    icon: Database,
    items: ["PostgreSQL", "PostGIS", "DB 조회", "지도 데이터"],
    description:
      "운영 오류 확인을 위해 DB를 조회하고, 지도 위 입력 데이터를 저장·재표시하는 기능을 구현했습니다.",
  },
  {
    title: "Firebase",
    icon: ShieldCheck,
    items: ["Hosting", "Cloud Functions", "Firestore", "상태 관리"],
    description:
      "개인 프로젝트에서 배포, 정답 검증 API, 참가자 진행 상태 저장, 관리자 기능을 직접 구성했습니다.",
  },
];

const strengths = [
  {
    title: "솔루션 커스터마이징",
    description:
      "기존에 개발되어 있던 회사 솔루션을 고객 요구사항에 맞게 수정하고, 통계 페이지·문자 알림·지도 기능 등 운영에 필요한 기능을 추가했습니다.",
    icon: Wrench,
  },
  {
    title: "운영 오류 대응",
    description:
      "신청 오류, 목록 조회 오류, 파일 다운로드 오류, 권한 문제 등을 로그와 DB 조회를 통해 확인하고 대응했습니다.",
    icon: ShieldCheck,
  },
  {
    title: "관제 화면 개발",
    description:
      "공공데이터 API, 재난 API, 센서·스위치·CCTV 데이터, 실시간 중계 연계를 활용해 관제 대시보드를 제작했습니다.",
    icon: LayoutDashboard,
  },
];

function getTheme(darkMode) {
  return {
    main: darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900",
    bgDecor: darkMode
      ? {
        wrap: "pointer-events-none fixed inset-0 opacity-70",
        one: "absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl",
        two: "absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl",
        grid: "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:34px_34px]",
      }
      : {
        wrap: "pointer-events-none fixed inset-0 opacity-80",
        one: "absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-200/60 blur-3xl",
        two: "absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-indigo-200/60 blur-3xl",
        grid: "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:34px_34px]",
      },
    header: darkMode
      ? "sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
      : "sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl",
    logo: darkMode ? "text-lg font-black tracking-tight text-white" : "text-lg font-black tracking-tight text-slate-950",
    nav: darkMode ? "hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex" : "hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex",
    navHover: "transition hover:text-cyan-500",
    themeButton: darkMode
      ? "rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
      : "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-cyan-400 hover:text-cyan-600",
    heroBadge: darkMode
      ? "mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200"
      : "mb-5 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700",
    heroTitle: darkMode
      ? "text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
      : "text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl",
    gradientText: darkMode
      ? "bg-gradient-to-r from-cyan-200 via-white to-indigo-200 bg-clip-text text-transparent"
      : "bg-gradient-to-r from-cyan-600 via-slate-950 to-indigo-600 bg-clip-text text-transparent",
    heroDesc: darkMode ? "mt-6 max-w-2xl text-lg leading-8 text-slate-300" : "mt-6 max-w-2xl text-lg leading-8 text-slate-600",
    primaryButton: darkMode
      ? "inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
      : "inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white shadow-lg shadow-slate-300/70 transition hover:bg-cyan-500 hover:shadow-cyan-200",
    secondaryButton: darkMode
      ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
      : "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 shadow-sm transition hover:border-cyan-400 hover:text-cyan-600",
    codeOuter: darkMode
      ? "rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl"
      : "rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/80",
    codeInner: darkMode ? "rounded-[1.5rem] border border-slate-700 bg-slate-900 p-6" : "rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6",
    codeText: darkMode ? "space-y-4 font-mono text-sm text-slate-200" : "space-y-4 font-mono text-sm text-slate-700",
    sectionTitle: darkMode ? "text-3xl font-bold tracking-tight text-white md:text-4xl" : "text-3xl font-bold tracking-tight text-slate-950 md:text-4xl",
    sectionDesc: darkMode ? "mt-4 max-w-3xl text-base leading-7 text-slate-400" : "mt-4 max-w-3xl text-base leading-7 text-slate-600",
    card: darkMode
      ? "rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
      : "rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-2xl",
    cardTitle: darkMode ? "text-white" : "text-slate-950",
    cardText: darkMode ? "text-slate-400" : "text-slate-600",
    mutedText: darkMode ? "text-slate-500" : "text-slate-500",
    skillCard: darkMode
      ? "rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
      : "rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl",
    iconBox: darkMode
      ? "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300"
      : "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600",
    badge: darkMode
      ? "rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
      : "rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600",
    filterActive: darkMode ? "bg-cyan-300 text-slate-950" : "bg-slate-950 text-white shadow-lg shadow-slate-300/70",
    filterInactive: darkMode
      ? "border border-slate-700 text-slate-300 hover:border-cyan-300 hover:text-cyan-300"
      : "border border-slate-300 bg-white text-slate-600 hover:border-cyan-400 hover:text-cyan-600",
    projectLinkButton: darkMode
      ? "inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-200"
      : "inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-300/70 transition hover:-translate-y-0.5 hover:bg-cyan-500 hover:shadow-cyan-200",
    contactBox: darkMode
      ? "rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-indigo-400/10 p-8 text-center backdrop-blur-sm md:p-12"
      : "rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-2xl shadow-slate-200/80 md:p-12",
    contactTitle: darkMode ? "text-3xl font-black text-white md:text-5xl" : "text-3xl font-black text-slate-950 md:text-5xl",
    contactText: darkMode ? "mx-auto mt-5 max-w-2xl leading-8 text-slate-300" : "mx-auto mt-5 max-w-2xl leading-8 text-slate-600",
    footer: darkMode ? "relative border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500" : "relative border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500",
  };
}

function Badge({ children, theme }) {
  return <span className={theme.badge}>{children}</span>;
}

function SectionTitle({ eyebrow, title, description, theme }) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-500">{eyebrow}</p>
      <h2 className={theme.sectionTitle}>{title}</h2>
      {description && <p className={theme.sectionDesc}>{description}</p>}
    </div>
  );
}

function DetailBlock({ title, children, darkMode }) {
  return (
    <div>
      <h4 className={darkMode ? "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500" : "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-400"}>
        {title}
      </h4>
      {children}
    </div>
  );
}

function ProjectModal({ project, onClose, darkMode }) {
  if (!project) return null;

  const Icon = project.icon;
  const theme = getTheme(darkMode);

  const modalTheme = {
    panel: darkMode
      ? "max-h-[86vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-950 p-6 shadow-2xl md:p-8"
      : "max-h-[86vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8",
    title: darkMode ? "mt-2 text-2xl font-bold text-white md:text-3xl" : "mt-2 text-2xl font-bold text-slate-950 md:text-3xl",
    text: darkMode ? "leading-7 text-slate-300" : "leading-7 text-slate-600",
    subText: darkMode ? "mt-2 text-slate-400" : "mt-2 text-slate-500",
    close: darkMode
      ? "rounded-full border border-slate-700 p-2 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
      : "rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-cyan-400 hover:text-cyan-600",
    learned: darkMode ? "rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5" : "rounded-2xl border border-cyan-200 bg-cyan-50 p-5",
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={modalTheme.panel}
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-500">
                <Icon size={24} />
              </div>
              <p className="text-sm font-medium text-cyan-500">{project.category}</p>
              <h3 className={modalTheme.title}>{project.title}</h3>
              <p className={modalTheme.subText}>{project.subtitle}</p>
            </div>

            <button onClick={onClose} className={modalTheme.close} aria-label="close">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-8">
            <DetailBlock title="Overview" darkMode={darkMode}>
              <p className={modalTheme.text}>{project.overview}</p>
            </DetailBlock>

            <DetailBlock title="Role" darkMode={darkMode}>
              <ul className="grid gap-2 md:grid-cols-2">
                {project.role.map((item) => (
                  <li key={item} className={darkMode ? "flex gap-3 text-slate-300" : "flex gap-3 text-slate-600"}>
                    <ChevronRight className="mt-0.5 shrink-0 text-cyan-500" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <DetailBlock title="Features" darkMode={darkMode}>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <Badge key={feature} theme={theme}>
                    {feature}
                  </Badge>
                ))}
              </div>
            </DetailBlock>

            <DetailBlock title="Problem & Solution" darkMode={darkMode}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className={darkMode ? "rounded-2xl border border-slate-800 bg-slate-900/70 p-5" : "rounded-2xl border border-slate-200 bg-slate-50 p-5"}>
                  <h5 className="mb-2 font-bold text-cyan-500">문제 상황</h5>
                  <p className={modalTheme.text}>{project.problem}</p>
                </div>
                <div className={darkMode ? "rounded-2xl border border-slate-800 bg-slate-900/70 p-5" : "rounded-2xl border border-slate-200 bg-slate-50 p-5"}>
                  <h5 className="mb-2 font-bold text-cyan-500">해결 방식</h5>
                  <p className={modalTheme.text}>{project.solution}</p>
                </div>
              </div>
            </DetailBlock>

            <DetailBlock title="Tech Stack" darkMode={darkMode}>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} theme={theme}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </DetailBlock>

            {project.links && (
              <DetailBlock title="Links" darkMode={darkMode}>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        darkMode
                          ? "inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
                          : "inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-cyan-500"
                      }
                    >
                      <ExternalLink size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </DetailBlock>
            )}

            <div className={modalTheme.learned}>
              <h4 className="mb-2 font-bold text-cyan-600">Result / Learned</h4>
              <p className={modalTheme.text}>{project.result}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const theme = getTheme(darkMode);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-300 ${theme.main}`}>
      <div className={theme.bgDecor.wrap}>
        <div className={theme.bgDecor.one} />
        <div className={theme.bgDecor.two} />
        <div className={theme.bgDecor.grid} />
      </div>

      <header className={theme.header}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className={theme.logo}>
            JH<span className="text-cyan-500">.</span>Portfolio
          </a>

          <div className="flex items-center gap-3">
            <div className={theme.nav}>
              <a className={theme.navHover} href="#about">About</a>
              <a className={theme.navHover} href="#strengths">Strengths</a>
              <a className={theme.navHover} href="#skills">Skills</a>
              <a className={theme.navHover} href="#projects">Projects</a>
              <a className={theme.navHover} href="#contact">Contact</a>
            </div>

            <button type="button" onClick={() => setDarkMode((prev) => !prev)} className={theme.themeButton}>
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative mx-auto flex min-h-[88vh] max-w-6xl items-center px-5 py-20">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

            <h1 className={theme.heroTitle}>
              안녕하세요
              <br />
              개발자 정호진입니다.
            </h1>

            <p className={theme.heroDesc}>
              <p className={theme.heroDesc}>
                기존 솔루션을 고객 환경에 맞게 커스터마이징하고, 운영 중 발생하는 문제를 로그와 DB를 확인하며 대응해왔습니다.
                협업 과정에서 함께 고민하며 더 나은 해결 방법을 찾아가는 것을 좋아하고, 사용자가 실제로 서비스를 이용하는 흐름과 경험을 중요하게 생각합니다.
              </p>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={theme.primaryButton}>
                프로젝트 보기 <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className={theme.secondaryButton}>
                연락처 보기
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <div className={theme.codeOuter}>
              <div className={theme.codeInner}>
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className={theme.codeText}>
                  <p className="text-slate-500">// portfolio.summary</p>
                  <p><span className="text-cyan-500">const</span> developer = {"{"}</p>
                  <p className="pl-4"><span className="text-indigo-500">name</span>: "정호진",</p>
                  <p className="pl-4"><span className="text-indigo-500">experience</span>: "2년 9개월",</p>
                  <p className="pl-4"><span className="text-indigo-500">phone</span>: "010-9491-2332",</p>
                  <p className="pl-4"><span className="text-indigo-500">email</span>: "familydosirak@gmail.com",</p>
                  <p className="pl-4"><span className="text-indigo-500">github</span>: "github.com/familydosirak",</p>
                  <p>{"}"};</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="About Me"
          title="실서비스 운영과 커스터마이징 경험을 가진 웹 개발자"
          description="기존 솔루션을 고객 요구사항에 맞게 수정하고, 운영 중 발생하는 오류를 확인·대응하며 실제 사용 환경에서 필요한 기능을 만들어왔습니다."
          theme={theme}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["2년 9개월", "지오멕스소프트에서 공공기관 통합플랫폼 개발 및 유지보수 경험"],
            ["월 약 2,000건", "영상반출 신청이 발생하는 실사용 환경의 시스템 운영 경험"],
            ["End-to-End", "개인 프로젝트에서 기획, 개발, 배포, 관리자 페이지까지 구현"],
          ].map(([value, label]) => (
            <motion.div key={value} className={theme.card} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-3xl font-black text-cyan-500">{value}</p>
              <p className={`mt-3 leading-7 ${theme.cardText}`}>{label}</p>
            </motion.div>
          ))}
        </div>

        <div className={darkMode ? "mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 leading-8 text-slate-300" : "mt-8 rounded-3xl border border-slate-200 bg-white p-6 leading-8 text-slate-600 shadow-lg shadow-slate-200/70"}>
          저는 Java/Spring 기반 웹 개발과 JavaScript 기반 화면 개발을 함께 경험했습니다.
          회사에서는 기존 솔루션을 고객 요구사항에 맞게 커스터마이징하며 통계 페이지, 문자 알림 기능, 지도 기반 기능, 관제 대시보드 등을 개발했습니다.
          또한 신청 오류, 목록 조회 오류, 파일 다운로드 오류, 권한 문제 등 운영 중 발생하는 이슈를 로그와 DB 조회를 통해 확인하고 대응했습니다.
        </div>
      </section>

      <section id="strengths" className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Strengths"
          title="실무 경험을 통해 쌓아온 개발 역량입니다"
          theme={theme}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className={theme.card}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={theme.iconBox}>
                  <Icon size={24} />
                </div>
                <h3 className={`mb-3 text-xl font-bold ${theme.cardTitle}`}>{item.title}</h3>
                <p className={`leading-7 ${theme.cardText}`}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Skills"
          theme={theme}
        />

        <div className="grid gap-5 md:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className={theme.skillCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={theme.iconBox}>
                  <Icon size={24} />
                </div>

                <h3 className={`mb-3 text-xl font-bold ${theme.cardTitle}`}>{skill.title}</h3>
                <p className={`mb-5 text-sm leading-6 ${theme.cardText}`}>{skill.description}</p>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} theme={theme}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-5 py-20">
        <SectionTitle
          eyebrow="Projects"
          title="프로젝트"
          description="회사 프로젝트는 고객 요구사항 반영과 운영 대응 경험을, 개인 프로젝트는 직접 기획·개발·배포한 구현 경험을 중심으로 정리했습니다."
          theme={theme}
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {["All", "Company Project", "Personal Project"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${filter === item ? theme.filterActive : theme.filterInactive}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                className={theme.card}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button type="button" onClick={() => setSelected(project)} className="w-full text-left">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className={theme.iconBox}>
                      <Icon size={24} />
                    </div>
                    <ArrowUpRight className="text-slate-400 transition group-hover:text-cyan-500" size={22} />
                  </div>

                  <p className="text-sm font-semibold text-cyan-500">{project.category}</p>
                  <h3 className={`mt-2 text-2xl font-bold ${theme.cardTitle}`}>{project.title}</h3>
                  <p className={`mt-2 ${theme.cardText}`}>{project.subtitle}</p>
                  <p className={`mt-4 line-clamp-3 leading-7 ${theme.cardText}`}>{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech) => (
                      <Badge key={tech} theme={theme}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </button>

                {project.links && (
                  <div className={darkMode ? "mt-6 flex flex-wrap gap-3 border-t border-slate-800 pt-5" : "mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-5"}>
                    {project.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={theme.projectLinkButton}>
                        <ExternalLink size={17} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className={theme.contactBox}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-cyan-500">Contact</p>
          <p className={theme.contactText}>
            저는 협업 과정에서 함께 고민하며 더 나은 해결 방법을 찾아가는 것을 좋아합니다.
            또한 기능을 구현할 때 사용자가 실제로 서비스를 이용하는 흐름과 경험을 중요하게 생각하며, 운영 환경에서 안정적으로 사용할 수 있는 기능을 만드는 개발자를 지향합니다.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className={theme.primaryButton} href="mailto:familydosirak@gmail.com">
              <Mail size={18} /> familydosirak@gmail.com
            </a>

            <a className={theme.secondaryButton} href="tel:01094912332">
              <Phone size={18} /> 010-9491-2332
            </a>

            <a className={theme.secondaryButton} href="https://github.com/familydosirak" target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className={theme.footer}>
        © 2026 Jeong Hojin Portfolio. Built for web developer portfolio.
      </footer>

      <ProjectModal project={selected} onClose={() => setSelected(null)} darkMode={darkMode} />
    </main>
  );
}
