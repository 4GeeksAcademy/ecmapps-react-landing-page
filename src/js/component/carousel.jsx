import { checkPropTypes } from 'prop-types';
import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active d-block w-100 bg-light border mt-3 pb-4 p-3 rounded">
                    <h1 className='display-1'><strong>A Warm Welcome!</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus metus sodales mauris laoreet, in placerat lectus ultricies. In hac habitasse platea dictumst. Sed nibh magna, vulputate quis porttitor viverra, porta tempus massa. Integer dapibus consequat tincidunt. Quisque luctus nisi sagittis fringilla venenatis. Vivamus non lobortis risus.</p>
                    <button type='button' className='btn btn-primary'>Call to Action!</button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;