
const options = {
    name: "Images",
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "bubble",
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 30,
            },
            push: {
                quantity: 4,
            },
        },
    },
    particles: {
        color: {
            value: "#000",
        },
        move: {
            enable: true,
            speed: 1,
        },
        number: {
            density: {
                enable: true,
            },
            limit: 0,
            value: 10,
        },
        opacity: {
            value: 1,
        },
        rotate: {
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            },
            direction: "random",
            value: {
                min: 0,
                max: 360,
            },
        },
        shape: {
            options: {
                image: [
                    {
                        name: "kusama",
                    },
                    {
                        name: "polkagate",
                    },
                    {
                        name: "polkadot",
                    },
                ],
            },
            type: "image",
        },
        size: {
            value: 16,
        },
    },
    background: {
        color: "#fff",
    },
    preload: [
        {
            src: "./images/chains/dot.png",
            name: "polkadot",
            width: 32,
            height: 32,
        },
        {
            src: "./images/pg-red.png",
            name: "polkagate",
            width: 32,
            height: 32,
        },
        {
            src: "./images/chains/ksm-circle.png",
            name: "kusama",
            width: 32,
            height: 32,
        },
    ],
};
export default options;
