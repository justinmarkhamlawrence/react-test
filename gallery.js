var React = require('react');

var Image = require('./image');

var Gallery = function(props) {
    var images = props.images.map(function(image, index) {
        return <Image url={image.url} description={image.description} key={index}/>;
    });

    return (
        <div className="gallery">{images}</div>
    );
};

// <Gallery images={[{url: '.com', description: 'cool image'}]} />
// <Gallery images={[..]}

module.exports = Gallery;
