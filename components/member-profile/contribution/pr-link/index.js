import PropTypes from 'prop-types';
import classNames from 'components/member-profile/contribution/pr-link/pr-link.module.scss';

const PRLink = ({ link }) => (
  <a href={link} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">
    <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
      <path d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
    </svg>
    <div className={classNames.divLink}>PR#{link.split('/').slice(-1)[0]}</div>
  </a>
);

PRLink.propTypes = {
  link: PropTypes.string.isRequired
};

export default PRLink;
