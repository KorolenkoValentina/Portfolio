import React, { useState } from 'react';
// import './contentSection.scss'; 

interface ContentSectionProps {
    title: string;
    subtitle: string;
    moreText: string;
    date: string;
    category: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, subtitle, moreText, date, category }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleText = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className="content-part">
            <div className="title">{title}</div>
            <div className="subtitle">
                {subtitle}
                {!isExpanded && <span className="dots">...</span>}
                {isExpanded && (
                    <span className="more-text">{moreText}</span>
                )}
            </div>
            
            <div className="content-box d-flex justify-content-between">
                <div className="content-box__subtitle d-flex">
                    <div className="secondary-subtitle">{date}</div>
                    <div className="circle"></div>
                    <div className="secondary-subtitle">{category}</div>
                </div>
                <button className="btn btn-read" onClick={toggleText}>
                {isExpanded ? 'Collapse' : 'View more'}
            </button>
            </div>
        </div>
    );
};

export default ContentSection;