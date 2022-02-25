import React, { useState } from "react";
import Bg from "../../assets/img/Bg.jpeg";
import ImageCartLogo from "../../assets/img/cart.png";

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <section>
        <div class="bg">
          <img src={Bg} />
        </div>
        {checkUser && (
          <p class="img">
            <a href="/cart">
              <img src={ImageCartLogo} alt="" />
            </a>
          </p>
        )}
      </section>
    </>
  );
};

export default MainImage;
