import React from 'react'

const Cards = () => {
    return (
        <div class="row row-cols-1 row-cols-md-4 g-4 my-2">
                <div class="col">
                    <div class="card h-100">
                    <img src="https://placehold.it/500x325" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer d-flex justify-content-center">
                        <button type='button' className='btn btn-primary'>Find Out More!</button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://placehold.it/500x325" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer d-flex justify-content-center">
                        <button type='button' className='btn btn-primary'>Find Out More!</button>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://placehold.it/500x325" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer d-flex justify-content-center">
                            <button type='button' className='btn btn-primary'>Find Out More!</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://placehold.it/500x325" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer d-flex justify-content-center">
                        <button type='button' className='btn btn-primary'>Find Out More!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;