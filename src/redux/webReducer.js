const initialState = {
    data: [
        {
            pic: "/images/cinema.png",
            title: `MOViE - a film website`,
            desc: `MOViE is a React based movie website. A user can easily see what the main premieres are, watch latest movie trailers, search movies and see basic information about them.`,
            alt: "banking",
            id: 1,
            link: "https://preeminent-arithmetic-77bd09.netlify.app/"
        },
        {
            pic: "/images/todos.png",
            title: `mytodos - a todo app`,
            desc: `A simple React-based app that allows you to plan your tasks and get access to them on any device you want.`,
            alt: "banking",
            id: 2,
            link: "https://eugeneqg.github.io/to_do_app/"
        },
        {
            pic: "/images/weather.png",
            title: `Weather'ly - a weather app`,
            desc: `A simple React-based app that allows you to plan your tasks and get access to them on any device you want.`,
            alt: "banking",
            id: 3,
            link: "https://melodious-cupcake-a2d46f.netlify.app"
        }
    ]
}

export const webReducer = (state = initialState) => {
    return state;
}