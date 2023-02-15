import React, { Component, useState } from 'react' 



export default function Pageone(props){

    const [pageOneState, setpageOneState] = useState({
        click:true,
        img:"./live-delivery-two.mp4",
        title:"Live Delivery",
        description:"Driver arrives at the facility with an empty trailer and waits while the trailer is loaded with a delivery. Once complete the driver departs with the new load."
    });

    const nextPage = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    const imgChange = (e) => {
        e.preventDefault();
        setpageOneState({
            ...pageOneState,
            click:true,
            img:"./live-delivery-two.mp4",
            title:"Live Delivery",
            description:"Driver arrives at the facility with an empty trailer and waits while the trailer is loaded with a delivery. Once complete the driver departs with the new load."
        });

        /*return(
                <video width="370" height="280" style={{"borderRadius":"2px;"}} autoPlay muted>
                    <source src={pageOneState.img} type="video/webm" />
                </video>
        )*/
    }

    const imgChangeTwo = (e) => {
        e.preventDefault();
        setpageOneState({
            ...pageOneState,
            click:false,
            img:"./drop-off-delivery-two.mp4",
            title:"Drop off Delivery",
            description:"Driver arrives at facility with trailer. The driver docks and drops off the trailer. Once dropped off, the driver leaves or proceeds to pick up a new trailer (either empty or preloaded)."
        });
   
        /*return(
            <video width="370" height="280" style={{"borderRadius":"2px;"}} autoPlay muted>
                <source src={pageOneState.imgtwo} type="video/webm" />
            </video>
        )*/
    }

    return (
        <>
        <div className="container">

            {/*<div className="scanlicenseArrow" onClick={previousPage}>
                <i className="bi bi-arrow-left-short"></i>
            </div>*/}

            {/*<div className="scanlicenseArrow">
                <i className="bi bi-arrow-left-short"><i>
            </div>*/}
<div class="outerContainer">
            <div className="scanlicenseTextAll">
                <h5>Select Delivery Type</h5>
            </div>
            <div className="photobox">
                <video key={pageOneState.img} width="360" height="270" style={{"borderRadius":"2px;"}} autoPlay muted loop playsInline>
                    <source src={pageOneState.img} type="video/mp4" />
                </video>
                
                {/*<img src={pageOneState.img} width="370" height="190"/>*/}
                
                {/*<iframe width="370" height="190"
                src={pageOneState.img}>
                </iframe>*/}
            </div>

            <div className="licensebox">
                <div className={pageOneState.click ? "optionOne addBackground" : "optionOne"} onClick={imgChange}>
                    Live Delivery
                </div>
                <div className={pageOneState.click ? "optionOne" : "optionOne addBackground"} onClick={imgChangeTwo}>
                    Drop off Delivery
                </div>
            </div>
</div>

<div class="outerContainerTwo">
    <div className="mainTextAll">
        <h5>{pageOneState.title}</h5>
        <div className="mainTextPara">
            <p>{pageOneState.description}</p>
            
        </div>
    </div>
</div>

<div class="outerContainerTwo">
    <div className="buttonbox">
        <div className="buttonback">
            Back
        </div>
        <div className="buttonselect">
            Select
        </div>
    </div>
</div>


            
            
    
            </div>
        </>
    )
}