import '../App.css';

function Header({onChangeValueUser, inputValueSearch}) {
    const changeUserValue = (e) =>{
        const {value}=e.target
        onChangeValueUser(value)
    }

    return (
            <header className='header'>

                <input
                    onChange={onChangeValueUser}
                    type="text"
                    className='search-input'
                    value={inputValueSearch}
                />
                <div className="itemslist">
                    
                </div>

            </header>
    );
}


export default Header;