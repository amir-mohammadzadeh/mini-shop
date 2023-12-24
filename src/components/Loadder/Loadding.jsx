import style from './Loadding.module.css'
const Loadding = () => {
    return (
        <>
            <div className={style["container"]}>
                <div className={style["loader"]}><span></span></div>
                <div className={style["loader"]}><span></span></div>
                <div className={style["loader"]}><i></i></div>
                <div className={style["loader"]}><i></i></div>
            </div>
        </>
    )
}

export default Loadding