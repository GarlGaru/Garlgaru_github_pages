import React from 'react';
import { ProjectCard } from './DesignComponents';

// 프로젝트 데이터 정의
export const projects = (darkMode) => [
    {
        title: "R-PAKA",
        period: "2024.10 ~ 2024.11",
        githubUrl: "https://github.com/UniverseTrotter/R_PAKA-BE",
        technologies: ["Java", "SpringBoot", "PostgreSql", "MongoDB", "JPA", "Docker", "RestAPI"],
        description: "TRPG에서 영감을 얻은 세계관 생성, 체험 플랫폼",
        titleImage: "/images/logo.png",
        complete: true,
        images: [
            { src: "/images/2024-11-26_201848.png", alt: "R-PAKA Screenshot 1" },
            { src: "/images/2024-11-27_224718.png", alt: "R-PAKA Screenshot 2" },
            { src: "/images/2024-11-26_201541.png", alt: "R-PAKA Screenshot 3" },
            { src: "/images/image 4.png", alt: "API 응답 시간 측정 로그", description: "API 응답 시간을 측정하기 위해 Aspect를 사용한 로그 (시간 측정 로그만 표시중)" },
            { src: "/images/image 5.png", alt: "비동기 로깅 설정", description: "로깅이 실행시간에 주는 영향을 최소화 하기 위해 비동기 로깅 설정 추가" }
        ]
    },
    {
        title: "PolyChat",
        period: "2024.8 ~ 2024.11",
        githubUrl: "https://github.com/MetaPolyChat/PolyChat-BE",
        technologies: ["Java", "SpringBoot", "MySQL", "React", "JPA", "Docker", "RestAPI", "OAuth 2.0"],
        description: "카메라로 가상 2D 아바타를 조종할 수 있는 웹기반 화상채팅 플랫폼",
        titleImage: "/images/PolyChat.png",
        complete: true,
        images: [
            { src: "/images/399983980-020275ee-47d2-4ea6-9388-8788303450d2.png", alt: "PolyChat Architecture" },
            { src: "/images/image 6.png", alt: "PolyChat Screenshot 1" },
            { src: "/images/image 7.png", alt: "PolyChat Screenshot 2" },
            { src: "/images/image 8.png", alt: "PolyChat Screenshot 3" },
            { src: "/images/image 9.png", alt: "PolyChat Screenshot 4" },
            { src: "/images/image 10.png", alt: "PolyChat Screenshot 5" },
            { src: "/images/image 11.png", alt: "PolyChat Github Management" },
            { src: "/images/image 12.png", alt: "PolyChat Jira Management" }
        ]
    },
    {
        title: "MetaChat",
        period: "2024.8 ~ 2024.9",
        githubUrl: "https://github.com/Meta-Village/MetaChat-BE",
        technologies: ["Java", "SpringBoot", "MySQL", "Thymeleaf", "JPA", "Docker", "RestAPI"],
        description: "언리얼 기반 가상회의 서비스",
        titleImage: "/images/image 13.png",
        complete: true,
        images: [
            { src: "/images/image 14.png", alt: "MetaChat Screenshot 1" },
            { src: "/images/image 15.png", alt: "MetaChat Screenshot 2" },
            { src: "/images/image 16.png", alt: "MetaChat Screenshot 3" },
            { src: "/images/image 17.png", alt: "MetaChat Screenshot 4" }
        ]
    },
    {
        title: "EatIT",
        period: "2024.7 ~ 2024.7",
        githubUrl: "https://github.com/Practice-i5/EatIT",
        technologies: ["Java", "SpringBoot", "Thymeleaf", "JavaScript", "RestAPI"],
        description: "개발자들의 모임을 위한 서비스",
        titleImage: "/images/347337638-6c0d45fb-c4d0-40e7-b559-f85da3957782.png",
        complete: true,
        images: [
            { src: "/images/image 18.png", alt: "EatIT Screenshot 1" },
            { src: "/images/image 19.png", alt: "EatIT Screenshot 2" }
        ]
    },
    {
        title: "Translate",
        period: "2025.3 ~ ",
        githubUrl: "https://github.com/GarlGaru/Translate",
        technologies: ["Python", "LLM", "Transformers", "llama.cpp"],
        description: "LLM을 이용한 영상 자동 번역",
        complete: false
    },
    {
        title: "COZY",
        period: "2025.3 ~ ",
        githubUrl: "https://github.com/dokhung/Project_COZY_Backend",
        technologies: ["Java", "SpringBoot", "React", "JavaScript", "RestAPI"],
        description: "개발자들을 위한 협력 툴",
        complete: false
    }
];

