const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault()
                const url = e.target.getAttribute('href')
                Router.go(url)
            })
        })

        window.addEventListener('popstate', e => {
            Router.go(e.state.route, false)
        })

        // check initial url
        Router.go(location.pathname)
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`)

        if (addToHistory) {
            history.pushState({ route }, '', route)
        }

        let pageElement = null
        switch (route) {
            case '/':
            case '/index.html':
                pageElement = document.createElement('h1')
                pageElement.textContent = 'Home'
                break
            case '/order':
                pageElement = document.createElement("h1");
                pageElement.textContent = "Order";
                break
        }

        const cache = document.querySelector('main')
        cache.innerHTML = ''
        cache.appendChild(pageElement)
    }
}

export default Router