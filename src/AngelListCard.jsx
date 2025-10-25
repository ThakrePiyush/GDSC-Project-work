import './AngelListCard.css';
const AngelListCard = () => {
    return <div className="angelList-cards">
            <div className="card">
                <p className='card-heading'>Venture Funds</p>
                <div className='image-container'>
                    <img className='img' src="image1.webp" alt="" />
                    <svg className='icon'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                </div>
                <p className='card-discription'>
                    
                    Raise capital, close deals, and manage your portfolio  — all from a single platform.
                </p>
            </div>
            <div className="card">
                <p className='card-heading' >SPVs</p>
                <div className='image-container'>
                   <img className='img' src="image2.webp" alt="" />
                   <svg className='icon'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                </div>
                <p className='card-discription'>
                    
                    Raise privately on a deal-by-deal basis  — all from a single platform.
                </p>
            </div>
            <div className="card">
                <p className='card-heading'>Scout Funds</p>
                <div className='image-container'>
                <img className='img' src="image3.webp" alt="" />
                <svg className='icon'  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                </div>
                <p className='card-discription'>
                    
                    Eliminate the heavy operational burden  by launching or scaling your scout program.
                </p>
            </div>
            <div className="card">
                <p className='card-heading'>Digital Subcriptions</p>
                 <div className='image-container'>
                <img className='img' src="image4.webp" alt="" />
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
                </div>
                <p className='card-discription'>
 
                   Replace subscription paperwork with flexible digital workflows that are custom to each LP.
                </p>
            </div>
    </div>
}
export default AngelListCard;