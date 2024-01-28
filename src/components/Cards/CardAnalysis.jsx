import './Card.css'
const CardAnalysis = ({logo,header,count,id}) => {
  return (
    <div className="col-md-6 col-lg-3">
            <div className={`card p-3 mb-2 ${id}`} >
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className={`icon ${id}`}><img src={logo} alt={header} /> </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="heading-total">{header}</h4>
                    <div>
                        <span className="count">{count}</span>
                    </div>
                </div>
            </div>
    </div>
  )
}
export default CardAnalysis;