var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../gallery');

describe('Gallery component', function() {
    it('Renders the images and descriptions',  function() {

        var imagesSeed = [
          {url: 'img.com', description: 'cool link'},
          {url: 'png.com', description: 'cooler link'}
        ];

        //container has correct className
        //correct number of images has rendered
        //each image has correct props set

        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={imagesSeed} />);
        var result = renderer.getRenderOutput();
        console.log(result.props.children[0].props);
        result.props.className.should.equal('gallery');
        result.type.should.equal('div');
        //
        var images = result.props.children;
        images.length.should.equal(imagesSeed.length);
        images[0].props.url.should.equal('img.com');
        images[0].props.description.should.equal('cool link');
        images[1].props.url.should.equal('png.com');
        images[1].props.description.should.equal('cooler link');
        
    });
});
