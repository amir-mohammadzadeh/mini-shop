import stl from './CountInput.module.css'

const CountInput = ({value , onPluse ,onMinus }) => {
  const minus =()=>{
    value !=1 && onMinus()
  }
  
  return (
    <section className={stl["content"]} >
        <div className={stl["button"]}  onClick={minus}>
            &#8722;
        </div>
        <div className={stl["rsult"]}>
            {value}
        </div>
        <div className={stl["button"]} onClick={onPluse}>
            &#43;  
        </div>
    </section>
  )
}

export default CountInput