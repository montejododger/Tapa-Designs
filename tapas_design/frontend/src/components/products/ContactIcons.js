import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const LinkedInIcon = ({ url }) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size="3em" color="blue" />
            </a>
        </div>
    );
};

const GithubIcon = ({ url }) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <FaGithub size="3em" color="white" />
            </a>
        </div>
    );
};

export { LinkedInIcon, GithubIcon };
