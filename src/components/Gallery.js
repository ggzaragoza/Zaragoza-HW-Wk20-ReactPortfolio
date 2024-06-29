import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Buffer } from "buffer";
// import { useParams } from "react-router";
import { animated, useSpring } from "@react-spring/web";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import '../App.css';

import Image from "./Image";

export default function TestPhotoPage({ name }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const result = await axios(
                `//res.cloudinary.com/dmgbnv1lf/image/list/${name}.json`
                //     headers: {
                //         "Authorization": `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
                //     }
                // }
            );
            setImages(result.data.resources);
            return(result)
        };

        fetchImages();
    }, []);

    const springs = useSpring(
        {
            from: { opacity: 0 },
            to: { opacity: 1 }
        }
    );

    return (
        <div>
            <animated.div className="photo-box" style={ {...springs} }>
                {/* <AdvancedImage cldImg={images}/> */}
                {images.map((image) => (
                    <Image key={image.public_id} image={image} />
                ))}
            </animated.div>
        </div>
    );
};