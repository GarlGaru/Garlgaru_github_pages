import React, { useState, useEffect } from 'react';

// Header Component
export const Header = ({ darkMode, toggleDarkMode }) => (
    <header className="header">
        <h1 className="page-title">전진석</h1>
        <p className="page-description"></p>
        <div>
            <img
                id="darkModeToggle"
                className="dark-mode-toggle"
                src={darkMode ? "/svgs/sun.svg" : "/svgs/moon.svg"}
                alt="Toggle Dark Mode"
                onClick={toggleDarkMode}
            />
        </div>
    </header>
);

// Generic Section Component
export const Section = ({ title, children, subtitle, darkMode }) => (
    <section>
        {subtitle && <h3>{subtitle}</h3>}
        <h2>
            <mark className={`highlight-teal_background hr-title ${darkMode ? 'dark-mode' : ''}`}>{title}</mark>
        </h2>
        {children}
    </section>
);

// Skill Badge Component
export const SkillBadge = ({ src, alt, isLoading }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        if (src) {
            const img = new Image();
            img.onload = () => {
                setImageLoaded(true);
                // 약간의 지연을 두고 애니메이션 효과
                setTimeout(() => {
                    setImageLoaded(true);
                }, Math.random() * 500);
            };
            img.onerror = () => setImageError(true);
            img.src = src;
        }
    }, [src]);

    if (imageError) {
        return <img className="image-badge" src="/svgs/alert-error-svgrepo-com.svg" alt="Error" />;
    }

    return (
        <img
            className={`image-badge ${!imageLoaded ? 'loading-icon' : 'slide-in'}`}
            src={imageLoaded ? src : '/svgs/fade-stagger-squares.svg'}
            alt={alt}
        />
    );
};

// Accordion Component
export const Accordion = ({ title, children, className = "", darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`accordions ${isOpen ? 'open' : ''} ${className}`}>
            <div className="header" onClick={() => setIsOpen(!isOpen)}>
                <mark className={`highlight-yellow_background ${darkMode ? 'dark-mode' : ''}`}>{title}</mark>
            </div>
            <div className="inner">
                {children}
            </div>
        </div>
    );
};

// Project Card Component
export const ProjectCard = ({ title, period, githubUrl, technologies, description, titleImage, images, children, darkMode }) => {
    // 프로젝트별 타이틀 이미지 크기 설정
    const getTitleImageWidth = (projectTitle) => {
        switch (projectTitle) {
            case "PolyChat": return '345px';
            case "MetaChat": return '336px';
            case "EatIT": return '192px';
            default: return '480px';
        }
    };

    return (
        <div className={`round-card ${darkMode ? 'dark-mode' : ''}`}>
            <div className="column-list">
                <div style={{width: '25%'}} className="column">
                    <h2>{title}</h2>
                    <p>{period}</p>
                </div>
                <div style={{width: '75%'}} className="column">
                    <p><a href={githubUrl} target="_blank" rel="noopener noreferrer">{githubUrl}</a></p>
                    <p>
                        {technologies.map((tech, index) => (
                            <React.Fragment key={index}>
                                <mark className="highlight-blue"><code>{tech}</code></mark>
                                {index < technologies.length - 1 && <mark className="highlight-blue"></mark>}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
            <hr className={darkMode ? 'dark-mode' : ''} />
            <p>{description}</p>
            {titleImage && (
                <figure className="image">
                    <img className="img-title" style={{width: getTitleImageWidth(title)}} src={titleImage} alt={title} />
                </figure>
            )}
            {images && images.length > 0 && (
                <Accordion title="이미지 자료" darkMode={darkMode}>
                    {images.map((image, index) => (
                        <React.Fragment key={index}>
                            <figure className="image">
                                <img 
                                    className="img-detail" 
                                    style={image.src.includes("image 4.png") ? {width: '100%'} : {}} 
                                    src={image.src} 
                                    alt={image.alt || `${title} image ${index + 1}`} 
                                />
                            </figure>
                            {image.description && (
                                <p>{image.description}</p>
                            )}
                        </React.Fragment>
                    ))}
                </Accordion>
            )}
            {children}
        </div>
    );
};

// Footer Component
export const Footer = ({ darkMode }) => (
    <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
        <p>Built with React</p>
        <img src="/svgs/logo512.png" alt="React logo" width="32" height="32" />
    </footer>
);

