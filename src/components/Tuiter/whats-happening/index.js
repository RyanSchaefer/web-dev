import React, {useState} from "react";
import '../../../styling/explore.css'
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    let dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: {tweet: whatsHappening}
        });

    }
    return (
        <div className='d-flex p-2 mb-2'>
            <div>
                <img className='wd-picture' src='./images/standin.jpg'/>
            </div>
            <div className='flex-grow-1'>
                <textarea
                    value={whatsHappening}
                    onChange={(e) => setWhatsHappening(e.target.value)}
                    className="h-50 w-100 bg-black form-control text-white" placeholder="What's happening?"/>
                <hr/>
                <div className='d-flex justify-content-between'>
                    <span>
                        <i className='fas fa-image m-2'/>
                        <i className='fas fa-chart-line m-2'/>
                        <i className='fas fa-smile m-2'/>
                        <i className='fas fa-calendar m-2'/>
                    </span>
                    <button
                        onClick={tuitClickHandler}
                        className='btn btn-primary rounded-pill'
                    > Tweet</button>
                </div>
            </div>
        </div>
    )
}

export default WhatsHappening;