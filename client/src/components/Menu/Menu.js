import React from "react";
import Menu from "../Menu";
// import "./Menu.css";

const Menu = props => (

    <Row className="bg-dark topRad">
        <Column size="12" className="bg-primary addRad text-center mx-auto">

        </Column>


    </Row>

    <strong className="mx-auto my-4">
        <i className="fa fa-table"></i> {props.title}
    </strong>




    <div className="row bg-dark py-2 botRad">
        {props.articles.length >= 1 ?
            props.articles.map(article => (
                <Menu
                    headline={article.headline.main ? article.headline.main : article.headline}
                    id={article._id}
                    key={article._id}
                    byline={props.findAuthor(article.byline)}
                    section_name={article.section_name}
                    pub_date={article.pub_date}
                    web_url={article.web_url}
                    saveArticle={props.saveArticle}
                    loadSaved={props.loadSaved}
                    btnText={props.btnText}
                />
            ))
            :
            <div />
        }

    </div>
        
    
                );

export default Menu;