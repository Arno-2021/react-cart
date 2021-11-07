import React, { useState, useEffect } from 'react'
import './index.scss'
export default function MyFooter(props) {
    const count = () =>
        props.list
            .filter(item => item.goods_state)
            .reduce((prev, item) => prev + item.goods_count, 0)
    const total = () =>
        props.list
            .filter(item => item.goods_state)
            .reduce(
                (prev, item) => prev + item.goods_count * item.goods_price,
                0
            )
    const [checkedAll, setCheckedAll] = useState(
        props.list.every(item => item.goods_state)
    )
    useEffect(() => {
        setCheckedAll(props.list.every(item => item.goods_state))
    }, [props.list])
    const switchChecked = e => {
        setCheckedAll(e.target.checked)
        props.switchAll(!checkedAll)
    }
    return (
        <div className='my-footer'>
            <div className='custom-control custom-checkbox'>
                <input
                    type='checkbox'
                    className='custom-control-input'
                    id='footerCheck'
                    checked={checkedAll}
                    onChange={switchChecked}
                />
                <label className='custom-control-label' htmlFor='footerCheck'>
                    全选
                </label>
            </div>
            <div>
                <span>合计:</span>
                <span className='price'>¥ {total()}</span>
            </div>
            <button type='button' className='footer-btn btn btn-primary'>
                结算 ({count()})
            </button>
        </div>
    )
}
