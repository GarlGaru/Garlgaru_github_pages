import React from 'react';
import { SkillBadge } from './DesignComponents';
import { getProjectsContent, getWIPContent } from './projectData';

// 섹션 데이터 정의
export const sections = (darkMode) => [
    {
        id: 'introduce',
        title: 'Introduce',
        subtitle: '지속적인 학습으로 성장하는 엔지니어',
        content: (
            <ul className="bulleted-list">
                <li>문제 해결 할 때 포기하지 않고 확실하게 해결하려고 합니다.</li>
                <li>팀원으로부터 높은 책임감으로 끝까지 결과를 이끌어 낸다는 평가를 받았습니다.</li>
                <li>사용자 경험을 중요시 합니다.</li>
            </ul>
        )
    },
    {
        id: 'skills',
        title: 'Skills',
        content: (() => {
            const skillLevels = {
                "Proficient": [
                    "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
                    "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white",
                    "https://img.shields.io/badge/JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
                    "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
                ],
                "Familiar": [
                    "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white",
                    "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
                    "https://img.shields.io/badge/nginx-009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
                    "https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=Thymeleaf&logoColor=white",
                    "https://img.shields.io/badge/Mybatis-000000?style=for-the-badge&logo=Mybatis&logoColor=white"
                ],
                "Tested": [
                    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white",
                    "https://img.shields.io/badge/React-%2320232a?style=for-the-badge&logo=React&logoColor=%2361DAFB",
                    "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
                    "https://img.shields.io/badge/MongoDB-%234ea94b?style=for-the-badge&logo=MongoDB&logoColor=white",
                    "https://img.shields.io/badge/AWS-%23FF9900?style=for-the-badge&logo=amazon-web-services&logoColor=white"
                ],
                "Tools": [
                    "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white",
                    "https://img.shields.io/badge/intellij-000000.svg?style=for-the-badge&logo=intellijidea&logoColor=white",
                    "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white",
                    "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white",
                    "https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"
                ]
            };

            return (
                <>
                    {Object.entries(skillLevels).map(([level, badges]) => (
                        <div key={level} className="column-list skill-list">
                            <div className="column skill-level">
                                <strong>{level}</strong>
                            </div>
                            <div className="column skill-badge">
                                {badges.map((badge, index) => (
                                    <SkillBadge key={index} src={badge} alt={`${level} skill`} />
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            );
        })()
    },
    {
        id: 'projects',
        title: 'Projects',
        content: getProjectsContent(darkMode)
    },
    {
        id: 'projects-in-progress',
        title: 'Projects in progress',
        content: getWIPContent(darkMode)
    },
    {
        id: 'links',
        title: 'Link',
        content: (
            <ul className="bulleted-list">
                <li>github : <a href="https://github.com/GarlGaru" target="_blank" rel="noopener noreferrer">https://github.com/GarlGaru</a></li>
                <li>e-mail : juon304@naver.com</li>
            </ul>
        )
    }
];
