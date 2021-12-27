import "./topbar.scss"
// import FadeInSection from "./fading";

export default function Topbar(){
    return (
        <div className = "topbar">
           
            <div className = 'wrapper'>
                <div className = 'left'>
                    <a href='/' className='header-logo'><span aria-hidden="true">WILLIAN_CK</span>WILLIAN_CK<span aria-hidden="true">WILLIAN_CK</span></a>
                </div>
                <div className = 'right'>
                <a href="https://github.com/willianck"><i className="fab fa-github"></i></a>
                <a href= "https://www.linkedin.com/in/william-nafack-585210173/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:willian_ck@outlook.com"><i className="fa-regular fa-envelope"></i></a>
                </div>
              
            </div>
        </div>
    );
}