import React from "react";
import  "./style.css";

function TranslateFrame(props) {
    return (
        <div id="iframe_box">
            <iframe src={props.translateSrc}></iframe>
        </div>
    );
}

export default TranslateFrame;