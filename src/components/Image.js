import React from "react";

const Image = ({ image }) => {
  return (
    <div>
      <img src={`https://res.cloudinary.com/dmgbnv1lf/image/upload/f_auto,q_auto/${image.public_id}`} alt={'asdf'} />
    </div>
  );
};

export default Image;