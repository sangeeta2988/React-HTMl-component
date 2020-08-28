import React, { Component } from "react";
import { TitleText } from "../Component/FontStyle/Heading/Heading";
import {
  AddDefaultButton,
  AddHoverButton,
  AddHitButton,
  DefaultButton,
  HoverButton,
  HitButton,
  DisabledButton,
  GiantAddbtn,
  GiantAddHoverBtn,
  TextBtnDefault,
  TextBtnHover,
  AddTextBtn,
  Link,
  LargePrimaryDefaultBtn,
  LargePrimaryHoverBtn,
  LargeSecondaryDefaultBtn,
  LargeSecondaryHoverBtn,
} from "../Component/ButtonStyle/ButtonStyle";
class ButtonsStyle extends Component {
  render() {
    return (
      <>
        <div class="container">
          <TitleText>SC Buttons</TitleText>
          <div class="content">
            <div class="partial">
              {/* <p class="button-heading">Fixed Action Button (FAB)</p> */}
              <p class="button-title">Universal add button</p>
              <div>
                <AddDefaultButton />
                <AddHoverButton />
                <AddHitButton />
              </div>

              <p class="button-title">Text FAB</p>
              <div>
                <DefaultButton />
                <HoverButton />
                <HitButton />
                <DisabledButton />
              </div>
              <div class="text-button2">
                <p class="button-title">Giant add button</p>

                <GiantAddbtn />
                <GiantAddHoverBtn />
              </div>

              <div class="text-button">
                <div>
                  <p class="button-heading">Text buttons</p>
                  <div class="left">
                    <p class="button-title">Text + icon</p>
                    <TextBtnDefault />
                    <TextBtnHover />
                  </div>
                  <div class="right">
                    <p class="button-title">Add text button</p>
                    <AddTextBtn />
                  </div>
                </div>
              </div>
              <div>
                <p class="button-title">Links</p>
                <Link />
              </div>
            </div>

            <div class="partial">


        <p class="button-heading">Large buttons</p>

        <div>
            <div class="half1">
                <p class="button-title">Primary</p>
                <LargePrimaryDefaultBtn />
                <LargePrimaryHoverBtn />               
            </div>

            <div class="half2">
                <p class="button-title">Secondary</p>               
                <LargeSecondaryDefaultBtn />                
                <LargeSecondaryHoverBtn />
            </div>
        </div>

        <p class="button-title">Small buttons</p>

        <div>
            <div class="half1">
                <p class="button-title">Primary</p>
                <div class="button-box">
                    <div class="button-name">Default</div>
                    <div class="sample sample-primary-default">Sample orders</div>
                </div>
                <div class="button-box">
                    <div class="button-name">Hover</div>
                    <div class="sample sample-primary-hover">Sample orders</div>
                </div>
            </div>

            <div class="half2">
                <p class="button-title">Secondary</p>
                <div class="button-box">
                    <div class="button-name">Default</div>
                    <div class="sample-secondary-default sample">Sample orders</div>
                </div>
                <div class="button-box">
                    <div class="button-name">Hover</div>
                    <div class="sample-secondary-hover sample">Sample orders</div>
                </div>
            </div>
            <div>
                <p class="button-title">Tertiary</p>
                <div class="button-box">
                    <div class="button-name">Default</div>
                    <div class="tertiary-default tertiary">Sample orders</div>
                </div>
                <div class="button-box">
                    <div class="button-name">Hover</div>
                    <div class="tertiary-hover tertiary">Sample orders</div>
                </div>
            </div>

            <div>
                <p class="button-title">Social sign-in</p>
                <div class="social-box">
                    <span class="social">
                        <p><img src="./../icon/icon.png" alt="" srcset="" id="social-img" /> Sign up with Google</p>
                    </span><span class="social social-icon"><img src="./../icon/icon.png" alt="" srcset="" /></span>
                    <span class="social social-icon"><img src="./../icon/icon.png" alt="" srcset="" /></span><span
                        class="social social-icon"><img src="./../icon/icon.png" alt="" srcset="" /></span>
                </div>
            </div>
        </div>

    </div>
          </div>
        </div>
      </>
    );
  }
}

export default ButtonsStyle;
