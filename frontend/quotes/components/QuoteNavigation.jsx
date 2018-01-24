import React from 'react';
import { Link } from 'react-router-dom';
import LeftAngle from 'react-icons/lib/fa/angle-left'
import RightAngle from 'react-icons/lib/fa/angle-right'


const QuoteNavigation = (props) => {
  let element = null
  if (props.direction === 'previous') {
    element = (
      <Link className='link-previous' to={`/?quote=${props.otherQuoteId}`}>
        <LeftAngle className='fa fa-angle-left' aria-hidden='true'><span /></LeftAngle>
      </Link>
    )
  } else {
    element = (
      <Link className='link-next' to={`/?quote=${props.otherQuoteId}`}>
        <RightAngle className='fa fa-angle-right' aria-hidden='true'><span /></RightAngle>
      </Link>
    )
  }
  return element
}

export default QuoteNavigation 