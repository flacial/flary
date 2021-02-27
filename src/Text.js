import React, { Fragment, useEffect, useState } from 'react'

function Text() {
    const [ count, setCount ] = useState(0)

    const counterPlus = () => {
        setCount(count + 1)
        console.log(count, 'first try')
        setCount(count + 1)
        console.log(count, 'second try')
    }

    const counterMinus = () => {
        setCount(count - 1)
    }

    // useEffect(() => {
    //     console.log(count)
    // }, [count])

    return (
        <Fragment>
            <div style={{ textAlign: 'center' }} >
                {count}
            </div>
            <button style={{ margin: '10px', padding: '10px', background: 'purple' }} onClick={counterPlus} >
                Increase
            </button>
            <button style={{ margin: '10px', padding: '10px', background: 'purple' }} onClick={counterMinus} >
                Decrease
            </button>
        </Fragment>
    )
}

export default Text
