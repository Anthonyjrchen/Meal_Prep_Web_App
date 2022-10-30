import Dashboard from "./views/Dashboard.js";
import Welcome from "./views/Welcome.js";
import Meal_Plans from "./views/Meal_Plans.js";
import Profile from "./views/Profile.js";
import Settings from "./views/Settings.js";
import Not_Found from "./views/Not_Found.js";


const navigateTo = url => {
    history.pushState(null,null,url);
    router();
}

const router = async() => {
    const routes = [
        { path: "/welcome", view: Welcome},
        { path: "/dashboard", view: Dashboard },
        { path: "/meal-plans", view: Meal_Plans},
        { path: "/profile", view: Profile},
        { path: "/settings", view: Settings},
        { path: "/404notfound", view: Not_Found},
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

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
    
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