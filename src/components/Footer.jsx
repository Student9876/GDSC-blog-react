import React from "react";
import instaImg from '../images/Instagram.png'
import linkedInImg from '../images/LinkedIn.png'
import twitterImg from '../images/Twitter X.png'

function Footer() {
    return <>
        <div className="footerDiv">
            <center><h3>Connect With Us</h3><p>Social Media Profiles</p>
                <table>
                    <tr>
                        <td><a href="https://instagram.com/gdsc_iiitbhopal?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><img className="shakethis" src={instaImg} alt="Instagram_Profile" /></a></td>
                        <td><a href="https://www.linkedin.com/company/dsc-iiit-bhopal/" target="_blank" rel="noopener noreferrer"><img className="shakethis" src={linkedInImg} alt="linkedIn_Profile" /></a></td>
                        <td><a href="https://twitter.com/gdsc_iiitbhopal?t=4NmbYiJ7qfs2eG6RomRGqg&s=09" target="_blank" rel="noopener noreferrer"><img className="shakethis" src={twitterImg} alt="Twitter_profile" /></a></td>
                    </tr>
                </table>
                <span>&#169; GDSC IIIT Bhopal</span></center>
        </div>
    </>
}

export default Footer;