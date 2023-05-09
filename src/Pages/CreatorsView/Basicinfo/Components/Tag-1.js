import React from 'react';
import './Tag.scss';
// create a component for tag
function Tag(props) {
    return (
        <div className="tagging-form-field__tag-container">
            <div className="eds-tag eds-tag--default eds-tag--closeable eds-tag--closeable--default">
                <span className="eds-tag__text eds-tag__item eds-text-bs eds-text-weight--heavy eds-tag__text--small-padding">{props.text}</span>
                <div className="eds-tag__close-button eds-tag__item">
                    <button aria-label="Close tag button" className="eds-btn--button eds-btn--none eds-btn--icon-only" type="button" onClick={props.onPress}>
                        <i className="eds-vector-image eds-icon--small eds-vector-image--grey-700" data-spec="icon" data-testid="icon" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </i>
                    </button>
                </div>
            </div>
        </div>
    )
}
// export the component
export default Tag;