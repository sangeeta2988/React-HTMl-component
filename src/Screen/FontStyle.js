import React,{ Component } from 'react';
import { H1 , H2 , H3 , H4 , H5 , H6 } from '../Component/FontStyle/Heading/Heading';
import { P } from '../Component/ParagraphStyle/ParagraphTag/Paragraph';
import { TableHeading , TableContent , Caption } from '../Component/TableStyle/Table';

class FontStyle extends Component{
    render()
    {
        return(<>
        <div class="container">
        <h1 class="sc-title">SC Font styles</h1>
        <div class="content">
           <H1> H1 heading style </H1>
           <H2> H2 heading style </H2>
           <H3> H3 heading style </H3>
           <H4> H4 heading style </H4>
           <H5> H5 heading style </H5>
           <H6> H6 heading style </H6>
           <P>Body copy style. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</P>
           <TableHeading>Table heading</TableHeading>
           <TableContent>Certain table content</TableContent>
           <Caption>caption</Caption>
        </div>
</div>
        </>);
    }
}

export default FontStyle;