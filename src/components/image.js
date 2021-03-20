import React from "react"


const Image = (settings) => {
    console.log({ settings });
    return (<img src={settings.image.url} alt={``}/>)
};
export default Image;