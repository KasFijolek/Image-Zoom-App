const React = require('react')
const PropTypes = require('prop-types')

/**
 * This is the ImageSelect React component that displays
 * the select box that lets you change the image to be displayed
 */
function ImageSelect (props) {
  return (
    <div className='image-select-container'>
      <select value={props.currentImgIndex} className='image-select' onChange={props.handleSelectChange}>
        {props.images.map((currentElement, index) => {
          return <option key={index} value={index}>{currentElement.name}</option>
        })}
      </select>
    </div>
  )
}

ImageSelect.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  currentImgIndex: PropTypes.number.isRequired
}

module.exports = ImageSelect
