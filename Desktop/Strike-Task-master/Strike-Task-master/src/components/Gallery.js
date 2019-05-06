import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faAngleLeft,
  faAngleRight,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import "../styles/gallery.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
  }
  renderImageContent = (item, index) => {
    return (
      <div key={index} onClick={e => this.openModal(e, index)}>
        <div className="gallery_item">
          <div
            className="gallery_item__image-wrap"
            style={{ backgroundImage: `url(${item.src})` }}
          />
          <div className="gallery_item__content">
            <p className="gallery_item__name">{item.name}</p>
            <FontAwesomeIcon icon={faEnvelope} className="gallery_item__icon" />
            <a href={`mailto:${item.email}`} className="gallery_item__email">
              {item.email}
            </a>
          </div>
        </div>
      </div>
    );
  };
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  };
  findPrev = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  };
  findNext = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };
  render() {
    const { dataGalery } = this.props;

    return (
      <div className="gallery">
        {dataGalery.map(this.renderImageContent)}

        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < dataGalery.length}
          item={dataGalery[this.state.currentIndex] || null}
        />
      </div>
    );
  }
}

class GalleryModal extends React.Component {
  componentDidMount = () => {
    document.body.addEventListener("keydown", this.handleKeyDown);
  };
  componentWillUnMount = () => {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  };
  handleKeyDow = e => {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  };
  render() {
    const {
      closeModal,
      hasNext,
      hasPrev,
      findNext,
      findPrev,
      item
    } = this.props;
    if (!item) {
      return null;
    } else {
      return (
        <div className="gallery-modal--overlay">
          <div className="gallery-modal_body">
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            />

            {hasPrev && (
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              />
            )}
            {hasNext && (
              <FontAwesomeIcon
                icon={faAngleRight}
                className="modal-next "
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              />
            )}
            <img src={item.src} alt="gallery" />
          </div>
        </div>
      );
    }
  }
}
export default Gallery;

Gallery.propTypes = {
  dataGalery: PropTypes.array.isRequired
};
