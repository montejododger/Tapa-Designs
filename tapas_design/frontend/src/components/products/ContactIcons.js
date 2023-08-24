import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const LinkedInIcon = ({ url }) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size="2.5em" color="royalblue" />
            </a>
        </div>
    );
};

const GithubIcon = ({ url }) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <FaGithub size="2.5em" />
            </a>
        </div>
    );
};

export { LinkedInIcon, GithubIcon };
