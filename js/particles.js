tsParticles.load("tsparticles", {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
        number: { value: 70, density: { enable: true, area: 900 } },
        color: { value: "#00b4ff" },
        shape: { type: "circle" },
        opacity: { value: 0.8, random: { enable: true, minimumValue: 0.25 }, animation: { enable: true, speed: 1, minimumValue: 0.2 } },
        size: { value: { min: 2, max: 6 }, random: true, animation: { enable: true, speed: 4, minimumValue: 0.2 } },
        links: { enable: true, distance: 160, color: "#00b4ff", opacity: 0.18, width: 1.2 },
        move: { enable: true, speed: 2.2, direction: "none", random: true, straight: false, outModes: { default: "out" } }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 180, duration: 0.6 },
            push: { quantity: 4 }
        }
    },
    detectRetina: true
});




// new
// tsParticles.load("tsparticles", {
//     fpsLimit: 60,
//     interactivity: {
//         events: {
//             onClick: { enable: true, mode: "push" },
//             onHover: { enable: true, mode: "repulse" },
//             resize: true,
//         },
//         modes: {
//             push: { quantity: 4 },
//             repulse: { distance: 100, duration: 0.4 },
//         },
//     },
//     particles: {
//         color: { value: "#ffffff" },
//         links: {
//             color: "#ffffff",
//             distance: 150,
//             enable: true,
//             opacity: 0.1,
//             width: 1,
//         },
//         collisions: { enable: true },
//         move: {
//             direction: "none",
//             enable: true,
//             outModes: { default: "bounce" },
//             random: false,
//             speed: 1,
//             straight: false,
//         },
//         number: { density: { enable: true, area: 800 }, value: 80 },
//         opacity: { value: 0.5 },
//         shape: { type: "circle" },
//         size: { value: { min: 1, max: 5 } },
//     },
//     detectRetina: true,
// });