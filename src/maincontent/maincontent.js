import '../App.css';

function MainContent({ arrayblock }) {
    return(
        <main>
                {
                    arrayblock.map( (item,index)=>(
                        <div className="shop-items"
                        key={index}>
                            <p className="shop-title">{item.nameItems}</p>
                            <p className="shop-title">{item.model}</p>
                        </div>
                    ))
                }
        </main>
        )
}

export default MainContent;