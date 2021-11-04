export function createRouter(routes, HTMLContainer) {
    let currentRoute = null;

    window.addEventListener("popstate", (event) => {
        console.log("event", event);

        removeCurrentPage();

        if (event.state !== null) {
            renderRoute(findRouteById(event.state.id));
        }
    })  

    function renderRoute(routeObject) {
        currentRoute = routeObject;
        document.title = routeObject.title;
        routeObject.page.render(HTMLContainer)
    }

    function renderRouteWithHistoryChange(routeObject) {
        renderRoute(routeObject)

        window.history.pushState({ id: routeObject.id }, routeObject.title, routeObject.url )
    }

    function findRouteById(id) {
        return routes.find((route) => route.id === id)
    }

    function removeCurrentPage() {
        if (currentRoute !== null) {
            currentRoute.page.remove();
            currentRoute = null;
        }
    }

    return {
        go(id) {
            removeCurrentPage();
            const routeObject = findRouteById(id);
            renderRouteWithHistoryChange(routeObject); 
        },  
    }
}