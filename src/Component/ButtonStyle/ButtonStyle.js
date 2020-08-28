import React from "react";
import "./ButtonStyle.css";
import WhiteIcon from "../../assets/images/plus_icon.png";
import BlackIcon from "../../assets/images/plus_black.png";
import plus_giant from "../../assets/images/plus_giant.png";
import RightArrow from "../../assets/images/Path 4@2x.png";
import Plush from "../../assets/images/plus.png";
// Path 4@2x

export const AddDefaultButton = () => {
  return (
    <>
      <div className="DefaultButton">
        <div class="button-name">Default</div>
        <div class="Button">
          <img src={WhiteIcon} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export const AddHoverButton = () => {
  return (
    <>
      <div className="DefaultButton">
        <div class="button-name">Hover</div>
        <div class="Button HoverEvent">
          <img src={BlackIcon} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export const AddHitButton = () => {
  return (
    <>
      <div className="DefaultButton">
        <div class="button-name">Hit</div>
        <div class="Button hitEvent">
          <img src={BlackIcon} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export const DefaultButton = () => {
  return (
    <>
      <div class="DefaultButton">
        <div class="button-name">Default</div>
        <div class="FAB-button fab-default">save</div>
      </div>
    </>
  );
};

export const HoverButton = () => {
  return (
    <>
      <div class="DefaultButton">
        <div class="button-name">Hover</div>
        <div class="FAB-button fab-hover">save</div>
      </div>
    </>
  );
};

export const HitButton = () => {
  return (
    <>
      <div class="DefaultButton">
        <div class="button-name">Hit</div>
        <div class="FAB-button fab-hit">save</div>
      </div>
    </>
  );
};

export const DisabledButton = () => {
  return (
    <>
      <div class="DefaultButton">
        <div class="button-name">Disabled</div>
        <div class="FAB-button fab-disable">save</div>
      </div>
    </>
  );
};

export const GiantAddbtn = (props) => {
  return (
    <div class="DefaultButton">
      <div class="button-name">Default</div>
      <div class="giant-default">
        <img src={plus_giant} alt="plus_giant" srcset="" />
      </div>
    </div>
  );
};

export const GiantAddHoverBtn = (props) => {
  return (
    <div class="DefaultButton">
      <div class="button-name">Hover</div>
      <div class="giant-hover">
        <img src={plus_giant} alt="plus_giant" srcset="" />
      </div>
    </div>
  );
};

// Text buttons

export const TextBtnDefault = (props) => {
  return (
    <div class="DefaultButton">
      <div class="button-name">Hover</div>
      <p class="text-button-default">
        Next
        <img src={RightArrow} alt="" srcset="" />
      </p>
    </div>
  );
};

export const TextBtnHover = (props) => {
  return (
    <div class="DefaultButton">
      <div class="button-name">Hover</div>
      <p class="text-button-hover">
        Next
        <img src={RightArrow} alt="" srcset="" />
      </p>
    </div>
  );
};

export const AddTextBtn = (props) => {
  return (   
    <div class="button-box">
      <p class="add-text-button">
        <img src={Plush} alt="" srcset="" />
        Add variation…
      </p>
    </div>
  );
};

export const Link = (props) => {
    return (
        <a href="">I am a text link</a>
    );
  };

//   LARGE BUTTON

  export const LargePrimaryDefaultBtn = (props) => {
    return (
        <div class="button-box">
        <div class="button-name">Default</div>
        <div class="primary-l">Create Style</div>
      </div>
    );
  };

  export const LargePrimaryHoverBtn = (props) => {
    return (
        <div class="button-box">
        <div class="button-name">Hover</div>
        <div class="primary-l primary-l-hover">Create Style</div>
      </div>
    );
  };

  export const LargeSecondaryDefaultBtn = (props) => {
    return (
        <div class="button-box">
        <div class="button-name">Default</div>
        <div class="Button cancel-default">Cancel</div>
      </div>
    );
  };

  export const LargeSecondaryHoverBtn = (props) => {
    return (
        <div class="button-box">
        <div class="button-name">Hover</div>
        <div class="Button cancel-hover">Cancel</div>
      </div>
    );
  };