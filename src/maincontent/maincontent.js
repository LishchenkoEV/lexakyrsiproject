import '../App.css';

function MainContent({ arrayblock }) {
    return(
        <main>
                {
                    arrayblock.map( (item,index)=>(
                        <div className="shop-items"
                            key={index}>
                            <p className="shop-title">{item.nameItems}</p>
                            <img src={item.image} />
                            <p className="shop-price">{item.price}</p>
                        </div>
                    ))
                }
        </main>
        )
}

export default MainContent;