import '../Assets/CSS/Landing.css'
import { Link } from 'react-router-dom';
function Landing(){
    return(
        <>
        <section class="showcase">
  <div class="video-container">
    <video src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
  </div>
  <div class="content">
    <h1 className='w1'>Rotors & Wheels</h1>
    <h3>Your Cart is in Progress...</h3>
   <Link to='/Login'> <a href="#about" class="btn">Feel the Drive!!</a></Link>
  </div>
</section>

<section id="about">
  <h1>About</h1>
  <p className='p2'>
  "Welcome to Rotors & Wheels, where automotive expertise meets passion. With 17 years serving Coimbatore/TamilNadu, 
   we provide top-tier care from routine maintenance to complex repairs. Our team of dedicated enthusiasts ensures transparent,
   tailored solutions, committed to exceeding your expectations. Trust Rotors & Wheels for reliable, 
  community-rooted service that elevates your car experience.
  </p>
  <br></br>
  <hr></hr>
  <h2>Follow Me On Social Media</h2>

  <div class="social">
    <a href="https://twitter.com/traversymedia" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
    <a href="https://facebook.com/traversymedia" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
    <a href="https://github.com/bradtraversy" target="_blank"><i class="fab fa-github fa-3x"></i></a>
    <a href="https://www.linkedin.com/in/bradtraversy" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
  </div>
</section>
</>
    )
}
export default Landing;