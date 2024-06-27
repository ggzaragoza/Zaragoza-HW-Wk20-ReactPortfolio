import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Buffer } from "buffer";
// import { useParams } from "react-router";
import { animated, useSpring } from "@react-spring/web";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import '../App.css';

import Header from "./Header";
import Image from "./Image";
import Footer from "./Footer";

// export async function getStaticProps() {
//     const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/tracfone`, {
//         headers: {
//             Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//         }
//     }).then(r => r.json());

//     console.log('results', results);

//     // const { resources } = results;

//     // const images = resources.map(resource => {
//     //     const { width, height } = resource;
//     //     return {
//     //         id: resource.asset_id,
//     //         title: resource.public_id,
//     //         image: resource.secure_url,
//     //         width,
//     //         height
//     //     }
//     // })

 
//     return {
//         props: {
//             // images
//         }
//     }

// };

export default function TestPhotoPage() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const result = await axios(
                `//res.cloudinary.com/dmgbnv1lf/image/list/tracfone.json`
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

    // getStaticProps();

    // console.log('images', images);
    // const { name } = useParams();

    // useEffect(() => {

    //   }, [name]);

    // fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/tags/tracfone`)
    //     .then(function (response) {
    //         console.log(response)
    //         }
    //     )

    const springs = useSpring(
        {
            from: { opacity: 0 },
            to: { opacity: 1 }
        }
    );

    // const cld = new Cloudinary({cloud: {cloudName: 'dmgbnv1lf'}});

    // const testImage = cld.image('Cloudinary_Test_Images-01_aqhgo9');

    return (
        <div>
            <Header />
                <h1>TEST PHOTO PAGE</h1>
                <animated.div className="photo-box" style={ {...springs} }>
                    {/* <AdvancedImage cldImg={images}/> */}
                    {images.map((image) => (
                        <Image key={image.public_id} image={image} />
                    ))}
                </animated.div>
            <Footer />
        </div>
    );
};