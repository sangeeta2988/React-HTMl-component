import React from "react";
import "./ButtonStyle.css";
import WhiteIcon from "../../assets/images/plus_icon.png";
import BlackIcon from "../../assets/images/plus_black.png";
export const AddDefaultButton = () => {
  return (
    <>
      <div className="DefaultButton">
        {/* <div class="button-name">Default</div> */}
        <div class="Button">
        <i class="fa fa-plus" style={{fontSize: 24}} />
          {/* <img src={WhiteIcon} alt="" srcset="" /> */}
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
        {/* <div class="button-name">Default</div> */}
        <div class="FAB-button fab-default">Save</div>
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
        <div class="fab-disable">Save</div>
      </div>
    </>
  );
};
