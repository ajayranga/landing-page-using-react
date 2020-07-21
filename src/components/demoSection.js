import React from 'react';

import H1 from '../assets/images/h1.jpg';
import H2 from '../assets/images/h2.jpg';
import H3 from '../assets/images/h3.jpg';
import H4 from '../assets/images/h4.jpg';
import H5 from '../assets/images/h5.jpg';
import H6 from '../assets/images/1.jpg';
import H7 from '../assets/images/2.jpg';
import H8 from '../assets/images/3.jpg';
import H9 from '../assets/images/4.jpg';
import H10 from '../assets/images/5.jpg';
import H11 from '../assets/images/6.jpg';

function Card(props) {
    var Cls = "card card" + props.index;
    return (
        <div className={Cls}>
            <div className="picContainer">
                <img src={props.pic} alt="" />
            </div>
            <div className="demoDesc ">
                <h4>{props.title}</h4>
                <div className="viewBtn">
                    <div className="btnContainer"><button>View</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

class DemoSection extends React.Component {
    RenderCard(i, pic, title) {
        return <Card index={i} pic={pic} title={title} />;
    }
    render() {
        return (
            <section className="demosContainer">
                <div className="container">
                    <h1 className="commonTittle">Explore Our Home Pages</h1>
                    <div className="cardsContainer">
                        {this.RenderCard(1, H1, "Version 01")}
                        {this.RenderCard(2, H2, "Version 02")}
                        {this.RenderCard(3, H3, "Version 03")}
                        {this.RenderCard(4, H4, "Version 04")}
                        {this.RenderCard(5, H5, "Version 05")}
                    </div>
                </div>
                <div className="container container2">
                    <h2>Explore Other Pages</h2>
                    <div className="cardsContainer">
                        {this.RenderCard(1, H6, "Portfolio")}
                        {this.RenderCard(2, H7, "Portfolio Details")}
                        {this.RenderCard(3, H8, "Blog 01")}
                        {this.RenderCard(4, H9, "Blog 02")}
                        {this.RenderCard(5, H10, "Blog 03")}
                        {this.RenderCard(6, H11, "Blog 04")}
                    </div>
                </div>
            </section>
        );
    }
}

export default DemoSection;