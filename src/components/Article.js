import React from "react"
import imageOne from '../pictures/blog-image-1.jpeg';
import imageTwo from '../pictures/blog-image-2.jpeg';
function Article() {
    return (
        <article>
            <div className="articleOne">
                <h5>11/12/20</h5>
                <h2>On the Streets in Brooklyn</h2>
                <img src={imageOne}
                    alt=" "
                    style={{ width: "85%", height: "10%" }}
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores
                    sunt ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
                    incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sunt
                    ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
                    incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sunt
                    ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
                    incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo?
                </p>
            </div>

            <div className="articleTwo">
                <h5>11/11/20</h5>
                <h2>Vintage in Vogue</h2>
                <img src={imageTwo}
                    alt=" "
                    style={{ width: "85%", height:"10%" }}
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores
                    sunt ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
                    incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sunt
                    ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
                    incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sunt
                    ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
                    incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo?
                </p>
            </div>
        </article>

    );
}
export default Article