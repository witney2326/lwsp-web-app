import React from 'react';
import ImageUploader from 'react-images-upload';

class BrowseProductPicElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles ) {
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Add image for product'
                onChange={this.onDrop}
                imgExtension={['.jpg  ', '.png ']}
                maxFileSize={5242880}
            />
        );
    }
}
export default BrowseProductPicElement;