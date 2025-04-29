import { FC } from 'react'
import style from './PercentView.module.css'

type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string
}

const PercentView: FC<PercentViewType> = ({max, value, makeColor}) => {

    return (
        <div className={style.percentview} style={ {color: makeColor(value/max)} }>
            { value / max * 100 }
            <div className={style.bar}>
                <div className={style.filler} style={{height: "100%" ,backgroundColor: makeColor(value/max), width: `${value / max * 100}%`}}>
                </div>
            </div>
        </div>
    )
}
export default PercentView