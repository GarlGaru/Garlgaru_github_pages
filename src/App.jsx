import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, Section, Footer } from './DesignComponents';
import { sections } from './sectionData';

// Main App Component
const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : '';
    }, [darkMode]);

    return (
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <article className="page sans">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <div className="page-body">
                    {sections(darkMode).map((section) => (
                        <Section 
                            key={section.id}
                            title={section.title}
                            subtitle={section.subtitle}
                            darkMode={darkMode}
                        >
                            {section.content}
                        </Section>
                    ))}
                </div>
                <Footer darkMode={darkMode} />
            </article>
        </div>
    );
};

export default App;