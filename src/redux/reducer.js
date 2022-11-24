const initialState = {
    data: [
        {
            pic: "/images/banking.png",
            title: `Unique - a banking app`,
            desc: `This is a design concept for a higly customizable banking app. The main idea was to give user full control of what they see in their banking app.`,
            alt: "banking",
            id: 1
        },
        {
            pic: "/images/recipe.png",
            title: `Simply Food - a recipe app`,
            desc: `This is an app which can help a person to find a recipe for any occasion and any taste. You are welcome to visit my Behance profile to see the full presentation of this project.`,
            alt: "banking",
            id: 2
        }
    ]
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST": 
            return state;

        default: 
            return state;
    }
}