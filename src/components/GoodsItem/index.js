import React from 'react'
import './index.scss'
export default function GoodsItem(props) {
    const change = () => {
        props.changeState(props.id)
    }
    return (
        <div className='my-goods-item'>
            <div className='left'>
                <div className='custom-control custom-checkbox'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id={props.id}
                        checked={props.goods_state}
                        onChange={change}
                    />
                    <label className='custom-control-label' htmlFor={props.id}>
                        <img src={props.goods_img} alt='' />
                    </label>
                </div>
            </div>
            <div className='right'>
                <div className='top'>{props.goods_name}</div>
                <div className='bottom'>
                    <span className='price'>¥ {props.goods_price}</span>
                    <span>counter组件---{props.goods_count}</span>
                </div>
            </div>
        </div>
    )
}
