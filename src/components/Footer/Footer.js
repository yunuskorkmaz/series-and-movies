import React from 'react';
import facebook from '../../assets/svg/facebook-white.svg';
import instagram from '../../assets/svg/instagram-white.svg';
import twitter from '../../assets/svg/twitter-white.svg';
import appstore from '../../assets/svg/app-store.svg';
import playstore from '../../assets/svg/play-store.svg';
import windowsstore from '../../assets/svg/windows-store.svg';

import './footer.scss';

const Footer = (props) => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer-container">
					<div className="menu">
						<a>Home</a>
						<a>Terms and Conditions</a>
						<a>Privacy Policy</a>
						<a>Collection Statement</a>
						<a>Help</a>
						<a>Manage Acccount</a>
					</div>
					<div className="copyright">
						Copyright © 2020 DEMO Streaming By Yunus Korkmaz. All Rights Reserved
					</div>
					<div className="icon-menu">
						<div className="social-medias">
							<a>
								<img src={facebook} />
							</a>
							<a>
								<img src={twitter} />
							</a>
							<a>
								<img src={instagram} />
							</a>
						</div>
						<div className="mobile-stores">
							<a>
								<img src={appstore} />
							</a>
							<a>
								<img src={playstore} />
							</a>
							<a>
								<img src={windowsstore} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;