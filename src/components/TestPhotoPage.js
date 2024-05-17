import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import '../App.css';

import Header from "./Header";
import Footer from "./Footer";

export default function TestPhotoPage() {
    const springs = useSpring(
        {
            from: { opacity: 0 },
            to: { opacity: 1 }
        }
    );

    const cld = new Cloudinary({cloud: {cloudName: 'dmgbnv1lf'}});

    const testImage = cld.image('cld-sample-5');
    const testCaption = testImage.context;

    return (
        <div>
            <Header />
                <h1>TEST PHOTO PAGE</h1>
                <animated.div className="photo-box" style={ {...springs} }>
                    <AdvancedImage cldImg={testImage}/>
                </animated.div>
                <p>{testCaption}</p>
            <Footer />
        </div>
    );
}