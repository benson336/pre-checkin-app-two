import React, { Component } from 'react' 



export default function Pagetwo(props){



    const nextPage = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const previousPage = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return (
        <>
        <div className="container">
                <div className="scanlicenseArrow" onClick={previousPage}>
                    <i className="bi bi-arrow-left-short"></i>
                </div>

                <div className="innerContainerFour">
                <div className="driver">
                    <p><strong>Page Two</strong></p>
                </div>
                <div className="security">
                    <p><span style={{color:"green"}}><i class="bi bi-circle-fill"></i> No security threats identified</span><span style={{color:"grey"}}> (10 min ago)</span></p>
                </div>
            </div>

            <div style={{marginTop:"200px"}}>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit" value="Continue" onClick={nextPage}>
                            <strong>NEXT</strong>
                        </button>
                    </div>
            </div>
        </div>
            
        </>
    )
}