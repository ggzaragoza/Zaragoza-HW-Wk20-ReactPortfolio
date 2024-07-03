import React, { useEffect } from "react";

import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

const Image = ({ image }) => {
  useEffect(() => {
    initLightboxJS("905B-1304-0587-0F88", "individual")
  });
  
  return (
    <div>
      <SlideshowLightbox theme="day">
        <img src={`https://res.cloudinary.com/dmgbnv1lf/image/upload/f_auto,q_auto/${image.public_id}`} alt={'asdf'} />
      </SlideshowLightbox>
      <p>{image.context.custom.caption}</p>
    </div>
  );
};

export default Image;