// 프로젝트별 상세 내용 생성 함수
const getProjectDetails = (projectTitle) => {
    switch (projectTitle) {
        case "R-PAKA":
            return (
                <>
                    <h3><strong>백엔드 100% 설계·구현</strong></h3>
                    <ul className="bulleted-list">
                        <li>CRUD API : 세계관, 아바타, 월드, 방 생성 및 관리</li>
                        <li>데이터 저장, 진행 로직 분리</li>
                        <li>주사위 판정 서버 처리 : 조작 방지를 위해 클라이언트가 아닌 백엔드에서 판정 수행</li>
                    </ul>
                    <h3><strong>대화 로직 설계</strong></h3>
                    <ul className="bulleted-list">
                        <li><strong>WebClient 사용</strong> : AI 담당 팀원이 구축한 서버로 연결</li>
                        <li><strong>AI 서버 통신</strong> : NPC 대사 생성, 퀘스트 클리어 판정</li>
                        <li><strong>퀘스트 클리어 판정 로직 설계</strong> : NPC 대화, 주사위 결과, 전투 데이터를 조합해 AI에 전달하여 결과 판별</li>
                        <li><strong>토큰 최적화 설계</strong>: AI 대사 생성시 이전 대화를 요약하여 토큰을 최소화, 성능 저하 방지</li>
                    </ul>
                    <h3><strong>SSE(Server-Sent Events) 활용</strong></h3>
                    <ul className="bulleted-list">
                        <li>로직 처리 중 시스템 메시지 실시간 전달</li>
                        <li>AI 대사 생성 시 사용자 체감 지연시간을 최소화 하기 위해 제안</li>
                        <li>사용자 체감 지연시간 최대 50%(4초→2초) 감소</li>
                    </ul>
                </>
            );
        case "PolyChat":
            return (
                <>
                    <h3>로그인 구현</h3>
                    <ul className="bulleted-list">
                        <li>회원가입 API, 유저 정보 CRUD</li>
                        <li>구글 Oauth 2.0 로그인 구현</li>
                        <li>React 담당과 커뮤니케이션하면서 수정사항 즉각 반영</li>
                    </ul>
                    <h3>Nginx 도입</h3>
                    <ul className="bulleted-list">
                        <li>WebRTC, React 서버와 함께 같은 도메인과 인증서를 사용하도록 하기 위해 도입</li>
                    </ul>
                </>
            );
        case "MetaChat":
            return (
                <>
                    <h3><strong>AI요약</strong></h3>
                    <ul className="bulleted-list">
                        <li>WebClient로 AI 서버에 연결, 대화 음성 파일을 전송하여 요약을 받아 저장</li>
                    </ul>
                    <h3><strong>요약 조회 웹 페이지</strong></h3>
                    <ul className="bulleted-list">
                        <li>Thymeleaf를 이용해 작성</li>
                    </ul>
                </>
            );
        case "EatIT":
            return (
                <>
                    <h3><strong>알람 페이지 작성</strong></h3>
                    <ul className="bulleted-list">
                        <li>이미지로 인해 전체 페이지 로딩이 늦어지는 문제를 해결하기 위해 fetch를 이용해서 이미지 지연로딩을 구현</li>
                    </ul>
                </>
            );
        case "Translate":
            return (
                <>
                    <h3><strong>로컬 AI 앱</strong></h3>
                    <ul className="bulleted-list">
                        <li>기존의 영상 자동 번역이 문맥을 고려하지 못하는 문제를 해결하기 위해 시작</li>
                        <li>제한된 하드웨어로 고품질, 빠른 작업 속도를 실현하기 위해 작업 세분화, 토크나이저를 이용한 문장 탐색 시도 중</li>
                    </ul>
                </>
            );
        case "COZY":
            return (
                <>
                    <h3><strong>백엔드 구현 중</strong></h3>
                    <ul className="bulleted-list">
                        <li>jwt를 이용한 로그인 구현 중</li>
                        <li>팀 CRUD 작성 중</li>
                    </ul>
                </>
            );
        default:
            return null;
    }
};

// 완료된 프로젝트 섹션 내용 생성 함수
export const getProjectsContent = (darkMode) => {
    const projectList = projects(darkMode).filter(project => project.complete);    //complete가 true인 프로젝트
    
    return (
        <>
            {projectList.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    period={project.period}
                    githubUrl={project.githubUrl}
                    technologies={project.technologies}
                    description={project.description}
                    titleImage={project.titleImage}
                    images={project.images}
                    darkMode={darkMode}
                >
                    {getProjectDetails(project.title)}
                </ProjectCard>
            ))}
        </>
    );
};

// 진행 중인 프로젝트 섹션 내용 생성 함수
export const getWIPContent = (darkMode) => {
    const projectList = projects(darkMode).filter(project => !project.complete);    //complete가 false인 프로젝트
    
    return (
        <>
            {projectList.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    period={project.period}
                    githubUrl={project.githubUrl}
                    technologies={project.technologies}
                    description={project.description}
                    titleImage={project.titleImage}
                    images={project.images}
                    darkMode={darkMode}
                >
                    {getProjectDetails(project.title)}
                </ProjectCard>
            ))}
        </>
    );
};
