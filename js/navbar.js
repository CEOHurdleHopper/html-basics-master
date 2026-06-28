const navTemplate =`
    <nav class="crumbs">
        <ul>
            <li class="crumb">
                <a href="/html_website/ceo_weather_hello_world.html">Home Page</a>
            </li>

            <li class="crumb">
                <a href="/html_website/simple_bio_page.html">Bio Page</a>
            </li>

        </ul>
    </nav>
    `;

document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("nav-container");
    if (navContainer) {
        navContainer.innerHTML = navTemplate;
    }
});