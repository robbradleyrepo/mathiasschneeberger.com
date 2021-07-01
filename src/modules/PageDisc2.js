import React from 'react';
import Header from './Header';
import Image from '../img/discography/blackberrybelle.jpg';

import '../scss/layout.scss';
import '../scss/disc.scss';

import DiscList from './PageDiscList';

export default function Disc() {
 

	return (
		<main>
			<Header />
			<section class="content-master disc">
				<div class="table">

					<table>
						<thead>
							<tr>
								<th>ARTIST</th>
								<th>TITLE</th>
								<th>YEAR</th>
							</tr>
						</thead>
						<tbody>
							<DiscList />
						</tbody>
					</table> 

				</div>
				<div class="record-master">
					<div class="record-art">
						<img src={Image} alt="The Twilight Singers, Blackberry Belle [2003]" />
					</div>
					<div class="record-info">
						album copy goes here
					</div>
				</div>
			</section>
		</main>
  );
};
