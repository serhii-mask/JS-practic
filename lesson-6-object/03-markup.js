const profile = {
   name: 'Jaques Gluke',
   tag: 'jgluke',
   lokation: 'Ocho Rio',
   avatar: 'https://upload.wikimedia.org/wikipedia/ru/7/78/Trollface.svg',
   stats: {
      follower: 5605,
      views: 4874,
      likes: 1530,
   },
};

const makeProfileMarkup = function (userProfile) {
   const {
      avatar = 'https://i.pravatar.cc/400?img=6',
      name,
      tag,
      lokation,
      stats: { follower, views, likes },
   } = userProfile;

   return `<div>
		<img src="${avatar}" alt="user avatar">
		<p>${name}<span>@${tag}</span></p>
		<p>Location: ${lokation}</p>
		<ul>
			<li>Follower: ${follower}</li>
			<li>Views: ${views}</li>
			<li>Likes: ${likes}</li>
		</ul>
	</div>`;
};

const markup = makeProfileMarkup(profile);

console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup);
