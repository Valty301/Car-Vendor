const app = document.getElementById("holder");

holder.innerHTML = `
    <section class="about">
        <h2>About Us</h2>
        <p>
        Welcome to AutoDrive, your trusted destination for quality cars.
        We offer reliable, stylish, and affordable vehicles to suit
        your needs and lifestyle.
        </p>
        <p>
        Our goal is to make buying your next car simple, easy, and
        enjoyable.
        </p>
        <a href="#">Learn More</a>
        </section>

        <div class="container">
            <div class="product-holder">
                <div class="product">
                    <img src="./Images/syltherine.png" alt="Syltherine Chair">
                    <span class="tag discount">-30%</span>
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p class="price"><span class="old">Rp 3.500.000</span> Rp 2.500.000</p>
                </div>

                <div class="product">
                    <img src="./Images/leviosa.png" alt="Leviosa Chair">
                    <h3>Leviosa</h3>
                    <p>Stylish cafe chair</p>
                    <p class="price">Rp 2.500.000</p>
                </div>

                <div class="product">
                    <img src="./Images/lolito.png" alt="Lolito Sofa">
                    <span class="tag discount">-50%</span>
                    <h3>Lolito</h3>
                    <p>Luxury big sofa</p>
                    <p class="price"><span class="old">Rp 14.000.000</span> Rp 7.000.000</p>
                </div>

                <div class="product">
                    <img src="./Images/respira.jpg" alt="Respira Outdoor Set">
                    <span class="tag new">New</span>
                    <h3>Respira</h3>
                    <p>Outdoor bar table and stool</p>
                    <p class="price">Rp 500.000</p>
                </div>
            </div>

        </div>
        `;