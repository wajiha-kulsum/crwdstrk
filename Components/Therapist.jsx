import React from 'react';

function Therapist() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col lg:flex-row px-5 py-24 items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Dr. Merry Stone — Licensed Mental Health Counselor, Psychotherapist
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            It is a long lorem ipsum established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.
                        </p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Consult Help
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:w-1/3">
                        <img className="object-cover object-center w-full h-full rounded" alt="hero" src="/lib/dr1.webp" />
                        <img className="object-cover object-center w-full h-full rounded" alt="hero" src="/lib/dr2.webp" />
                        <img className="object-cover object-center w-full h-full rounded" alt="hero" src="/lib/dr3.jpg" />
                        <img className="object-cover object-center w-full h-full rounded" alt="hero" src="/lib/dr4.jpg" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Therapist;
