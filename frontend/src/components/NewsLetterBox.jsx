import React from "react";

const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDeafault();
    };
    return (
        <div className="text-center ">
            <p className="text-2xl font-medium text-gray-800">
                Subscribe now & get 25% off
            </p>
            <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                aut.
            </p>
            <form
                onSubmit={onSubmitHandler}
                className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
            >
                <input
                    type="email"
                    className="w-full sm:flex-1 outline-none"
                    placeholder="Enter your email"
                    required
                />
                <button
                    type="submit"
                    className="bg-black text-white px-10 py-4"
                >
                    SUBSCRIBE
                </button>
            </form>
        </div>
    );
};

export default NewsLetterBox;
