



import React from 'react';

const ShowHideUsers = ({show}) => {show ? <User/> : null}

const ShowHideUsers = () => {
  const [show, setShow] = useState( false)
  return(
    <Fragment>
    <button onClick={() => setShow(!show)}>
    {show ? 'Hide User' : 'Show User'} 
    </button>
    <ShowHideUser show={show} />
    </Fragment>
    )
}
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
