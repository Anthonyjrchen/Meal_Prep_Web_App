const navigateTo = url => {
    history.pushState(null,null,url);
    router();
}


const router = async() => {
    const routes = [
        { path: "/welcome", view: () => console.log("Viewing Welcome Screen")},
        { path: "/dashboard", view: () => console.log("Viewing Dashboard")},
        { path: "/meal-plans", view: () => console.log("Viewing Meal Plans")},
        { path: "/profile", view: () => console.log("Viewing Profile")},
        { path: "/settings", view: () => console.log("Viewing Settings")},
        { path: "/404notfound", view: () => console.log("Not Found")},
    ];

    const potentialMatches= routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[5],
            isMatch: false,
        };
    }

    console.log(match.route.view);
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })


    router();
});