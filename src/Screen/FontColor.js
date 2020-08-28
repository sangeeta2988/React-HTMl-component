import React, { Component } from 'react';
import { ColorBox , Primary_Box_1 , Primary_Box_2 , Primary_Box_3 , Primary_Text_1 , Primary_Text_2 , Primary_Text_3 , 
    Secondary_Box_1 , Secondary__Text_1 , Secondary_Box_2 , Secondary__Text_2 ,
    Tertiary_Box_1 , Tertiary__Text_1 , Tertiary_Box_2 ,Tertiary__Text_2 , Tertiary_Box_3 , Tertiary__Text_3 , Tertiary_Box_4 , Tertiary__Text_4} from '../Component/FontColor/FontColor';
class FontColor extends Component{
    render()
    {
        return(<>
        <div class="container">
        <h1 class="sc-title">SC Font Colors</h1>
        <div class="content">
            <p>Primary</p>
            <ColorBox> 
            <Primary_Box_1 />
            <Primary_Text_1>Primary_Text_1</Primary_Text_1>
            </ColorBox>
            <ColorBox> 
            <Primary_Box_2 />
            <Primary_Text_2>Primary_Text_2</Primary_Text_2>
            </ColorBox>
            <ColorBox> 
            <Primary_Box_3 />
            <Primary_Text_3>Primary_Text_3</Primary_Text_3>
            </ColorBox>
            <p>Secondary</p>
            <ColorBox> 
            <Secondary_Box_1 />
            <Secondary__Text_1>Secondary__Text_1</Secondary__Text_1>
            </ColorBox>
            <ColorBox> 
            <Secondary_Box_2 />
            <Secondary__Text_2>Secondary__Text_1</Secondary__Text_2>
            </ColorBox>
            <p>Tertiary</p>
            <ColorBox> 
            <Tertiary_Box_1 />
            <Tertiary__Text_1>Tertiary__Text_1</Tertiary__Text_1>
            </ColorBox>
            <ColorBox> 
            <Tertiary_Box_2 />
            <Tertiary__Text_2>Tertiary__Text_2</Tertiary__Text_2>
            </ColorBox>
            <ColorBox> 
            <Tertiary_Box_3 />
            <Tertiary__Text_3>Tertiary__Text_3</Tertiary__Text_3>
            </ColorBox>
            <ColorBox> 
            <Tertiary_Box_4 />
            <Tertiary__Text_4>Tertiary__Text_4</Tertiary__Text_4>
            </ColorBox>
            {/* <div class="color colort1"></div>
            <div class="color colort2"></div>
            <div class="color colort3"></div>
            <div class="color colort4"></div> */}

        </div>
    </div>
        </>);
    }
}

export default FontColor;