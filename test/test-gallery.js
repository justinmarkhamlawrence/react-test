var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../gallery');

describe('Gallery component', function() {
    it('Renders the images and descriptions',  function() {
        var url = "http://www.example.com/image.png";
        var description = "Example description";
        var images = [url, url, url];

        //container has correct className
        //correct number of images has rendered
        //each image has correct props set

        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images} />);
        var result = renderer.getRenderOutput();
        console.log(result.props.children[0].props);
        result.props.className.should.equal('gallery');
        result.type.should.equal('div');
        //
        var image = result.props.children;
        image.length.should.equal(images.length);
        image[0].props.should.equal(2);
        // img.type.should.equal('img');
        // img.props.src.should.equal(url);
        // img.props.alt.should.equal(description);
        //
        // var p = result.props.children[1];
        // p.type.should.equal('p');
        // p.props.children.should.equal(description);
    });
});
